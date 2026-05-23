"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  Package, 
  BoxesIcon, 
  Wallet, 
  CreditCard, 
  Truck, 
  History, 
  BarChart3,
  LayoutDashboard
} from "lucide-react"

const modules = [
  {
    icon: Users,
    title: "Clientes",
    description: "Base de datos completa con historial de compras, deudas y contacto.",
  },
  {
    icon: Package,
    title: "Productos",
    description: "Catálogo organizado con precios, costos y categorías personalizables.",
  },
  {
    icon: BoxesIcon,
    title: "Stock",
    description: "Control de inventario en tiempo real con alertas de stock crítico.",
  },
  {
    icon: Wallet,
    title: "Caja",
    description: "Registro de ingresos y egresos con cierres diarios automáticos.",
  },
  {
    icon: CreditCard,
    title: "Deudas",
    description: "Seguimiento de cuentas corrientes y cobranzas pendientes.",
  },
  {
    icon: Truck,
    title: "Repartos",
    description: "Planificación de rutas y seguimiento de entregas en tiempo real.",
  },
  {
    icon: History,
    title: "Historial",
    description: "Registro completo de todas las operaciones para auditoría.",
  },
  {
    icon: BarChart3,
    title: "Reportes",
    description: "Informes detallados de ventas, stock, deudas y rentabilidad.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description: "Vista general de toda tu operación en una sola pantalla.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

export function SolutionSection() {
  return (
    <section id="solucion" className="relative py-24 lg:py-32">
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
          <span className="text-sm font-medium text-primary">La solución</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Un sistema diseñado para operaciones reales.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Todo lo que necesitás para controlar tu distribuidora en un único lugar. 
            Simple, accesible y pensado para el día a día.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {modules.map((module) => (
            <motion.div
              key={module.title}
              variants={itemVariants}
              className="card-hover group relative overflow-hidden rounded-xl border border-border/50 bg-card/30 p-6"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <module.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  {module.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {module.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
