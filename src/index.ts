import { Canister, query, text, update, Void, Variant, int } from 'azle';

type Guess = {
    randomNumber: number;
    givenNumber: number;
    attempts: number;
}

let guess = new Map<string, Guess>();

export default Canister({

})

