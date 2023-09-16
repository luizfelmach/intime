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
import { Fade, Slide } from "react-awesome-reveal";
import { LinearGradient } from "react-text-gradients";
// @ts-ignore
import ReactWhatsappButton from "react-whatsapp-button";
import { Review } from "@/components/review";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster,
} from "@vidstack/react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

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
          <Navbar />

          <ReactWhatsappButton
            countryCode="55"
            phoneNumber="27997847096"
            animated
            message="Olá, quero conhecer os relógios!"
          />

          <div className="min-h-screen bg-foreground/5 py-52 phone:py-20 ">
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
                  <Button className="my-8 font-bold" size={"lg"} asChild>
                    <Link
                      href={
                        "https://api.whatsapp.com/send/?phone=5527997847096&text=&text=Ol%C3%A1,%20quero%20conhecer%20os%20rel%C3%B3gios!"
                      }
                      target="_blank"
                    >
                      Descubra
                    </Link>
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

          <div className="min-h-screen bg-secondary flex justify-center py-20">
            <div className="max-w-[1300px] w-[100%] relative mx-auto px-4 py-8">
              <div className="">
                <h1 className="scroll-m-20 text-foreground  pb-2 text-4xl font-semibold tracking-tight transition-colors mb-8 max-w-[400px] whitespace-normal">
                  Sobre os nossos relógios.
                </h1>
                <div className="grid grid-cols-2 tablet:grid-cols-1 gap-4">
                  <Slide direction="up" duration={500} triggerOnce>
                    <MediaPlayer
                      src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
                      poster="/logo.svg"
                      crossorigin=""
                      className=""
                    >
                      <MediaOutlet>
                        <MediaPoster alt="Detalhes dos relógios In Time!" />
                      </MediaOutlet>
                      <MediaCommunitySkin />
                    </MediaPlayer>
                  </Slide>

                  <Slide direction="up" duration={500} triggerOnce>
                    <MediaPlayer
                      src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
                      poster="/logo.svg"
                      crossorigin=""
                      className=""
                    >
                      <MediaOutlet>
                        <MediaPoster alt="Detalhes dos relógios In Time!" />
                      </MediaOutlet>
                      <MediaCommunitySkin />
                    </MediaPlayer>
                  </Slide>

                  <Slide direction="up" duration={500} triggerOnce>
                    <MediaPlayer
                      src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
                      poster="/logo.svg"
                      crossorigin=""
                      className=""
                    >
                      <MediaOutlet>
                        <MediaPoster alt="Detalhes dos relógios In Time!" />
                      </MediaOutlet>
                      <MediaCommunitySkin />
                    </MediaPlayer>
                  </Slide>

                  <Slide direction="up" duration={500} triggerOnce>
                    <MediaPlayer
                      src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
                      poster="/logo.svg"
                      crossorigin=""
                      className=""
                    >
                      <MediaOutlet>
                        <MediaPoster alt="Detalhes dos relógios In Time!" />
                      </MediaOutlet>
                      <MediaCommunitySkin />
                    </MediaPlayer>
                  </Slide>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen  bg-foreground/80 flex justify-center py-20">
            <div className="max-w-[1300px] w-[100%] relative mx-auto px-4 py-8">
              <div className="">
                <h1 className="scroll-m-20 text-background  pb-2 text-4xl font-semibold tracking-tight transition-colors mb-8 max-w-[400px] whitespace-normal">
                  Sobre a In Time Relógios.
                </h1>

                <div className="space-y-16 overflow-hidden">
                  <Slide triggerOnce direction="left">
                    <div className="flex justify-start gap-4">
                      <Image
                        className="verysmall:hidden"
                        src={"/about/quality.svg"}
                        alt="Qualidade da In Time Relógios"
                        height={110}
                        width={110}
                      />
                      <div>
                        <h1 className="scroll-m-20 text-background/50  pb-2 text-2xl font-black tracking-tight transition-colors mb-8 max-w-[400px] whitespace-normal">
                          Qualidade.
                        </h1>
                        <p className="text-right max-w-[500px] leading-7 [&:not(:first-child)]:mt-6 whitespace-normal font-semibold text-background/50">
                          Nós acreditamos que um relógio não é apenas um
                          acessório, mas uma obra de arte que deve durar
                          gerações. É por isso que escolhemos trabalhar com
                          marcas renomadas conhecidas por seu artesanato e
                          qualidade.
                        </p>
                      </div>
                    </div>
                  </Slide>

                  <Slide triggerOnce direction="right">
                    <div className="flex justify-end gap-4">
                      <div>
                        <h1 className="scroll-m-20 text-background/50  pb-2 text-2xl font-black tracking-tight transition-colors mb-8 max-w-[400px] whitespace-normal">
                          Atendimento.
                        </h1>
                        <p className="max-w-[500px] leading-7 [&:not(:first-child)]:mt-6 whitespace-normal font-semibold text-background/50">
                          Nossa equipe dedicada está aqui para ajudar você a
                          encontrar o relógio perfeito. Estamos prontos para
                          responder a todas as suas perguntas e oferecer
                          orientação personalizada para sua escolha. Experimente
                          nos chamar no WhatsApp.
                        </p>
                      </div>
                      <Image
                        className="verysmall:hidden"
                        src={"/about/service.svg"}
                        alt="Qualidade da In Time Relógios"
                        height={120}
                        width={120}
                      />
                    </div>
                  </Slide>

                  <Slide triggerOnce direction="left">
                    <div className="flex justify-start gap-4">
                      <Image
                        className="verysmall:hidden"
                        src={"/about/shipping.svg"}
                        alt="Qualidade da In Time Relógios"
                        height={120}
                        width={120}
                      />
                      <div>
                        <h1 className="scroll-m-20 text-background/50  pb-2 text-2xl tracking-tight font-black transition-colors mb-8 max-w-[400px] whitespace-normal">
                          Entrega.
                        </h1>
                        <p className="text-right max-w-[500px] leading-7 [&:not(:first-child)]:mt-6 whitespace-normal text-background/50 font-semibold">
                          Após a confirmação do pagamento, enviamos sua
                          mercadoria aos Correios no próximo dia útil e
                          fornecemos o código de rastreamento no final do dia. O
                          prazo de entrega varia de acordo com a modalidade de
                          frete escolhida pelo cliente (PAC, Sedex ou Sedex 10),
                          e você pode verificar o valor e o tempo estimado de
                          entrega usando nosso calculador de frete. Após a
                          compra, você receberá um link com o código de
                          rastreamento para acompanhar o envio de sua
                          mercadoria, desde a postagem até a entrega. Garantimos
                          uma experiência de compra eficiente e rastreável.
                        </p>
                      </div>
                    </div>
                  </Slide>

                  <Slide triggerOnce direction="right">
                    <div className="flex justify-end gap-4">
                      <div>
                        <h1 className="scroll-m-20 text-background/50 pb-2 text-2xl font-black tracking-tight transition-colors mb-8 max-w-[400px] whitespace-normal">
                          Garantia.
                        </h1>
                        <p className="max-w-[500px] leading-7 [&:not(:first-child)]:mt-6 whitespace-normal text-background/50 font-semibold">
                          Oferecemos uma garantia de 1 ano para todos os nossos
                          relógios, cobrindo o maquinário. Após o envio do seu
                          relógio, você receberá um certificado de garantia
                          digital, garantindo a qualidade e o funcionamento do
                          maquinário por 1 ano. Garantimos a tranquilidade do
                          cliente com nossa política de garantia abrangente.
                        </p>
                      </div>
                      <Image
                        className="verysmall:hidden"
                        src={"/about/guarantee.svg"}
                        alt="Qualidade da In Time Relógios"
                        height={60}
                        width={60}
                      />
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen bg-background flex justify-center py-20">
            <div className="max-w-[1300px] w-[100%] relative mx-auto px-4 py-8">
              <div className="">
                <h1 className="scroll-m-20 text-foreground  pb-2 text-4xl font-semibold tracking-tight transition-colors mb-8 max-w-[400px] whitespace-normal">
                  Avaliações.
                </h1>
                <ScrollArea className="rounded-md p-4">
                  <div className="flex gap-4">
                    <Fade>
                      <Review
                        name="Luiz"
                        review="Gostaria de expressar minha satisfação com a minha recente compra em sua loja. Adquiri um relógio que realmente superou todas as minhas expectativas e se tornou uma peça essencial no meu dia a dia."
                      />
                      <Review
                        name="Luiz"
                        review="Gostaria de expressar minha satisfação com a minha recente compra em sua loja. Adquiri um relógio que realmente superou todas as minhas expectativas e se tornou uma peça essencial no meu dia a dia."
                      />
                      <Review
                        name="Luiz"
                        review="Gostaria de expressar minha satisfação com a minha recente compra em sua loja. Adquiri um relógio que realmente superou todas as minhas expectativas e se tornou uma peça essencial no meu dia a dia."
                      />
                      <Review
                        name="Luiz"
                        review="Gostaria de expressar minha satisfação com a minha recente compra em sua loja. Adquiri um relógio que realmente superou todas as minhas expectativas e se tornou uma peça essencial no meu dia a dia."
                      />
                      <Review
                        name="Luiz"
                        review="Gostaria de expressar minha satisfação com a minha recente compra em sua loja. Adquiri um relógio que realmente superou todas as minhas expectativas e se tornou uma peça essencial no meu dia a dia."
                      />
                    </Fade>
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
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
                        <CardTitle className="text-secondary/50 font-black">
                          Dinheiro
                        </CardTitle>
                        <CardDescription className="text-secondary/50 font-semibold">
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
                        <CardTitle className="text-secondary/50 font-black">
                          Cartão de crédito ou débito
                        </CardTitle>
                        <CardDescription className="text-secondary/50 font-semibold">
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
                        <CardTitle className="text-secondary/50 font-black">
                          PIX
                        </CardTitle>
                        <CardDescription className="text-secondary/50 font-semibold">
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
                        <CardTitle className="text-secondary/50 font-black">
                          Boleto bancário
                        </CardTitle>
                        <CardDescription className="text-secondary/50 font-semibold">
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
          <Footer />
        </div>
      )}
    </>
  );
}
