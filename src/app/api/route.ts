export async function GET(request: Request) {
  return new Response("Hello world!", { status: 200 });
}

export async function POST(request: Request) {
  console.log(request.body);
  return new Response("Hello world!", { status: 200 });
}
