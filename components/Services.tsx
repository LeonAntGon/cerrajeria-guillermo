import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
//import { Key, Lock, DoorOpen, Car } from "lucide-react"
import keys from "@/public/servicesimg/juego-de-llaves.png"
import car from "@/public/servicesimg/auto.png"
import door from "@/public/servicesimg/destrabar.png"
import cambios from "@/public/servicesimg/llave-puerta.png"
import Image from "next/image"

const services = [
  { title: "Copia de Llaves", description: "Duplicamos todo tipo de llaves con precisión", img: keys },
  { title: "Cambios de Combinación", description: "Modificamos y actualizamos combinaciones de cerraduras", img: cambios },
  { title: "Destrabados y Aperturas", description: "Servicio de apertura puertas sin dañar la cerradura", img: door },
  { title: "Trabajo de Automóviles", description: "Servicios especializados para vehículos", img: car },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="max-w-[300px] max-h-[200px] overflow-hidden">
                <Image 
                  src={service.img.src}
                  alt={service.description}
                  width={300} 
                  height={100}
                  className="object-cover"
                  />
                </div>
                
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

