import { Suspense } from "react";
import Posts from "../components/Posts";

export default function Heavy() {
  return (
    <div>
      <h1>Heavy page</h1>
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <Posts />
      </Suspense>
    </div>
  );
}
