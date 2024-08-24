import User from "@/models/userSchema";
import { NextResponse, NextRequest } from "next/server";
import databaseConnection from "@/config/databaseConnection";
import { getDataFromToken } from "@/app/helpers/getDataFromToken";

databaseConnection();

export async function GET(request: NextRequest) {
  try {
    const token = await getDataFromToken(request);

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ username: token.username });

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}