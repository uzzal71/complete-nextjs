import Button from "@/app/components/Button";
import SortProducts from "@/app/components/SortProducts";
import { Suspense } from "react";

export const metadata = {
  title: "Settings Page",
  description: "This is our settings page",
};

export default function Settings() {
  return (
    <div className="p-4">
      <h1 className="text-2xl">Settings page</h1>
      <p className="mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam
        numquam quo possimus fugiat soluta? Qui sit, beatae quod iusto esse
        dignissimos aperiam quo, sapiente quos eveniet vero, quibusdam
        praesentium?
      </p>

      <Button>Go to Analytics Page</Button>
      <br />
      <br />

      <Suspense>
        <SortProducts />
      </Suspense>
    </div>
  );
}
