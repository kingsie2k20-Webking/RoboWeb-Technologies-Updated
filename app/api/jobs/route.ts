import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const jobs = await prisma.jobPost.findMany({
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(jobs, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, department, location, type, description, imageUrl, email, date } = body

    const newJob = await prisma.jobPost.create({
      data: { title, department, location, type, description, imageUrl, email, date },
    })

    return NextResponse.json(newJob, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create job" }, { status: 500 })
  }
}