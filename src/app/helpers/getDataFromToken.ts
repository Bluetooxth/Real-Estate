import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function getDataFromToken(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    console.log("No token found");
    return null;
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET || "") as JwtPayload;
    console.log("Token data decoded");

    return {
      id: data.id,
      username: data.username,
      name: data.name,
      email: data.email,
      role: data.role,
    };
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}