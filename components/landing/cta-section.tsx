"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 radial-overlay" />
      
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="glass viridian-glow mx-auto rounded-2xl border border-border/50 p-8 lg:p-12"
          >
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Tu operación necesita control,{" "}
              <span className="text-primary">no más caos.</span>
            </h2>
            
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              Solicitá una demo y descubrí cómo ordenar toda tu distribuidora desde un único sistema.
              Sin compromisos, sin letra chica.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group h-14 gap-3 bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5" />
                Hablar por WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="h-14 border-border px-8 text-base text-foreground hover:bg-secondary"
              >
                Solicitar demo
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Respondemos en menos de 2 horas durante horario comercial.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
