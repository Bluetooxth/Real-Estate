import Schedule from "@/models/scheduleSchema";
import databaseConnection from "@/config/databaseConnection";
import { NextResponse } from "next/server";

databaseConnection();

export async function POST(request: Request) {
  try {
    const { name, email, phone, date, time, propertyName, propertyLocation } =
      await request.json();

    if (!name || !email || !phone || !date || !time || !propertyName || !propertyLocation) {
      return NextResponse.json(
        { message: "Please fill in all fields" },
        { status: 400 }
      );
    }

    const schedule = await Schedule.create({
      name,
      email,
      phone,
      date,
      time,
      propertyName,
      propertyLocation,
    });

    return NextResponse.json({ schedule }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}