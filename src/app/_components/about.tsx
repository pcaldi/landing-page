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
          <h2 className="font-bold text-4xl lg:5xl">Sobre</h2>

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

          <div className="flex flex-col gap-2 lg:flex-row ">
            <a
              href={`https://wa.me/5541999212575?text=Olá, vim pelo site e gostaria de mais informações.`}
              target="_blank"
              className="bg-green-500 px-4 py-2 text-white rounded-md hover:bg-green-600 font-semibold flex items-center justify-center w-fit gap-2 "
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>

            <a
              href={`https://www.google.com.br/maps/place/R.+Nossa+Sra.+Aparecida+-+Vila+Sao+Bernardo,+Alm.+Tamandar%C3%A9+-+PR,+83503-320/@-25.3358808,-49.2811849,19z/data=!3m1!4b1!4m6!3m5!1s0x94dcddfe537d9b8b:0x616fb356886acadf!8m2!3d-25.335882!4d-49.2805412!16s%2Fg%2F1ymtn5mh1?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D`}
              target="_blank"
              className="bg-teal-500 px-4 py-2 text-white rounded-md hover:bg-teal-600 font-semibold flex items-center justify-center w-fit gap-2"
            >
              <MapPin className="w-5 h-5" />
              Nosso Endereço
            </a>
          </div>

        </div>
      </div>
    </section >
  )
}
