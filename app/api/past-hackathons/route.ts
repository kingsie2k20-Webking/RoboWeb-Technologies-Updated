import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const pastHackathons = await prisma.pastHackathon.findMany({
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(pastHackathons, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch past hackathons" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, date, location, description, images, winners } = body

    const formattedImages = Array.isArray(images) 
      ? images 
      : typeof images === "string" 
        ? images.split(",").map((img) => img.trim()).filter(Boolean) 
        : []

    const newPast = await prisma.pastHackathon.create({
      data: { 
        title, 
        date, 
        location, 
        description, 
        images: formattedImages, 
        winners 
      },
    })

    return NextResponse.json(newPast, { status: 201 })
  } catch (error) {
    console.error("Error creating past hackathon:", error)
    return NextResponse.json({ error: "Failed to create past hackathon" }, { status: 500 })
  }
}