"use client"
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";


export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  const variants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  const transition = {
    type: 'spring',
    damping: 15,
    stiffness: 300,
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500)
  }, [])

  return (
    <>
      {loading ? <>
        <div className="flex h-screen justify-center bg-foreground/5">
          <div className="self-center">
            <Image src={"/clock.gif"} alt="In Time Relógios" width={150} height={150} priority={true} />
          </div>
        </div>
      </> :

        <div className="main">

          <Header />

          <div className="h-screen bg-foreground/5 flex justify-center px-4 py-20">
            <div className="self-center">
              <motion.h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl max-w-[400px] whitespace-normal"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                transition={{ type: "spring", damping: 20, stiffness: 100, }}
              >
                Os relógios de luxo mais vendidos do Brasil.
              </motion.h1>

              <motion.p className="leading-7 [&:not(:first-child)]:mt-6 max-w-[400px] whitespace-normal text-foreground/50"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                transition={{ type: "spring", damping: 30, stiffness: 100 }}
              >
                Descubra a elegância: mais de 800 modelos de relógios de luxo masculinos e femininos, em uma paleta de cores exclusiva.
              </motion.p>

              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                transition={{ type: "spring", damping: 30, stiffness: 100 }}
              >
                <Button className="my-8">Descubra</Button>
              </motion.div>
            </div>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ type: "spring", damping: 80, stiffness: 100 }}
              className="self-center"
            >
              <Image className="drop-shadow-xl" src={"/watch.png"} alt="Relógio" width={500} height={500} priority={true} />
            </motion.div>
          </div>

          <div className="h-screen bg-foreground/70 flex justify-center px-4 py-20">
          </div>

          <Faq />
          <Footer />
        </div>}
    </>
  )
}
