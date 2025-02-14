import { ObjectId } from "mongodb";
import dbConnect from "../../../../lib/dbConnect";

export async function GET(req, { params }) {
  const result = await dbConnect("menu").findOne({
    _id: new ObjectId(params.id),
  });
  return Response.json(result);
}
