import type { TournamentStatus } from '../types/tournament'

const statusConfig: Record<
  TournamentStatus,
  { label: string; className: string; dotClassName: string }
> = {
  live: {
    label: 'Live',
    className: 'bg-emerald-500/10 text-emerald-400 ring-emerald-500/30',
    dotClassName: 'bg-emerald-400 animate-pulse',
  },
  registration: {
    label: 'Registration Open',
    className: 'bg-blue-500/10 text-blue-400 ring-blue-500/30',
    dotClassName: 'bg-blue-400',
  },
  upcoming: {
    label: 'Upcoming',
    className: 'bg-amber-500/10 text-amber-400 ring-amber-500/30',
    dotClassName: 'bg-amber-400',
  },
  completed: {
    label: 'Completed',
    className: 'bg-slate-500/10 text-slate-400 ring-slate-500/30',
    dotClassName: 'bg-slate-400',
  },
}

interface StatusBadgeProps {
  status: TournamentStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${config.className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${config.dotClassName}`} />
      {config.label}
    </span>
  )
}
