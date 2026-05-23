"use client"

import { motion } from "framer-motion"
import { 
  AlertCircle, 
  FileQuestion, 
  PackageX, 
  Truck, 
  Calculator, 
  MessageSquare 
} from "lucide-react"

const problems = [
  {
    icon: AlertCircle,
    title: "Clientes que deben y nadie controla",
    description: "La deuda se acumula sin visibilidad. Perdés plata todos los meses sin darte cuenta.",
  },
  {
    icon: PackageX,
    title: "Stock que desaparece",
    description: "Productos que faltan, diferencias inexplicables. Sin control real del inventario.",
  },
  {
    icon: Truck,
    title: "Repartos desordenados",
    description: "Rutas mal planificadas, entregas olvidadas, clientes insatisfechos.",
  },
  {
    icon: Calculator,
    title: "Caja sin seguimiento",
    description: "No sabés cuánto entró ni cuánto salió. El efectivo no cuadra nunca.",
  },
  {
    icon: MessageSquare,
    title: "Información en WhatsApp o cuadernos",
    description: "Datos críticos dispersos que se pierden o no se pueden consultar a tiempo.",
  },
  {
    icon: FileQuestion,
    title: "Empleados manejando datos manualmente",
    description: "Errores humanos, información desactualizada, procesos lentos e ineficientes.",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function ProblemSection() {
  return (
    <section id="problema" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-medium text-primary">El problema</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Las pérdidas invisibles destruyen negocios todos los días.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Si no podés ver lo que pasa en tu operación, no podés controlarlo. 
            Y lo que no controlás, te cuesta plata.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              className="card-hover group rounded-xl border border-border/50 bg-card/50 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive transition-colors group-hover:bg-destructive/20">
                <problem.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
