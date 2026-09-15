import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        Your job search, in one place.
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-slate-600">
        CareerConnect centralizes your resumes, applications, and interview
        stages so you always know what to do next.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/register"
          className="rounded-md bg-teal-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-600"
        >
          Get started
        </Link>
        <Link
          href="/login"
          className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
