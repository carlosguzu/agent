import { type NextRequest, NextResponse } from "next/server"
import { getPredictions } from "@/lib/predictions"

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Invalid input. 'text' field is required." }, { status: 400 })
    }

    const predictions = await getPredictions(text)

    return NextResponse.json({ predictions })
  } catch (error) {
    console.error("Error in prediction API:", error)
    return NextResponse.json({ error: "Failed to generate predictions" }, { status: 500 })
  }
}

