import Properties from "@/models/propertiesSchema";
import { NextResponse } from "next/server";
import databaseConnection from "@/config/databaseConnection";

databaseConnection();

export async function POST(request: Request) {
  try {
    const { slug } = await request.json();

    if (!slug) {
      return NextResponse.json({ message: "Slug parameter is missing" }, { status: 400 });
    }

    const property = await Properties.findOne({ slug });

    if (!property) {
      return NextResponse.json({ message: "Property not found" }, { status: 404 });
    }

    return NextResponse.json({ property }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}