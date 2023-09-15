import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Faq() {
  return (
    <div className="max-w-[1300px] w-[100%] relative mx-auto px-4 py-20">
      <div className="">
        <h1 className="scroll-m-20  pb-2 text-4xl font-semibold tracking-tight transition-colors mb-8">
          Perguntas frequentes.
        </h1>

        <div className="mb-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="gap-8 text-left text-foreground/70">
                Os relógios já estão no Brasil a pronta entrega?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Sim estão no Brasil. Só trabalhamos com produtos em estoque!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="gap-8 text-left text-foreground/70">
                Os relógios já estão no Brasil a pronta entrega?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Sim estão no Brasil. Só trabalhamos com produtos em estoque!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="gap-8 text-left text-foreground/70">
                Os relógios já estão no Brasil a pronta entrega?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Sim estão no Brasil. Só trabalhamos com produtos em estoque!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="gap-8 text-left text-foreground/70">
                Os relógios já estão no Brasil a pronta entrega?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Sim estão no Brasil. Só trabalhamos com produtos em estoque!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="gap-8 text-left text-foreground/70">
                Os relógios já estão no Brasil a pronta entrega?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Sim estão no Brasil. Só trabalhamos com produtos em estoque!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="gap-8 text-left text-foreground/70">
                Os relógios já estão no Brasil a pronta entrega?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Sim estão no Brasil. Só trabalhamos com produtos em estoque!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
