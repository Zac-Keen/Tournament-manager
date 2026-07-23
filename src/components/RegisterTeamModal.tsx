import { X, Upload } from "lucide-react";
import { useState } from "react";

interface RegisterTeamModalProps {
  open: boolean;
  onClose: () => void;
  tournament: any;
}

export default function RegisterTeamModal({
  open,
  onClose,
  tournament,
}: RegisterTeamModalProps) {
  const [teamName, setTeamName] = useState("");
  const [captainName, setCaptainName] = useState("");
  const [captainDiscord, setCaptainDiscord] = useState("");
  const [captainGameId, setCaptainGameId] = useState("");

  const [players, setPlayers] = useState(
    Array.from(
      { length: Math.max((tournament?.teamSize || 1) - 1, 0) },
      () => ({
        discord: "",
        gameId: "",
      })
    )
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Register Team
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              {tournament?.name}
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg bg-slate-900 p-2 hover:bg-slate-800"
          >
            <X className="h-5 w-5 text-slate-300" />
          </button>

        </div>

        <div className="space-y-8 p-6">

          {/* Team Information */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Team Information
            </h3>

            <div className="space-y-5">

              <div>

                <label className="mb-2 block text-sm text-slate-400">
                  Team Name *
                </label>

                <input
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                  placeholder="Enter Team Name"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm text-slate-400">
                  Team Logo (Optional)
                </label>

                <label className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-dashed border-slate-700 bg-slate-900 py-6 hover:border-blue-500">

                  <Upload className="h-5 w-5 text-blue-400" />

                  <span className="text-slate-300">
                    Upload Team Logo
                  </span>

                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                  />

                </label>

              </div>

            </div>

          </div>

          {/* Captain */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Captain Information
            </h3>

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm text-slate-400">
                  Captain Name *
                </label>

                <input
                  value={captainName}
                  onChange={(e) => setCaptainName(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                  placeholder="Captain Name"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm text-slate-400">
                  Captain Discord ID *
                </label>

                <input
                  value={captainDiscord}
                  onChange={(e) => setCaptainDiscord(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                  placeholder="Discord Username"
                />

              </div>

              <div className="md:col-span-2">

                <label className="mb-2 block text-sm text-slate-400">
                  Captain Game ID *
                </label>

                <input
                  value={captainGameId}
                  onChange={(e) => setCaptainGameId(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
                  placeholder="Game ID"
                />

              </div>

            </div>

          </div>
          
                    {/* Players */}

                    {players.length > 0 && (
            <div>

              <h3 className="mb-5 text-lg font-semibold text-white">
                Players
              </h3>

              <div className="space-y-6">

                {players.map((player, index) => (

                  <div
                    key={index}
                    className="rounded-xl border border-slate-800 bg-slate-900 p-5"
                  >

                    <h4 className="mb-4 text-white font-semibold">
                      Player {index + 2}
                    </h4>

                    <div className="grid gap-5 md:grid-cols-2">

                      <div>

                        <label className="mb-2 block text-sm text-slate-400">
                          Player {index + 2} Discord ID *
                        </label>

                        <input
                          value={player.discord}
                          onChange={(e) => {
                            const updated = [...players]
                            updated[index].discord = e.target.value
                            setPlayers(updated)
                          }}
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                          placeholder="Discord Username"
                        />

                      </div>

                      <div>

                        <label className="mb-2 block text-sm text-slate-400">
                          Player {index + 2} Game ID *
                        </label>

                        <input
                          value={player.gameId}
                          onChange={(e) => {
                            const updated = [...players]
                            updated[index].gameId = e.target.value
                            setPlayers(updated)
                          }}
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                          placeholder="Game ID"
                        />

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>
          )}

                    {/* Bottom Buttons */}

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
  onClick={() => {
    console.log({
      teamName,
      captainName,
      captainDiscord,
      captainGameId,
      players,
    })

    alert("Team Registered Successfully!")

    onClose()
  }}
  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
>
  Register Team
</button>

</div>

</div>

</div>

</div>
)
}