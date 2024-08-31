import Schedule from "@/models/scheduleSchema";
import databaseConnection from "@/config/databaseConnection";
import { NextResponse } from "next/server";

databaseConnection();

export async function POST(request: Request) {
    try {
        const { userEmail } = await request.json();

        if (!userEmail) {
            return NextResponse.json(
                { message: "User email is required" },
                { status: 400 }
            );
        }

        const schedule = await Schedule.find({ email: userEmail });
        return NextResponse.json({ schedule }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}