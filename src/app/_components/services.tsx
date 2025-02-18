'use client'

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, CarTaxiFront, Syringe, Hotel, Clock } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

const services = [
  {
    id: 1,
    title: "Banho & Tosa",
    description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    duration: "1h",
    price: "$50",
    icon: <Scissors />,
    linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
  },
  {
    id: 2,
    title: "Consulta Veterinária",
    description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
    duration: "1h",
    price: "$45",
    icon: <Syringe />,
    linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
  },
  {
    id: 3,
    title: "Táxi Pet",
    description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
    duration: "2h",
    price: "$80",
    icon: <CarTaxiFront />,
    linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
  },
  {
    id: 4,
    title: "Hotel para pets",
    description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
    duration: "1h",
    price: "$60",
    icon: <Hotel />,
    linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
  },
]


export function Services() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    }
  })

  function scrollPrev() {
    emblaApi?.scrollPrev()
  }

  function scrollNext() {
    emblaApi?.scrollNext()
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div >
          <h2 className="text-4xl font-bold mb-12">Nossos Serviços</h2>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {
                  services.map((item) => (
                    <div key={item.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3 select-none">
                      <article className="bg-slate-900 text-white p-6 rounded-2xl space-y-4 h-full flex">
                        <div className="flex-1 flex items-start justify-between flex-col">
                          <div className="flex gap-3">
                            <span className="text-white text-3xl">{item.icon}</span>
                            <div className="my-2">
                              <h3 className="text-xl font-bold">{item.title}</h3>
                              <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                          </div>

                          <div className="border-t border-gray-700 flex w-full pt-4 items-center justify-between" >
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="w-4 h-4" />
                              <span>{item.duration}</span>
                            </div>


                            <a
                              href={`https://wa.me/5541999212575?text=${item.linkText}`}
                              target="_blank"
                              className="flex items-center gap-2 text-sm
                              hover:bg-green-500 rounded-md hover:scale-95 duration-300 px-2 py-1"
                            >
                              <WhatsappLogo className="w-4 h-4" />
                              Entrar em contato
                            </a>

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
