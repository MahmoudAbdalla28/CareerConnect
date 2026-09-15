import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { get } from "@vercel/blob";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  const userId = (session.user as { id: string }).id;
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { resumeUrl: true, resumeName: true },
  });

  if (!user?.resumeUrl) {
    return NextResponse.json({ error: "No resume uploaded." }, { status: 404 });
  }

  const blob = await get(user.resumeUrl, { access: "private" });
  if (!blob) {
    return NextResponse.json({ error: "Resume file not found." }, { status: 404 });
  }

  return new NextResponse(blob.stream as unknown as ReadableStream, {
    headers: {
      "Content-Type": blob.blob.contentType ?? "application/octet-stream",
      "Content-Disposition": `inline; filename="${user.resumeName ?? "resume"}"`,
    },
  });
}
