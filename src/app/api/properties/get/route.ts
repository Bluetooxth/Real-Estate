import Properties from "@/models/propertiesSchema";
import databaseConnection from "@/config/databaseConnection";
import { NextResponse } from "next/server";

databaseConnection();

export async function GET() {
  try {
    const properties = await Properties.find();

    return NextResponse.json({ properties }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}