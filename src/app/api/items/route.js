export async function GET() {
  const data = {
    name: "Nahid Hasan",
    age: 22,
  };

  return Response.json({data});
}

export async function POST(req) {
  const postData = await req.json();

  return Response.json({ postData });
}
