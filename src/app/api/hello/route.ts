export async function GET(request: Request) {
  return new Response('Hello from GET request!');
}

export async function POST(req: Request) {
  //   const body = req.body;
  const body = await req.json();
  console.log(body);

  return new Response(JSON.stringify({hello: 'world'}));
}
