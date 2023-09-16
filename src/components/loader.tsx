import Image from "next/image";
import { Logo } from "./logo";

export function Loader() {
  return (
    <div className="flex h-screen justify-center bg-foreground/5">
      <div className="self-center">
        <Logo size={270} disableRealClock stroke1={10} stroke2={20} />
      </div>
    </div>
  );
}
