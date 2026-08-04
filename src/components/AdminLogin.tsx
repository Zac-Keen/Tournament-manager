import { useState } from "react";
import { supabase } from "../supabase";

interface Props {
  onSuccess: () => void;
}

export default function AdminLogin({ onSuccess }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    onSuccess();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-md rounded-xl bg-slate-900 p-6">
        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          Admin Login
        </h2>

        <input
          className="mb-4 w-full rounded-lg bg-slate-800 p-3 text-white"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="mb-6 w-full rounded-lg bg-slate-800 p-3 text-white"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-500"
        >
          Login
        </button>
      </div>
    </div>
  );
}