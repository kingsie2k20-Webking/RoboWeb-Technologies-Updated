import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const hackathons = await prisma.hackathonPost.findMany({
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(hackathons, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch hackathons" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, date, location, description, imageUrl, registerUrl } = body

    const newHackathon = await prisma.hackathonPost.create({
      data: { title, date, location, description, imageUrl, registerUrl },
    })

    return NextResponse.json(newHackathon, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create hackathon" }, { status: 500 })
  }
}