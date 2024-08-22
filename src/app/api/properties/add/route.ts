import Properties from "@/models/propertiesSchema";
import databaseConnection from "@/config/databaseConnection";
import { NextResponse } from "next/server";

databaseConnection();

export async function POST(request: Request) {
  try {
    const { title, description, price, location, image, owner } =
      await request.json();

    if (!title || !description || !price || !location || !image || !owner) {
      return NextResponse.json(
        { message: "Please fill in all fields" },
        { status: 400 }
      );
    }

    const slug = `${title.toLowerCase().replace(/ /g, "-")}-${price}-${location
      .toLowerCase()
      .replace(/ /g, "-")}`;

    const property = await Properties.create({
      slug,
      title,
      description,
      price,
      location,
      image,
      owner,
    });

    return NextResponse.json({ property }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}