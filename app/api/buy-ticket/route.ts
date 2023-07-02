import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;
    const flight = await prisma.flight.update({
      where: { id: id },
      data: {
        seats: {
          decrement: 1,
        },
      },
    });
    if (!flight) {
      return new NextResponse("flight not found", { status: 404 });
    }
    return new NextResponse("updated", { status: 200 });
  } catch (error) {
    console.error(error, "ERROR_API");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
