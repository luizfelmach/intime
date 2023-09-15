import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type ReviewProps = {
  name: string;
  review: string;
};

export function Review({ name, review }: ReviewProps) {
  return (
    <Card className="bg-foreground/5 border-none ">
      <CardHeader>
        <CardTitle className="font-black text-foreground/80">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-foreground/70">
          {review}
        </p>
      </CardContent>
    </Card>
  );
}
