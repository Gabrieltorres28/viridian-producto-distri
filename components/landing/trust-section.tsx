"use client"

import { motion } from "framer-motion"
import { Shield, Zap, HeadphonesIcon, Code } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Seguridad empresarial",
    description: "Datos protegidos con encriptación de nivel bancario. Backups automáticos diarios.",
  },
  {
    icon: Zap,
    title: "Implementación rápida",
    description: "Tu sistema funcionando en menos de 15 minutos. Sin instalaciones complicadas.",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte dedicado",
    description: "Equipo de soporte disponible para ayudarte cuando lo necesites.",
  },
  {
    icon: Code,
    title: "Tecnología moderna",
    description: "Plataforma actualizada constantemente con las mejores prácticas de la industria.",
  },
]

export function TrustSection() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-medium text-primary">Por qué elegirnos</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Tecnología seria para negocios reales.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            No vendemos promesas vacías. Construimos herramientas que funcionan 
            para distribuidoras y pymes que necesitan resultados.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-border/50 bg-card/30 transition-colors group-hover:border-primary/30 group-hover:bg-primary/5">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-medium text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-20"
        >
          <div className="glass rounded-2xl border border-border/50 p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              {/* Stat 1 */}
              <div className="text-center">
                <div className="text-4xl font-semibold text-foreground lg:text-5xl">
                  100<span className="text-primary">%</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Accesible desde cualquier dispositivo
                </div>
              </div>

              {/* Stat 2 */}
              <div className="text-center">
                <div className="text-4xl font-semibold text-foreground lg:text-5xl">
                  24<span className="text-primary">/7</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Sistema disponible todo el tiempo
                </div>
              </div>

              {/* Stat 3 */}
              <div className="text-center">
                <div className="text-4xl font-semibold text-foreground lg:text-5xl">
                  15<span className="text-primary">min</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Tiempo promedio de implementación
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
