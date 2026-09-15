"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"JOB_SEEKER" | "RECRUITER">("JOB_SEEKER");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Something went wrong.");
      setSubmitting(false);
      return;
    }

    const signInResult = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setSubmitting(false);
    if (signInResult?.ok) {
      router.push("/profile");
    } else {
      router.push("/login");
    }
  }

  return (
    <div className="mx-auto max-w-sm px-6 py-16">
      <h1 className="text-2xl font-semibold text-slate-900">Create your account</h1>
      <p className="mt-1 text-sm text-slate-600">
        Already have one?{" "}
        <Link href="/login" className="font-medium text-teal-700 hover:underline">
          Log in
        </Link>
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">I am a</label>
          <div className="mt-1 flex gap-3">
            <button
              type="button"
              onClick={() => setRole("JOB_SEEKER")}
              className={`flex-1 rounded-md border px-3 py-2 text-sm font-medium transition ${
                role === "JOB_SEEKER"
                  ? "border-teal-700 bg-teal-50 text-teal-800"
                  : "border-slate-300 text-slate-600 hover:bg-slate-50"
              }`}
            >
              Job seeker
            </button>
            <button
              type="button"
              onClick={() => setRole("RECRUITER")}
              className={`flex-1 rounded-md border px-3 py-2 text-sm font-medium transition ${
                role === "RECRUITER"
                  ? "border-teal-700 bg-teal-50 text-teal-800"
                  : "border-slate-300 text-slate-600 hover:bg-slate-50"
              }`}
            >
              Recruiter
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Full name
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
          />
          <p className="mt-1 text-xs text-slate-500">At least 8 characters.</p>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-md bg-teal-700 px-3 py-2 text-sm font-medium text-white transition hover:bg-teal-600 disabled:opacity-60"
        >
          {submitting ? "Creating account…" : "Create account"}
        </button>
      </form>
    </div>
  );
}
