import Button from "./ui/button";
import bgHero from '@/public/heroimg.jpg'

export default function Hero() {
  return (
    <section className="flex content-center flex-wrap h-[500px] md:h-[700px] dark:bg-slate-800 shadow-lg"
    style={{
      backgroundImage: `url(${bgHero.src})`, // Reemplaza con la URL de tu imagen
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-200">GUILLERMO CERRAJERÍA
        </h1>
        <h2 className="text-xl mb-[50px] font-semibold text-gray-100">Servicios de Cerrajería de urgencia 24/7</h2>

        <a href="tel:+5493815818139">
          
        <Button label="+54 9 381 581-8139"/>
        </a>/
        
      </div>
    </section>
  )
}

