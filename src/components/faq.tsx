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
                Vocês são de que Lugar/Estado/Cidade?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Nosso estoque e centro de envios fica em São Paulo/SP para
                facilitar os envios e diminuir os custos dos fretes!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="gap-8 text-left text-foreground/70">
                Vocês trabalham com quais marcas de relógios?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Trabalhamos com uma ampla variedade de marcas de relógios,
                incluindo Invicta, Cartier, Armani, Rolex, Philippe Patek,
                Diesel, Festina, Richard Miller, Panerai, Tag Heuer, Casio,
                Omega, Michael Kors, U-Boat, Montblanc, Audemars Piguet, Tissot,
                Bulova, Roger Dubuis, Nixon, Zodiac, Breitling, Bulgari, Oakley
                e muitas outras. Você pode conferir todas as opções disponíveis
                em nosso catálogo de fotos e verificar os preços em nossa tabela
                de preços.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="gap-8 text-left text-foreground/70">
                Quais são as características dos relógios?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                As características dos nossos relógios incluem uma réplica
                perfeita de primeira linha &#40;AAA&#41;, importados dos EUA,
                com maquinários Citizen ou Italiano, variando entre automáticos,
                de corda ou a bateria. Eles possuem vidro de Safira Anti-Risco
                ou Mineral Anti-Risco, com opções de catraca de cerâmica em
                alguns modelos e pulseiras de couro, aço, borracha ou cerâmica,
                de acordo com as especificações do modelo original. Tamanho e
                peso são idênticos aos originais, e o funcionamento dos
                ponteiros é uma reprodução fiel, assegurando uma experiência
                autêntica aos nossos clientes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="gap-8 text-left text-foreground/70">
                Os relógios são à prova d&apos;água?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                A maioria dos nossos relógios é vedada e é à prova d&apos;água
                até 20 metros de profundidade. Em nossa tabela de preços, os
                modelos que não são vedados estão marcados como &quot;Não
                Veda&quot;.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="gap-8 text-left text-foreground/70">
                Qual é o prazo de envio dos pedidos?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Após a confirmação do pagamento, a mercadoria será enviada no
                próximo dia útil.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="gap-8 text-left text-foreground/70">
                Qual a garantia do relógio?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Todos os nossos relógios têm uma garantia de um ano no
                maquinário, a partir da data de entrega. Esta garantia é
                registrada em nosso sistema e entra em vigor quando você nos
                informa que recebeu o produto em perfeitas condições. Caso
                ocorra algum problema ou defeito no funcionamento do maquinário,
                a garantia cobre os reparos necessários devido a defeitos de
                fabricação. É importante ressaltar que a garantia não inclui
                danos causados por uso inadequado, como arranhões no vidro,
                desgaste natural da pulseira, presilha, pinos, botões ou danos
                acidentais decorrentes de falta de cuidado ou uso excessivo.
                Além disso, a garantia perde a validade se for constatado que o
                produto foi reparado por alguém que não seja da nossa empresa
                autorizada. Nossos relógios são projetados para suportar até 20
                metros de profundidade na água, graças à vedação feita por uma
                máquina italiana de alta precisão. No entanto, é importante
                evitar o contato com água quente, vapor de sauna ou chuveiro,
                pois a borracha de silicone que veda o relógio pode derreter
                nessas condições. Certifique-se de que os botões estejam bem
                rosqueados ao entrar em contato com água. Recomendamos que você
                verifique o produto imediatamente após o recebimento, e caso
                identifique algum defeito de fabricação ou discrepância com o
                pedido, entre em contato conosco. A troca do relógio é realizada
                no ato da entrega, mediante o envio de um vídeo via WhatsApp que
                comprove o defeito. É importante não remover os plásticos
                protetores do produto. Caso a troca seja necessária, você deve
                enviar o produto de volta para nosso endereço em perfeito
                estado, usando o serviço de envio dos Correios via PAC. Assim
                que recebermos o produto, enviaremos um substituto idêntico e
                reembolsaremos o valor do frete.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="gap-8 text-left text-foreground/70">
                Qual garantia tenho ao comprar com a In Time?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Entendemos as preocupações com golpes na internet que afetam os
                comerciantes honestos. Se você ainda não nos conhece e está
                hesitante em fazer uma compra, fique tranquilo, isso é
                compreensível. Oferecemos uma maneira de garantir 100% de
                segurança no pagamento e na entrega do seu pedido. Ao optar por
                pagar com cartão de crédito ou boleto bancário através do
                Mercado Pago, a plataforma mais segura para compras online, você
                estará protegido. O Mercado Pago assegura total segurança em
                suas transações. Se o vendedor não entregar sua mercadoria, seu
                dinheiro será reembolsado imediatamente, sem demora. O pagamento
                que você fez ao vendedor é retido e só é liberado após a
                confirmação da entrega da mercadoria. Tudo é feito de forma
                automática e 100% segura!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
