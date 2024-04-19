export default async function getJoke() {
  const res = await fetch("https://api.chucknorris.io/jokes/random", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Fetch error...");
  }

  return res.json();
}
