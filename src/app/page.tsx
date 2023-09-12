"use client"
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800)
  }, [])

  return (
    <>
      {loading ? <>
        <div className="flex h-screen justify-center bg-foreground/5">
          <div className="self-center">
            <Image className="animate-bounce" src={"/clock.gif"} alt="In Time Relógios" width={150} height={150} priority={true} />
          </div>
        </div>
      </> :

        <div className="main">

          <Header />

          <div className="h-screen bg-foreground/5">

          </div>

          <Faq />
          <Footer />
        </div>}
    </>
  )
}
