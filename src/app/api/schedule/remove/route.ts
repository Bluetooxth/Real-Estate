import Schedule from "@/models/scheduleSchema";
import databaseConnection from "@/config/databaseConnection";
import { NextResponse } from "next/server";

databaseConnection();
export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json(
                { message: "Schedule ID is required" },
                { status: 400 }
            );
        }

        const schedule = await Schedule.findByIdAndDelete(id);
        return NextResponse.json({ schedule }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}