import { supabase } from "../supabase";
import { useState } from "react"
import { Upload, X } from "lucide-react"

interface CreateTournamentModelProps {
  open: boolean
  onClose: () => void
}

export default function CreateTournamentModel({
  open,
  onClose,
}: CreateTournamentModelProps) {
  const [tournamentName, setTournamentName] = useState("")
  const [game, setGame] = useState("")
  const [teamSize, setTeamSize] = useState("5v5")
  const [format, setFormat] = useState("Single Elimination")
  const [maxTeams, setMaxTeams] = useState("")
  const [entryFee, setEntryFee] = useState("")
  const [prizePool, setPrizePool] = useState("")
  const [registrationEnd, setRegistrationEnd] = useState("")
  const [startDate, setStartDate] = useState("")
  const [description, setDescription] = useState("")

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">

        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Create Tournament
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Fill in the tournament information
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg bg-slate-900 p-2 transition hover:bg-slate-800"
          >
            <X className="h-5 w-5 text-slate-300" />
          </button>
        </div>

        <div className="space-y-8 p-6">

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Tournament Information
            </h3>

            <div className="grid gap-5 md:grid-cols-2">

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-slate-400">
                  Tournament Name *
                </label>

                <input
                  value={tournamentName}
                  onChange={(e) => setTournamentName(e.target.value)}
                  placeholder="Tournament Name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Game *
                </label>

                <input
                  value={game}
                  onChange={(e) => setGame(e.target.value)}
                  placeholder="Valorant"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Tournament Mode *
                </label>

                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                  <option>1v1</option>
                  <option>2v2</option>
                  <option>3v3</option>
                  <option>4v4</option>
                  <option>5v5</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Tournament Format *
                </label>

                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                  <option>Single Elimination</option>
                  <option>Double Elimination</option>
                  <option>Round Robin</option>
                  <option>Swiss</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Max Teams *
                </label>

                <input
                  type="number"
                  value={maxTeams}
                  onChange={(e) => setMaxTeams(e.target.value)}
                  placeholder="32"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Entry Fee (Optional)
                </label>

                <input
                  type="number"
                  value={entryFee}
                  onChange={(e) => setEntryFee(e.target.value)}
                  placeholder="$10"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Prize Pool *
                </label>

                <input
                  type="number"
                  value={prizePool}
                  onChange={(e) => setPrizePool(e.target.value)}
                  placeholder="$1000"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Registration End Date *
                </label>

                <input
                  type="date"
                  value={registrationEnd}
                  onChange={(e) => setRegistrationEnd(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Tournament Start Date *
                </label>

                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-slate-400">
                  Description *
                </label>

                <textarea
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your tournament..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Tournament Logo (Optional)
                </label>

                <label className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-dashed border-slate-700 bg-slate-900 py-6 transition hover:border-blue-500">
                  <Upload className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">
                    Upload Logo
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Tournament Banner (Optional)
                </label>

                <label className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-dashed border-slate-700 bg-slate-900 py-6 transition hover:border-blue-500">
                  <Upload className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">
                    Upload Banner
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </div>

            </div>
          </div>

          <div className="flex items-center justify-end gap-4 border-t border-slate-800 pt-6">

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:bg-slate-800"
            >
              Cancel
            </button>

           <button
  type="button"
  onClick={async () => {
    const { error } = await supabase.from("tournaments").insert([
      {
        name: tournamentName,
        game,
        team_size: Number(teamSize),
        format,
        max_teams: Number(maxTeams),
        entry_fee: Number(entryFee),
        prize_pool: prizePool,
        registration_end: registrationEnd,
        start_date: startDate,
        description,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Failed to create tournament!");
      return;
    }

    alert("Tournament Created Successfully!");
    onClose();
  }}
  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
>
  Create Tournament
</button>
          </div>

        </div>
      </div>
    </div>
  )
}