"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Profile = {
  name: string;
  email: string;
  role: string;
  headline: string | null;
  bio: string | null;
  resumeName: string | null;
  resumeUrl: string | null;
};

export default function ProfilePage() {
  const { status } = useSession();
  const router = useRouter();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [headline, setHeadline] = useState("");
  const [bio, setBio] = useState("");
  const [savingText, setSavingText] = useState(false);
  const [textMessage, setTextMessage] = useState("");

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [resumeMessage, setResumeMessage] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data: Profile) => {
        setProfile(data);
        setHeadline(data.headline ?? "");
        setBio(data.bio ?? "");
      });
  }, [status]);

  async function handleSaveText(e: React.FormEvent) {
    e.preventDefault();
    setSavingText(true);
    setTextMessage("");

    const res = await fetch("/api/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ headline, bio }),
    });

    setSavingText(false);
    setTextMessage(res.ok ? "Profile saved." : "Could not save your profile.");
  }

  async function handleUploadResume(e: React.FormEvent) {
    e.preventDefault();
    if (!resumeFile) return;
    setUploading(true);
    setResumeMessage("");

    const formData = new FormData();
    formData.append("resume", resumeFile);

    const res = await fetch("/api/profile/resume", { method: "POST", body: formData });
    const data = await res.json();

    setUploading(false);
    if (res.ok) {
      setProfile((prev) => (prev ? { ...prev, resumeName: data.resumeName, resumeUrl: data.resumeUrl } : prev));
      setResumeFile(null);
      setResumeMessage("Resume uploaded.");
    } else {
      setResumeMessage(data.error ?? "Upload failed.");
    }
  }

  if (status === "loading" || !profile) {
    return <div className="mx-auto max-w-2xl px-6 py-16 text-sm text-slate-500">Loading your profile…</div>;
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-2xl font-semibold text-slate-900">My Profile</h1>
      <p className="mt-1 text-sm text-slate-600">
        {profile.name} &middot; {profile.email} &middot;{" "}
        {profile.role === "RECRUITER" ? "Recruiter" : "Job seeker"}
      </p>

      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          About you
        </h2>
        <form onSubmit={handleSaveText} className="mt-4 space-y-4">
          <div>
            <label htmlFor="headline" className="block text-sm font-medium text-slate-700">
              Headline
            </label>
            <input
              id="headline"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="e.g. Frontend Developer looking for junior roles"
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
            />
          </div>
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-slate-700">
              Bio
            </label>
            <textarea
              id="bio"
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={savingText}
              className="rounded-md bg-teal-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-600 disabled:opacity-60"
            >
              {savingText ? "Saving…" : "Save"}
            </button>
            {textMessage && <span className="text-sm text-slate-500">{textMessage}</span>}
          </div>
        </form>
      </section>

      <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Resume</h2>

        {profile.resumeUrl ? (
          <p className="mt-3 text-sm text-slate-700">
            Current resume:{" "}
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-teal-700 hover:underline">
              {profile.resumeName}
            </a>
          </p>
        ) : (
          <p className="mt-3 text-sm text-slate-500">No resume uploaded yet.</p>
        )}

        <form onSubmit={handleUploadResume} className="mt-4 flex flex-wrap items-center gap-3">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
            className="text-sm text-slate-600 file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-slate-700 hover:file:bg-slate-200"
          />
          <button
            type="submit"
            disabled={!resumeFile || uploading}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:opacity-60"
          >
            {uploading ? "Uploading…" : "Upload"}
          </button>
        </form>
        {resumeMessage && <p className="mt-2 text-sm text-slate-500">{resumeMessage}</p>}
        <p className="mt-2 text-xs text-slate-400">PDF, DOC, or DOCX. Max 5MB.</p>
      </section>
    </div>
  );
}
