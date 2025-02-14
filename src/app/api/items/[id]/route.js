export async function POST(req, params) {
  const p = await params;
  console.log(p);

  return Response.json( p );
}
