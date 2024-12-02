'use client'

import { useState, useRef } from 'react'
import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"

const testimonials = [
  {
    name: "Florencia Holgado",
    comment: "Amable,Rápido y efectivo. Recomendable",
    date: "septiembre 2024"
  },
  {
    name: "Federico Vece",
    comment: "Muy buen servicio y rápido. Precios accesibles",
    date: "2023"
  },
  {
    name: "rodmarty",
    comment: "Excelente servicio!!!. Al instante!!!",
    date: "enero 2024"
  },
  {
    name: "Viviana Fernandez",
    comment: "Excelente trabajo...y están 24/7",
    date: "2023"
  }
]

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-secondary overflow-hidden border-t border-gray-300" id="testimonios">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-8">
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.div 
            className="flex justify-center items-center mb-8"
            variants={itemVariants}
          >
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-6 h-6 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="ml-2 text-2xl font-bold">4,6</span>
            <span className="ml-2 text-gray-600">(35 reseñas)</span>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="mb-4">&quot;{testimonial.comment}&quot;</p>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>{testimonial.name}</span>
                      <span>{testimonial.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href='https://www.google.com.ar/maps/place/Cerrajeria+GUILLERMO/@-26.7981883,-65.2435642,17z/data=!4m12!1m2!2m1!1sguillermo+cerrajeria!3m8!1s0x94225d0687d1051f:0x35e9cbcde6a0bbfd!8m2!3d-26.7984469!4d-65.2433657!9m1!1b1!15sChRndWlsbGVybW8gY2VycmFqZXJpYZIBCWxvY2tzbWl0aOABAA!16s%2Fg%2F11b6_9w7t_?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D' 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative overflow-hidden bg-[#f2d492] rounded-lg py-4 px-6 border-gray-300 border"
              >
                <span className="relative z-10 font-semibold ">Dar una reseña</span>
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

