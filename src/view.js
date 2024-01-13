import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveBar } from "@nivo/bar"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center h-16 px-4 border-b bg-white dark:bg-gray-800">
        <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
          <VoteIcon className="w-6 h-6" />
          <span>E-Voting Dashboard</span>
        </Link>
        <nav className="hidden lg:flex flex-row items-center gap-5 text-sm ml-auto">
          <Link className="font-bold" href="#">
            Dashboard
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Candidates
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Voters
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Results
          </Link>
        </nav>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r p-4 bg-white dark:bg-gray-800 overflow-auto">
          <nav className="space-y-1">
            <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
              <LayoutDashboardIcon className="w-6 h-6" />
              <span>Dashboard</span>
            </Link>
            <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
              <VoteIcon className="w-6 h-6" />
              <span>Candidates</span>
            </Link>
            <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
              <VoteIcon className="w-6 h-6" />
              <span>Voters</span>
            </Link>
            <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
              <SearchIcon className="w-6 h-6" />
              <span>Results</span>
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-4 overflow-auto">
          <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Total Voters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">1500</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Votes Cast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">1200</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Voting Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">80%</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Voting Status</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">Open</p>
              </CardContent>
            </Card>
          </div>
          <h2 className="text-xl font-bold mt-8 mb-4">Candidates</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>John Doe</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="John Doe"
                  className="w-full h-32 object-cover mb-4"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Jane Doe</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="Jane Doe"
                  className="w-full h-32 object-cover mb-4"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Bob Smith</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="Bob Smith"
                  className="w-full h-32 object-cover mb-4"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae.</p>
              </CardContent>
            </Card>
          </div>
          <h2 className="text-xl font-bold mt-8 mb-4">Voters</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>John Doe</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="John Doe"
                  className="w-full h-32 object-cover mb-4"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <p className="text-sm">Voted</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Jane Doe</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="Jane Doe"
                  className="w-full h-32 object-cover mb-4"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <p className="text-sm">Not Voted</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Bob Smith</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="Bob Smith"
                  className="w-full h-32 object-cover mb-4"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <p className="text-sm">Voted</p>
              </CardContent>
            </Card>
          </div>
          <h2 className="text-xl font-bold mt-8 mb-4">Results</h2>
          <BarChart className="w-full aspect-[16/9]" />
          <h2 className="text-xl font-bold mt-8 mb-4">Notifications</h2>
          <div className="grid gap-4">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Reminder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Don't forget to cast your vote!</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Update</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Voting will close at 5pm today.</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function LayoutDashboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function VoteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </svg>
  )
}
