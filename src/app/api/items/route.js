import dbConnect from "../../../lib/dbConnect";

export async function GET() {
  const result = await dbConnect("menu").find({}).toArray();

  return Response.json(result);
}

export async function POST() {
  const data = {
    name: "Nahid Hasan",
    age: 22,
  };

  const result = await dbConnect("menu").insertOne(data);
  return Response.json(result);
}
