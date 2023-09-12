import { Facebook, Instagram, Mail, SendHorizontal } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
    return (
        <div className="h-40 bg-foreground/5 flex justify-evenly p-4 items-center gap-4">

            <p className="text-foreground font-bold">
                &copy; In Time Relógios. {new Date().getFullYear()}.
            </p>

            <div className="flex gap-2">
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

        </div>
    )
}