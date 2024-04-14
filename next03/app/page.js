export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <h1 className="text-xl">{joke.value}</h1>
      <RandJoke />
    </main>
  );
}
