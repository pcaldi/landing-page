import golden from "@/../public/golden.png"
import natural from "@/../public/natural.png"
import premier from "@/../public/premier.png"
import royal from "@/../public/royal.png"
import whiskas from "@/../public/whiskas.png"
import guabi from "@/../public/guabi.png"
import Image from "next/image"

import { WhatsappLogo, FacebookLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr"
import { X } from "lucide-react"

const brands = [
  { id: 1, name: "Royal Canin", logo: royal },
  { id: 2, name: "Golden", logo: golden },
  { id: 3, name: "Premier", logo: premier },
  { id: 4, name: "Formula Natural", logo: natural },
  { id: 5, name: "Whiskas", logo: whiskas },
  { id: 6, name: "Guabi Natural", logo: guabi },
]



export function Footer() {
  return (
    <section className="bg-[#E84C3D] py-16 text-white">
      <div className="container mx-auto px-4">

        <div className="border-b border-white/20 pb-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">Nossas Parceiros</h2>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 items-center">
            {
              brands.map((items) => (
                <div key={items.id} className="bg-white rounded-lg flex items-center justify-center">
                  <Image
                    src={items.logo}
                    alt={items.name}
                    width={100}
                    height={50}
                    quality={100}
                    className="object-contain"
                    style={{
                      width: 'auto',
                      height: 'auto',
                    }}
                  />
                </div>
              ))
            }
          </div>


        </div>
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-3xl font-semibold mb-2">Pet Shop</h3>
            <p className="mb-4">
              Cuidando do seu melhor amigo com amor, dedicação e carinho.
            </p>
            <a
              href={`https://wa.me/5541999212575?text=Olá, vim pelo site e gostaria de mais informações.`}
              target="_blank"
              className="bg-green-500 px-4 py-2 text-white rounded-md hover:bg-green-600 font-semibold flex items-center justify-center w-fit gap-2"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-2">Contatos</h3>
            <p >Email: contato@petshop.com</p>
            <p >Telefone: (41) 3244-2343</p>
            <p >Rua Nossa Senhora, 180</p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-2">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/"
                target="_blank"
                className="flex items-center gap-2 hover:scale-105 duration-300"
              >
                <FacebookLogo className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="flex items-center gap-2 hover:scale-105 duration-300"
              >
                <InstagramLogo className="w-8 h-8" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                className="flex items-center gap-2 hover:scale-105 duration-300"
              >
                <X className="w-8 h-8" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="flex items-center gap-2 hover:scale-105 duration-300"
              >
                <YoutubeLogo className="w-8 h-8" />
              </a>
            </div>


          </div>


        </footer>

        <div>
          <p className="flex text-center items-center justify-center">
            &copy; Pet Shop. Todos os direitos reservados.
          </p>
        </div>
      </div>

    </section>
  )
}
