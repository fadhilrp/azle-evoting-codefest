import {
    blob,
    Canister,
    ic,
    Err,
    nat64,
    Ok,
    Opt,
    Principal,
    query,
    Record,
    Result,
    StableBTreeMap,
    text,
    update,
    Variant,
    Vec,
    int
} from 'azle';

const Candidate = Record({
    id: Principal,
    natIdentificationNumber: int,
    citizenIds: Vec(Principal),
    name: text
});
type Candidate = typeof Candidate.tsType;

const ResultPolling = Record({
    id: Principal,
    name: text,
    count: int
})
type ResultPolling = typeof ResultPolling.tsType;

const Citizen = Record({
    id: Principal,
    natIdentificationNumber: int,
    name: text,
    candidateId: Principal
});
type Citizen = typeof Citizen.tsType;

const DataError = Variant({
    CitizenDoesNotExist: Principal,
    CandidateDoesNotExist: Principal
});
type DataError = typeof DataError.tsType;

let candidates = StableBTreeMap<Principal, Candidate>(0);
let citizens = StableBTreeMap<Principal, Citizen>(1);
let resultPollings = StableBTreeMap<Principal, ResultPolling>(2);
// resultPollings = StableBTreeMap<Principal, ResultPolling>(2);

function createPrincipal(name: string, natIdentificationNumber: number): Principal {
    return Principal.fromText(`${name}-${natIdentificationNumber}-${ic.time()}`);
}

export default Canister({
    createCandidate: update([text, int], Candidate, (name, natIdentificationNumber) => {
        const id = createPrincipal(name, Number(natIdentificationNumber)); // Convert bigint to number
        const candidate: Candidate = {
            id,
            name,
            natIdentificationNumber,
            citizenIds: []
        };
        candidates.insert(candidate.id, candidate);
        return candidate;
    }),
    readPolling: query([], Vec(ResultPolling), () => {
        // resultPollings.clear();

        for (const candidate of candidates.values()) {
            const result: ResultPolling = {
                id: candidate.id,
                name: candidate.name,
                count: BigInt(candidate.citizenIds.length)
            };
            resultPollings.insert(candidate.id, result);
        }
        return resultPollings.values();
    }),
    readCandidates: query([], Vec(Candidate), () => {
        return candidates.values();
    }),
    createCitizenAndVote: update(
        [text, int, Principal],
        Result(Citizen, DataError),
        (name, natIdentificationNumber, candidateId) => {
            const candidateOpt = candidates.get(candidateId);

            if ('None' in candidateOpt) {
                return Err({
                    CandidateDoesNotExist: candidateId
                });
            }

            const candidate = candidateOpt.Some;

            const id = createPrincipal(name, Number(natIdentificationNumber));
            const citizen: Citizen = {
                id,
                name,
                natIdentificationNumber,
                candidateId
            };

            if ('Some' in citizens.get(id)) {
                return Err({
                    CitizenDoesNotExist: id
                });
            }

            citizens.insert(citizen.id, citizen);

            const updatedCandidate: Candidate = {
                ...candidate,
                citizenIds: [...candidate.citizenIds, citizen.id]
            };

            candidates.insert(updatedCandidate.id, updatedCandidate);

            return Ok(citizen);
        }
    ),
    readCitizens: query([], Vec(Citizen), () => {
        return citizens.values();
    }),
    readCitizenById: query([Principal], Opt(Citizen), (id) => {
        return citizens.get(id);
    }),
});