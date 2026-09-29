import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// PUT: Update an upcoming hackathon by ID
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const body = await request.json()
    const { title, date, location, description, imageUrl, registerUrl } = body

    const updatedHackathon = await prisma.hackathonPost.update({
      where: { id },
      data: {
        title,
        date,
        location,
        description,
        imageUrl: imageUrl || "",
        registerUrl: registerUrl || "",
      },
    })

    return NextResponse.json(updatedHackathon, { status: 200 })
  } catch (error) {
    console.error("Prisma update error:", error)
    return NextResponse.json({ error: "Failed to update hackathon" }, { status: 500 })
  }
}

// DELETE: Remove an upcoming hackathon by ID
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    
    await prisma.hackathonPost.delete({
      where: { id },
    })
    
    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 })
  }
}