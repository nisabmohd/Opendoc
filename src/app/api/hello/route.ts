import { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  console.log(req);
  return new Response(
    JSON.stringify({
      name: "nisab",
    })
  );
}

export async function POST(req: NextRequest) {
  console.log(await req.json());
  return new Response(
    JSON.stringify({
      name: "nisab",
    })
  );
}
