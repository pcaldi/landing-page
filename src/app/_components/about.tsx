import Image from "next/image";
import imgAbout1 from "@/../public/about-1.png"
import imgAbout2 from "@/../public/romeu_formado1.png"
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-amber-100 py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8">

        <div className="relative">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src={imgAbout1}
              alt="Foto do amigo de quatro patas"
              className="object-cover hover:scale-110 duration-300"
              layout="fill"
              quality={100}
            />
          </div>

          <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg overflow-hidden border-white border-4">
            <Image
              src={imgAbout2}
              alt="Foto do amigo de quatro patas"
              className="object-cover "
              layout="fill"
              quality={100}
            />
          </div>

        </div>

        <div className="space-y-6">
          <h2 className="font-bold text-4xl lg:5xl">SOBRE</h2>

          <p>
            A Nossa clínica veterinária que atende as pessoas de quatro patas. Temos um amplo estoque de produtos e consultas veterinárias, focando em cuidar e preservar a saúde de nossos clientes.
          </p>

          <ul className="space-y-4">
            <li className="flex gap-2">
              <Check className="text-red-500" />
              Aberto desde 2007</li>
            <li className="flex gap-2">
              <Check className="text-red-500" />
              Equipe com mais de 10 veterinários</li>
            <li className="flex gap-2">
              <Check className="text-red-500" />
              Qualidade é a nossa prioridade</li>
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="bg-green-500 px-4 py-2 text-white rounded-md hover:bg-green-600 font-semibold flex items-center justify-center w-fit gap-2"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>

            <a href="#"
              className="bg-teal-500 px-4 py-2 text-white rounded-md hover:bg-teal-600 font-semibold flex items-center justify-center w-fit gap-2"
            >
              Nosso Endereço
              <MapPin className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </section >
  )
}
