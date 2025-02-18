'use client'

import useEmblaCarousel from "embla-carousel-react"

import { ChevronLeft, ChevronRight } from "lucide-react"
import tutor1 from "@/../public/tutor1.jpg"
import tutor2 from "@/../public/tutor2.jpg"
import tutor3 from "@/../public/tutor3.jpg"
import tutor4 from "@/../public/tutor4.jpg"
import tutor5 from "@/../public/tutor5.jpg"
import tutor6 from "@/../public/tutor6.jpg"
import tutor7 from "@/../public/tutor7.jpg"
import tutor8 from "@/../public/tutor8.jpg"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    content:
      "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor1,
  },
  {
    id: 2,
    content:
      "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
    author: "Rafael",
    role: "Tutor do Thor (Bulldog Francês)",
    image: tutor3,
  },
  {
    id: 3,
    content: "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
    author: "Camila Fernandes",
    role: "Tutora da Mel e do Max",
    image: tutor2,
  },
  {
    id: 4,
    content: "Depois de uma experiência ruim em outro petshop, encontrei esse lugar maravilhoso! O cuidado com a saúde dos meus cães através dos serviços de veterinária integrada foi incrível. A equipe trata os animais com tanto carinho que parece uma segunda família!",
    author: "Rafael Souza",
    role: "Tutor do Thor e da Luna",
    image: tutor4,
  },
  {
    id: 5,
    content: "A loja tem produtos naturais que melhoraram a alimentação da minha gata siamesa com alergias. O ambiente é tão acolhedor que até meu cachorro, que é ansioso, fica tranquilo durante os banhos. Recomendo de olhos fechados!",
    author: "Isabela Costa",
    role: "Tutora da Nala e do Zeus",
    image: tutor5,
  },
  {
    id: 6,
    content: "Serviço de tosa especializada para raças específicas salvou meu spitz alemão no verão! Profissionais atualizados e que realmente entendem de comportamento animal. Meu cachorro saiu feliz e cheiroso!",
    author: "Diego Martins",
    role: "Tutor do Snow",
    image: tutor7,
  },
  {
    id: 7,
    content: "Atendimento emergencial 24h foi um divisor de águas quando meu gato passou mal de madrugada. Equipe ágil, competente e que explica tudo com detalhes. Hoje todos os meus 3 gatos são clientes fiéis!",
    author: "Juliana Ribeiro",
    role: "Tutora do Mike, Lipe e Dora",
    image: tutor6,
  },
  {
    id: 8,
    content: "O hotelzinho para pets foi uma descoberta incrível! Viajei tranquila sabendo que meus dois pugs teriam atividades monitoradas e muito carinho. A equipe até enviou fotos deles brincando no parque interno! Voltei e encontrei meus dogs relaxados, como se nem tivessem sentido minha ausência. Recomendo a todos que buscam confiança e diversão para seus bichinhos!",
    author: "Carolina Almeida",
    role: "Tutora do Bento e da Sofia",
    image: tutor8,
  },
]

export function Testimonials() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  })

  function scrollPrev() {
    emblaApi?.scrollPrev()
  }

  function scrollNext() {
    emblaApi?.scrollNext()
  }

  return (
    <section className="bg-amber-300 py-16">
      <div className="container mx-auto px-4">
        <div >
          <h2 className="text-4xl font-bold text-center mb-12">Depoimento dos nossos clientes</h2>

          <div className="relative max-w-4xl  mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {
                  testimonials.map((item) => (
                    <div key={item.id} className="flex-[0_0_100%] min-w-0 px-3 select-none">
                      <article className="bg-slate-900 text-white p-6 rounded-2xl space-y-4 h-full flex flex-col">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="relative w-24 h-24 ">
                            <Image
                              src={item.image}
                              layout="fill"
                              objectFit="cover"
                              alt={item.author}
                              className="rounded-full object-cover"
                            />
                          </div>

                          <p>{item.content}</p>
                          <div>
                            <h3 className="text-2xl font-bold">{item.author}</h3>
                            <p className="text-sm text-gray-400">{item.role}</p>
                          </div>


                        </div>

                      </article>

                    </div>
                  ))
                }
              </div>
            </div>

            <button onClick={scrollPrev} className="bg-gray-400 rounded-full px-1 py-1 text-white absolute left-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button onClick={scrollNext} className="bg-gray-400 rounded-full px-1 py-1 text-white absolute -right-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}
