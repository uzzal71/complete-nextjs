import getJoke from "@/utils/getJoke";

export async function GET(request) {
  const posts = await getJoke();

  return Response.json(posts);
}
