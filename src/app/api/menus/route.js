import { revalidatePath } from "next/cache";
import dbConnect from "../../../lib/dbConnect";

export async function GET() {
  const result = await dbConnect("menu").find({}).toArray();

  return Response.json(result);
}

export async function POST(req) {
  const data = await req.json();

  const result = await dbConnect("menu").insertOne(data);
  revalidatePath("/menus");
  return Response.json(result);
}
