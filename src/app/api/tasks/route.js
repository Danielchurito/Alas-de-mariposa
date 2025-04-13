import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  const tasks = await prisma.comment.findMany({
    orderBy: { createdAt: "desc" },
  });
  console.log(tasks);
  return NextResponse.json(tasks);
};

export const POST = async (request) => {
  try {
    const data = await request.json();
    console.log("Datos recibidos del cliente:", data);

    const query = await prisma.comment.create({
      data: {
        name: data.name,
        text: data.text,
      },
    });

    return NextResponse.json(query);
  } catch (error) {
    console.error("Error creating task:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud", details: error.message },
      { status: 500 }
    );
  }
};
