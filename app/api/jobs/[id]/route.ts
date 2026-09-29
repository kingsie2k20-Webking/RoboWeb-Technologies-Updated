import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// PUT: Update a job by ID
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const body = await request.json()
    const { title, department, location, type, description, imageUrl, email, date } = body

    const updatedJob = await prisma.jobPost.update({
      where: { id },
      data: {
        title,
        department,
        location,
        type,
        description,
        imageUrl: imageUrl || "",
        email: email || "",
        date: date || "",
      },
    })

    return NextResponse.json(updatedJob, { status: 200 })
  } catch (error) {
    console.error("Prisma job update error:", error)
    return NextResponse.json({ error: "Failed to update job" }, { status: 500 })
  }
}

// DELETE: Remove a job by ID
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    await prisma.jobPost.delete({ where: { id } })
    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 })
  }
}