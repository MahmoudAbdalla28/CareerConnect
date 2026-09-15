import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: (session.user as { id: string }).id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      headline: true,
      bio: true,
      resumeName: true,
      resumeUrl: true,
    },
  });

  return NextResponse.json(user);
}

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  const { headline, bio } = await request.json();

  const user = await prisma.user.update({
    where: { id: (session.user as { id: string }).id },
    data: { headline, bio },
    select: { id: true, headline: true, bio: true },
  });

  return NextResponse.json(user);
}
