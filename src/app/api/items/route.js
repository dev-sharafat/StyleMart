import dbConnection from "@/lib/dbConnect";

export async function GET() {
  const data = await dbConnection("productsone").find({}).toArray()

  return Response.json(data);
}

export async function POST(req) {
  const postdata = await req.json()
  const result = await dbConnection("productsone").insertOne(postdata)
  return Response.json(result);
}
