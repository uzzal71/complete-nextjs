import { cookies, headers } from "next/headers";

export async function GET(request) {
  //   const requestHeaders = new Headers(request.headers);
  //   console.log(requestHeaders.get("Authorization"));
  const headerList = headers();
  console.log(headerList.get("Authorization"));

  cookies().set("page", "2");
  console.log(request.cookies.get("theme"));
  console.log(cookies().get("page"));

  return new Response("Profile API", {
    headers: {
      "Set-Cookie": "theme=dark",
    },
  });
}
