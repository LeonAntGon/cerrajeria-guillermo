"use client"
import { useEffect } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Testimonials from "../components/Testimonials"
import WhatsappLive from "@/components/animations/WspLive"

export default function Home() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.querySelectorAll("a[href^='#']").forEach(anchor => {
      anchor.addEventListener("click", (e: Event) => handleSmoothScroll(e as MouseEvent)) // Cambiar el tipo a Event y luego hacer un casting a MouseEvent
    })

    return () => {
      document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.removeEventListener("click", handleSmoothScroll as EventListener)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
        <Testimonials />
        <WhatsappLive encodedMessage={"Buenas, cerrajeria Guillermo?"}/>
      </main>
      <Footer />
    </div>
  )
}

