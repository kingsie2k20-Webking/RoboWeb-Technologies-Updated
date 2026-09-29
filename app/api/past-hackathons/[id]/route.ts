import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// PUT: Update a past hackathon by ID
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const body = await request.json()
    const { title, date, location, description, images, winners } = body

    const updatedPast = await prisma.pastHackathon.update({
      where: { id },
      data: {
        title,
        date,
        location,
        description,
        images: images || [],
        winners: winners || "",
      },
    })

    return NextResponse.json(updatedPast, { status: 200 })
  } catch (error) {
    console.error("Prisma past hackathon update error:", error)
    return NextResponse.json({ error: "Failed to update past hackathon" }, { status: 500 })
  }
}

// DELETE: Remove a past hackathon by ID
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    await prisma.pastHackathon.delete({ where: { id } })
    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 })
  }
}