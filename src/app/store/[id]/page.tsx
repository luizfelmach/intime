import { notFound } from "next/navigation";

export default async function WatchDetails({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`http://localhost:3000/api/watch/${params.id}`);
  if (!res.ok) {
    throw new Error("failed to fetch content");
  }
  const data = await res.json();
  if (data === null) {
    notFound();
  }

  return <div>OLA</div>;
}
