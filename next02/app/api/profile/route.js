import { headers } from "next/headers";

export async function GET(request) {
  //   const requestHeaders = new Headers(request.headers);
  //   console.log(requestHeaders.get("Authorization"));
  const headerList = headers();
  console.log(headerList.get("Authorization"));

  return new Response("Profile API");
}
