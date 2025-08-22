import dbConnection from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const p = await params;
  const singleData = await dbConnection("products").findOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(singleData);
}
