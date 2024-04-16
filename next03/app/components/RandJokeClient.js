"use client";

import { useEffect } from "react";

export default function RandJokeClient() {
  useEffect(() => {
    fetch("/api/posts");
  });

  return (
    <div>
      <h1>Client side data fetching</h1>
    </div>
  );
}
