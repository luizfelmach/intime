import { Facebook, Instagram, Mail, SendHorizontal } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <div className="h-40 bg-foreground/5">
      <div className="max-w-[1300px] w-[100%] relative mx-auto px-4">
        <div className="space-y-6">
          <div className="flex gap-2 pt-6">
            <Button variant="outline" size="icon">
              <Instagram />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook />
            </Button>
            <Button variant="outline" size="icon">
              <Mail />
            </Button>
            <Button variant="outline" size="icon">
              <SendHorizontal />
            </Button>
          </div>

          <p className="text-foreground font-bold">
            &copy; In Time Relógios. {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </div>
  );
}
