import { useMemo, useState } from 'react'
import { Radio, Trophy, Users, Wallet } from 'lucide-react'
import { Header, Sidebar } from './components/Layout'
import { StatCard } from './components/StatCard'
import { TournamentCard } from './components/TournamentCard'
import { getOngoingTournaments, getStats } from './data/tournaments'

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activePage, setActivePage] = useState('dashboard')
  const [selectedTournament, setSelectedTournament] = useState<any>(null)
  const stats = getStats()
  const ongoingTournaments = getOngoingTournaments()

  const filteredTournaments = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return ongoingTournaments

    return ongoingTournaments.filter(
      (t) =>
        t.name.toLowerCase().includes(query) ||
        t.game.toLowerCase().includes(query) ||
        t.location.toLowerCase().includes(query) ||
        t.organizer.toLowerCase().includes(query),
    )
  }, [ongoingTournaments, searchQuery])

  return (
    <div className="min-h-screen bg-slate-950">
      <Sidebar
  activePage={activePage}
  setActivePage={setActivePage}
/>

      <div className="pl-64">
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <main className="px-8 py-8">

  {activePage === "dashboard" && (
    <>
      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Active Tournaments"
          value={String(stats.activeTournaments)}
          subtitle="Currently running or open"
          icon={Trophy}
          accent="blue"
        />

        <StatCard
          title="Live Now"
          value={String(stats.liveNow)}
          subtitle="In progress right now"
          icon={Radio}
          accent="emerald"
        />

        <StatCard
          title="Total Players"
          value={String(stats.totalPlayers)}
          subtitle="Across all active events"
          icon={Users}
          accent="violet"
        />

        <StatCard
          title="Prize Pool"
          value={formatCurrency(stats.totalPrizePool)}
          subtitle="Combined active prizes"
          icon={Wallet}
          accent="amber"
        />
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Ongoing Tournaments
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {filteredTournaments.length} tournament
              {filteredTournaments.length !== 1 ? "s" : ""} in progress or accepting registrations
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
          {filteredTournaments.map((tournament) => (
            <TournamentCard
              key={tournament.id}
              tournament={tournament}
              onViewDetails={(tournament) => {
                setSelectedTournament(tournament)
                setActivePage("tournament-details")
              }}
            />
          ))}
        </div>
      </section>
    </>
  )}

  {activePage === "tournaments" && (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Tournaments
        </h2>

        <p className="mt-2 text-slate-400">
          Browse all ongoing tournaments.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
        {filteredTournaments.map((tournament) => (
          <TournamentCard
            key={tournament.id}
            tournament={tournament}
            onViewDetails={(tournament) => {
              setSelectedTournament(tournament)
              setActivePage("tournament-details")
            }}
          />
        ))}
      </div>
    </section>
  )}

{activePage === "tournament-details" && selectedTournament && (
    <section>
      <button
        onClick={() => setActivePage("tournaments")}
        className="mb-6 rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-700"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-white">
        {selectedTournament.name}
      </h1>

      <p className="mt-2 text-slate-400">
        {selectedTournament.game}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-6">
        <div className="rounded-xl bg-slate-900 p-5">
          <p className="text-slate-400">Prize Pool</p>
          <h2 className="mt-2 text-2xl font-bold text-blue-400">
            {formatCurrency(selectedTournament.prizePool)}
          </h2>
        </div>

        <div className="rounded-xl bg-slate-900 p-5">
          <p className="text-slate-400">Organizer</p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            {selectedTournament.organizer}
          </h2>
        </div>
      </div>

      <div className="mt-8 rounded-xl bg-slate-900 p-6">
        <h2 className="mb-5 text-2xl font-bold text-white">
          Tournament Bracket
        </h2>

        <div className="rounded-lg border border-dashed border-slate-700 p-10 text-center text-slate-500">
          Bracket Coming Soon...
        </div>
      </div>
    </section>
  )}

</main>
      </div>
    </div>
  )
}