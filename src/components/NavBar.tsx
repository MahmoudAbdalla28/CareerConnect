"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export function NavBar() {
  const { data: session, status } = useSession();

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          CareerConnect
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
          {status === "authenticated" ? (
            <>
              <Link href="/profile" className="hover:text-slate-900">
                My Profile
              </Link>
              <span className="text-slate-400">{session.user?.email}</span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="rounded-md bg-slate-900 px-3 py-1.5 text-white transition hover:bg-slate-700"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-slate-900">
                Log in
              </Link>
              <Link
                href="/register"
                className="rounded-md bg-teal-700 px-3 py-1.5 text-white transition hover:bg-teal-600"
              >
                Create account
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
