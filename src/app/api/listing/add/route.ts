import Listing from "@/models/listingSchema";
import databaseConnection from "@/config/databaseConnection";
import { NextResponse } from "next/server";

databaseConnection();

export async function POST(request: Request) {
  try {
    const { title, description, price, location, image, owner } = await request.json();

    if (!title || !description || !price || !location || !image || !owner) {
      return NextResponse.json(
        { message: "Please fill in all fields" },
        { status: 400 }
      );
    }

    const listing = await Listing.create({
      title,
      description,
      price,
      location,
      image,
      owner,
    });

    return NextResponse.json({ listing }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}