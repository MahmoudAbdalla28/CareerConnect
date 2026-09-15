import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { put } from "@vercel/blob";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const MAX_SIZE_BYTES = 5 * 1024 * 1024;

function extensionFor(mimeType: string) {
  if (mimeType === "application/pdf") return ".pdf";
  if (mimeType === "application/msword") return ".doc";
  return ".docx";
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("resume");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No resume file provided." }, { status: 400 });
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json({ error: "Only PDF, DOC, or DOCX files are accepted." }, { status: 400 });
  }
  if (file.size > MAX_SIZE_BYTES) {
    return NextResponse.json({ error: "File is larger than the 5MB limit." }, { status: 400 });
  }

  const userId = (session.user as { id: string }).id;
  const pathname = `resumes/${userId}${extensionFor(file.type)}`;

  const blob = await put(pathname, file, {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
  });

  const user = await prisma.user.update({
    where: { id: userId },
    data: { resumeName: file.name, resumeUrl: blob.url },
    select: { resumeName: true, resumeUrl: true },
  });

  return NextResponse.json(user);
}
