import { Facebook, Instagram, Mail, SendHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <div className="h-40 bg-foreground/5">
      <div className="max-w-[1300px] w-[100%] relative mx-auto px-4">
        <div className="space-y-6">
          <div className="flex gap-2 pt-6">
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://instagram.com/in.timerelogios"
                target="_blank"
              >
                <Instagram />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.facebook.com/people/Em%C3%ADlio-Rel%C3%B3gios/61550643068153/"
                target="_blank"
              >
                <Facebook />
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Mail />
            </Button>
            <Button variant="outline" size="icon">
              <Link
                href="https://api.whatsapp.com/send/?phone=5527997847096&text=&text=Ol%C3%A1,%20quero%20conhecer%20os%20rel%C3%B3gios!"
                target="_blank"
              >
                <SendHorizontal />
              </Link>
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
