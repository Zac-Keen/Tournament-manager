import { Calendar, MapPin, Trophy, Users } from 'lucide-react'
import type { Tournament } from '../types/tournament'
import { StatusBadge } from './StatusBadge'

interface TournamentCardProps {
  tournament: Tournament
  onViewDetails?: (tournament: Tournament) => void
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}

function formatDateRange(start: string, end: string): string {
  const opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' }
  const startDate = new Date(start + 'T00:00:00')
  const endDate = new Date(end + 'T00:00:00')
  return `${startDate.toLocaleDateString('en-US', opts)} – ${endDate.toLocaleDateString('en-US', { ...opts, year: 'numeric' })}`
}

export function TournamentCard({
  tournament,
  onViewDetails,
}: TournamentCardProps) {
  const fillPercent = Math.min(tournament.progress, 100)

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 transition-all hover:border-slate-700 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-slate-950/50">
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-900 to-slate-900/50 px-5 py-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              {tournament.game}
            </p>
            <h3 className="mt-1 truncate text-lg font-semibold text-white group-hover:text-blue-100">
              {tournament.name}
            </h3>
          </div>
          <StatusBadge status={tournament.status} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Users className="h-4 w-4 shrink-0 text-slate-500" />
            <span>
              {tournament.participants}/{tournament.maxParticipants} players
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Trophy className="h-4 w-4 shrink-0 text-amber-500/80" />
            <span className="font-medium text-amber-400/90">
              {formatCurrency(tournament.prizePool)}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Calendar className="h-4 w-4 shrink-0 text-slate-500" />
            <span className="truncate">{formatDateRange(tournament.startDate, tournament.endDate)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 shrink-0 text-slate-500" />
            <span className="truncate">{tournament.location}</span>
          </div>
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="text-slate-500">Tournament progress</span>
            <span className="font-medium text-slate-300">{tournament.progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500"
              style={{ width: `${fillPercent}%` }}
            />
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-800/80 pt-4">
          <div>
            <p className="text-xs text-slate-500">Format</p>
            <p className="text-sm font-medium text-slate-300">{tournament.format}</p>
          </div>
          <button
            type="button"
            onClick={() => onViewDetails?.(tournament)}
            className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-blue-600 hover:text-white"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  )
}
