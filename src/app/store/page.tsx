"use client";

import { Watch } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Store() {
  const [watchs, setWatchs] = useState<Watch[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("/api/watch");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setWatchs(data);
      return data;
    }
    getData();
  }, []);

  return (
    <div className="h-screen">
      {watchs.map((watch) => {
        return <div key={watch.id}>{watch.name}</div>;
      })}
    </div>
  );
}
