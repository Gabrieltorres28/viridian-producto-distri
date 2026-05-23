"use client"

import { motion } from "framer-motion"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { 
  TrendingUp, 
  Users, 
  AlertTriangle, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

const salesData = [
  { month: "Ene", ventas: 280000, cobros: 195000 },
  { month: "Feb", ventas: 320000, cobros: 245000 },
  { month: "Mar", ventas: 350000, cobros: 290000 },
  { month: "Abr", ventas: 410000, cobros: 340000 },
  { month: "May", ventas: 380000, cobros: 310000 },
  { month: "Jun", ventas: 450000, cobros: 385000 },
]

const metrics = [
  {
    label: "Ventas del mes",
    value: "$2.190.000",
    change: "+18.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    label: "Deuda total",
    value: "$892.400",
    change: "-12.3%",
    trend: "down",
    icon: TrendingUp,
  },
  {
    label: "Clientes activos",
    value: "247",
    change: "+8",
    trend: "up",
    icon: Users,
  },
  {
    label: "Stock crítico",
    value: "5",
    change: "-3",
    trend: "down",
    icon: AlertTriangle,
  },
]

export function DashboardSection() {
  return (
    <section id="dashboard" className="relative py-24 lg:py-32">
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
          <span className="text-sm font-medium text-primary">Visualización operativa</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Toda tu operación en tiempo real.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Métricas claras, gráficos profesionales y alertas inteligentes para tomar decisiones con datos reales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16"
        >
          {/* Dashboard Preview */}
          <div className="glass viridian-glow overflow-hidden rounded-2xl border border-border/50">
            {/* Header */}
            <div className="border-b border-border/30 bg-secondary/20 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Dashboard Financiero</h3>
                  <p className="text-sm text-muted-foreground">Junio 2024 - Distribuidora San Martín</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">En vivo</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Metrics Grid */}
              <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-border/30 bg-card/30 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                        <metric.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className={`flex items-center gap-1 text-sm ${
                        metric.trend === "up" 
                          ? metric.label.includes("Deuda") || metric.label.includes("crítico")
                            ? "text-red-400"
                            : "text-primary"
                          : metric.label.includes("Deuda") || metric.label.includes("crítico")
                            ? "text-primary"
                            : "text-red-400"
                      }`}>
                        {metric.trend === "up" ? (
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        ) : (
                          <ArrowDownRight className="h-3.5 w-3.5" />
                        )}
                        {metric.change}
                      </div>
                    </div>
                    <div className="mt-3 text-2xl font-semibold text-foreground">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="rounded-xl border border-border/30 bg-card/30 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-medium text-foreground">Ventas vs Cobros</h4>
                    <p className="text-sm text-muted-foreground">Evolución de los últimos 6 meses</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-xs text-muted-foreground">Ventas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary/40" />
                      <span className="text-xs text-muted-foreground">Cobros</span>
                    </div>
                  </div>
                </div>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={salesData}>
                      <defs>
                        <linearGradient id="colorVentas" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="oklch(0.65 0.15 160)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="oklch(0.65 0.15 160)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorCobros" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="oklch(0.65 0.15 160)" stopOpacity={0.15} />
                          <stop offset="95%" stopColor="oklch(0.65 0.15 160)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis 
                        dataKey="month" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "oklch(0.55 0 0)", fontSize: 12 }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "oklch(0.55 0 0)", fontSize: 12 }}
                        tickFormatter={(value) => `$${value / 1000}k`}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "oklch(0.11 0.005 160)",
                          border: "1px solid oklch(0.2 0.01 160)",
                          borderRadius: "8px",
                          color: "oklch(0.95 0 0)",
                        }}
                        formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
                      />
                      <Area
                        type="monotone"
                        dataKey="ventas"
                        stroke="oklch(0.65 0.15 160)"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorVentas)"
                      />
                      <Area
                        type="monotone"
                        dataKey="cobros"
                        stroke="oklch(0.65 0.15 160 / 0.5)"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorCobros)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
