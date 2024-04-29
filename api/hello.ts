export const config = {
  runtime: "edge",
};
export function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  return new Response(`Hello ${params.get("name")} from Get function`);
}
export async function POST(request: Request) {
  const { name, lastName } = await request.json();
  return Response.json({
    name: name,
    lastName: lastName,
    message: `Hey ${name} ${lastName} from Edge Function`,
  });
}
