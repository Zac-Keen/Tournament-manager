import {
  CalendarDays,
  LayoutDashboard,
  Plus,
  Search,
  Settings,
  Trophy,
  Users,
} from 'lucide-react'

const navItems = [
  {
    label: "Dashboard",
    page: "dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Tournaments",
    page: "tournaments",
    icon: Trophy,
  },
  {
    label: "Participants",
    page: "participants",
    icon: Users,
  },
  {
    label: "Schedule",
    page: "schedule",
    icon: CalendarDays,
  },
  {
    label: "Settings",
    page: "settings",
    icon: Settings,
  },
]

interface SidebarProps {
  activePage: string
  setActivePage: (page: string) => void
}

export function Sidebar({
  activePage,
  setActivePage,
}: SidebarProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-slate-800 bg-slate-950">
      <div className="flex h-16 items-center gap-3 border-b border-slate-800 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-900/40">
          <Trophy className="h-5 w-5 text-white" strokeWidth={2} />
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-tight text-white">Tournament</h1>
          <p className="text-xs text-slate-500">Manager Pro</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => (
          <button
          key={item.label}
          type="button"
          onClick={() => setActivePage(item.page)}
          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
            activePage === item.page
              ? "bg-blue-600/10 text-blue-400"
              : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
          }`}
        >
          <item.icon
            className="h-5 w-5"
            strokeWidth={1.75}
          />
          {item.label}
        </button>
        ))}
      </nav>

      <div className="border-t border-slate-800 p-4">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-colors hover:bg-blue-500"
        >
          <Plus className="h-4 w-4" />
          New Tournament
        </button>
      </div>
    </aside>
  )
}

interface HeaderProps {
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-8">
        <div>
          <h2 className="text-xl font-semibold text-white">Dashboard</h2>
          <p className="text-sm text-slate-500">Monitor and manage your active tournaments</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="search"
              placeholder="Search tournaments..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-72 rounded-lg border border-slate-800 bg-slate-900 py-2 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-800 text-sm font-semibold text-white ring-2 ring-slate-700">
            TM
          </div>
        </div>
      </div>
    </header>
  )
}
