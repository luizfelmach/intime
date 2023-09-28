import { Watch } from "@prisma/client";

export function WatchCard(watchProps: Watch) {
  const { name, description, images, videos, price } = watchProps;
  return (
    <div className="h-60 w-56 bg-teal-700 rounded">
      <h1>{name}</h1>
      <h1>{description}</h1>
      <h1>{price}</h1>
      <div>{images}</div>
    </div>
  );
}
