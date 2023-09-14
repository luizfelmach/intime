"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Faq } from "@/components/faq";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/loader";
import { Watch } from "@/components/watch";
import { LogoSlider } from "@/components/logo-slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slide } from "react-awesome-reveal";
import { LinearGradient } from "react-text-gradients";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  const variants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="main">
          <div className="min-h-screen bg-foreground/5 py-20 ">
            <div className="max-w-[1300px] w-[100%] relative mx-auto px-4 py-8 flex justify-between phone:grid">
              <div className="self-center">
                <motion.h1
                  className="scroll-m-20 text-7xl phone:text-5xl tablet:text-5xl font-extrabold tracking-tight lg:text-5xl max-w-[400px] whitespace-normal"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  transition={{ type: "spring", damping: 20, stiffness: 100 }}
                >
                  Os relógios de &nbsp;
                  <span>
                    <LinearGradient
                      gradient={["to left", "#ebd197 , #b48811 "]}
                    >
                      luxo
                    </LinearGradient>
                  </span>
                  &nbsp; mais vendidos do Brasil.
                </motion.h1>

                <motion.p
                  className="leading-7 [&:not(:first-child)]:mt-6 max-w-[400px] whitespace-normal text-foreground/50"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  transition={{ type: "spring", damping: 30, stiffness: 100 }}
                >
                  Descubra a elegância com mais de 800 modelos de relógios de
                  luxo masculinos e femininos, disponíveis em uma paleta de
                  cores exclusiva.
                </motion.p>

                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  transition={{ type: "spring", damping: 30, stiffness: 100 }}
                >
                  <Button className="my-8 font-bold" size={"lg"}>
                    Descubra
                  </Button>
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
                <Watch />
              </motion.div>
            </div>
          </div>

          <div className="min-h-screen bg-foreground/80 flex justify-center py-20">
            <div className="max-w-[1300px] w-[100%] relative mx-auto px-4 py-8">
              <div className="">
                <h1 className="scroll-m-20 text-background  pb-2 text-4xl font-semibold tracking-tight transition-colors mb-8 max-w-[400px] whitespace-normal">
                  Temos as melhores marcas do mercado.
                </h1>
                <LogoSlider direction={"left"} />
                <LogoSlider direction={"right"} />
              </div>
            </div>
          </div>

          <div className="h-screen bg-secondary flex justify-center py-20">
            <div className="max-w-[1300px] w-[100%] relative mx-auto px-4 py-8">
              <div className="">
                <h1 className="scroll-m-20 text-foreground  pb-2 text-4xl font-semibold tracking-tight transition-colors mb-8 max-w-[400px] whitespace-normal">
                  Sobre os nossos relógios.
                </h1>
              </div>
            </div>
          </div>

          <div className="h-screen bg-[#a1785c] flex justify-center py-20">
            <div className="max-w-[1300px] w-[100%] relative mx-auto px-4 py-8">
              <div className="">
                <h1 className="scroll-m-20 text-foreground  pb-2 text-4xl font-semibold tracking-tight transition-colors mb-8 max-w-[400px] whitespace-normal">
                  Sobre a loja.
                </h1>
              </div>
            </div>
          </div>

          <div className="h-screen bg-background flex justify-center py-20">
            <div className="max-w-[1300px] w-[100%] relative mx-auto px-4 py-8">
              <div className="">
                <h1 className="scroll-m-20 text-foreground  pb-2 text-4xl font-semibold tracking-tight transition-colors mb-8 max-w-[400px] whitespace-normal">
                  Avaliações.
                </h1>
              </div>
            </div>
          </div>

          <div className="h-min-screen bg-foreground/80 flex justify-center py-20">
            <div className="max-w-[1300px] w-[100%] relative mx-auto px-4 py-8">
              <div className="">
                <h1 className="scroll-m-20 text-background  pb-2 text-4xl font-semibold tracking-tight transition-colors mb-8 max-w-[400px] whitespace-normal">
                  Formas de pagamento.
                </h1>

                <div className="grid grid-cols-2 gap-4 phone:grid-cols-1">
                  <Slide direction="up" duration={500} triggerOnce>
                    <Card className="border-none bg-secondary/5 h-80">
                      <CardHeader>
                        <CardTitle className="text-secondary">
                          Dinheiro
                        </CardTitle>
                        <CardDescription className="text-secondary">
                          Pagamentos em espécie: a opção financeira clássica.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex justify-center">
                        <Image
                          src={"/payment/money.gif"}
                          alt="Pagamento em dinheiro"
                          height={180}
                          width={180}
                        />
                      </CardContent>
                    </Card>
                  </Slide>

                  <Slide direction="up" duration={500} triggerOnce>
                    <Card className="border-none bg-secondary/5 h-80">
                      <CardHeader>
                        <CardTitle className="text-secondary">
                          Cartão de crédito ou débito
                        </CardTitle>
                        <CardDescription className="text-secondary">
                          Parcelamos em até 4X com taxas.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex justify-center">
                        <Image
                          src={"/payment/credit.gif"}
                          alt="Pagamento em dinheiro"
                          height={200}
                          width={200}
                        />
                      </CardContent>
                    </Card>
                  </Slide>

                  <Slide direction="up" duration={500} triggerOnce>
                    <Card className="border-none bg-secondary/5 h-80">
                      <CardHeader>
                        <CardTitle className="text-secondary">PIX</CardTitle>
                        <CardDescription className="text-secondary">
                          Forma de pagamento com o PIX.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex justify-center">
                        <Image
                          src={"/payment/pix.gif"}
                          alt="Pagamento em dinheiro"
                          height={150}
                          width={150}
                        />
                      </CardContent>
                    </Card>
                  </Slide>

                  <Slide direction="up" duration={500} triggerOnce>
                    <Card className="border-none bg-secondary/5 h-80">
                      <CardHeader>
                        <CardTitle className="text-secondary">
                          Boleto bancário
                        </CardTitle>
                        <CardDescription className="text-secondary">
                          À vista.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex justify-center">
                        <Image
                          src={"/payment/bankslip.gif"}
                          alt="Pagamento em dinheiro"
                          height={150}
                          width={150}
                        />
                      </CardContent>
                    </Card>
                  </Slide>
                </div>
              </div>
            </div>
          </div>

          <Faq />
        </div>
      )}
    </>
  );
}
