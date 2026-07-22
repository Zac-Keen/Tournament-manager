export type TournamentStatus = 'live' | 'registration' | 'upcoming' | 'completed'

export type TournamentFormat = 'Single Elimination' | 'Double Elimination' | 'Round Robin' | 'Swiss'

export interface Tournament {
  id: string
  name: string
  game: string
  format: TournamentFormat
  status: TournamentStatus
  participants: number
  maxParticipants: number
  prizePool: number
  progress: number
  startDate: string
  endDate: string
  location: string
  organizer: string
}
