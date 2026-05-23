"use client"

import { motion } from "framer-motion"
import { 
  TrendingDown, 
  Clock, 
  Eye, 
  Target, 
  Timer, 
  BarChart 
} from "lucide-react"

const benefits = [
  {
    icon: TrendingDown,
    title: "Reducí pérdidas",
    description: "Identificá fugas de dinero, errores de stock y clientes morosos antes de que sea tarde.",
  },
  {
    icon: Clock,
    title: "Controlá deuda en segundos",
    description: "Accedé al estado de cuenta de cualquier cliente de forma instantánea.",
  },
  {
    icon: Eye,
    title: "Visualizá stock real",
    description: "Sabé exactamente qué tenés, qué falta y qué se mueve más rápido.",
  },
  {
    icon: Target,
    title: "Centralizá toda la operación",
    description: "Un único sistema para clientes, productos, caja, deudas y repartos.",
  },
  {
    icon: Timer,
    title: "Ahorrá tiempo administrativo",
    description: "Automatizá tareas repetitivas y eliminá la carga de trabajo manual.",
  },
  {
    icon: BarChart,
    title: "Tomá decisiones con datos reales",
    description: "Reportes claros y métricas precisas para guiar tu negocio.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function BenefitsSection() {
  return (
    <section id="beneficios" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-medium text-primary">Beneficios</span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Menos caos.
              <br />
              <span className="text-primary">Más control.</span>
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Viridian Core te da las herramientas para gestionar tu distribuidora 
              de manera eficiente, reduciendo errores y maximizando resultados.
            </p>

            {/* Highlight Box */}
            <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <TrendingDown className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    Recuperá el control de tu operación
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Las distribuidoras que implementan un sistema de gestión 
                    reducen sus pérdidas operativas significativamente.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Benefits List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="card-hover group flex items-start gap-4 rounded-xl border border-border/50 bg-card/30 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
