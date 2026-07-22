import type { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  subtitle: string
  icon: LucideIcon
  accent: 'blue' | 'emerald' | 'violet' | 'amber'
}

const accentStyles = {
  blue: 'from-blue-500/20 to-blue-600/5 text-blue-400',
  emerald: 'from-emerald-500/20 to-emerald-600/5 text-emerald-400',
  violet: 'from-violet-500/20 to-violet-600/5 text-violet-400',
  amber: 'from-amber-500/20 to-amber-600/5 text-amber-400',
}

export function StatCard({ title, value, subtitle, icon: Icon, accent }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-900/80">
      <div
        className={`absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br opacity-40 blur-2xl transition-opacity group-hover:opacity-60 ${accentStyles[accent]}`}
      />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white">{value}</p>
          <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
        </div>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${accentStyles[accent]}`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
      </div>
    </div>
  )
}
