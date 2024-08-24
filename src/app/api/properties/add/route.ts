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

    const generateSlug = (title: string, price: number, location: string) => {
      const slugTitle = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      const slugLocation = location
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      const formattedPrice = price.toString().replace(/[^0-9]/g, "");

      return `${slugTitle}-${formattedPrice}-${slugLocation}`;
    };

    const property = await Properties.create({
      slug: generateSlug(title, price, location),
      title,
      description,
      price,
      location,
      image,
      owner,
    });

    return NextResponse.json({ property }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}