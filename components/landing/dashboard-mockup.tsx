"use client"

import { motion } from "framer-motion"
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Package, 
  DollarSign, 
  Truck,
  MoreHorizontal,
  Search,
  Bell
} from "lucide-react"

const clients = [
  { name: "Almacén Don Pedro", debt: 45200, status: "pendiente" },
  { name: "Kiosco La Esquina", debt: 12800, status: "al día" },
  { name: "Minimarket Express", debt: 78500, status: "atrasado" },
  { name: "Despensa María", debt: 23100, status: "pendiente" },
]

const recentMovements = [
  { type: "venta", description: "Venta a Almacén Don Pedro", amount: 15400, time: "Hace 12 min" },
  { type: "cobro", description: "Cobro de Kiosco La Esquina", amount: 8200, time: "Hace 45 min" },
  { type: "gasto", description: "Combustible repartos", amount: -3500, time: "Hace 2 hs" },
]

export function DashboardMockup() {
  return (
    <div className="relative">
      {/* Glow Effect */}
      <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" />
      
      {/* Main Dashboard Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="glass viridian-glow relative overflow-hidden rounded-xl border border-border/50"
      >
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/30 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-green-500/60" />
          </div>
          <div className="ml-4 flex-1">
            <div className="mx-auto max-w-sm rounded-md bg-background/50 px-3 py-1 text-xs text-muted-foreground">
              app.viridiancore.com/dashboard
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-48 border-r border-border/30 bg-background/20 p-3 lg:block">
            <div className="mb-4 flex items-center gap-2 px-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <span className="text-xs font-bold text-primary-foreground">V</span>
              </div>
              <span className="text-sm font-medium text-foreground">Viridian</span>
            </div>
            
            <nav className="space-y-1">
              {[
                { icon: "📊", label: "Dashboard", active: true },
                { icon: "👥", label: "Clientes", active: false },
                { icon: "📦", label: "Productos", active: false },
                { icon: "💰", label: "Caja", active: false },
                { icon: "🚚", label: "Repartos", active: false },
                { icon: "📈", label: "Reportes", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${
                    item.active
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-foreground">Dashboard</h2>
                <p className="text-xs text-muted-foreground">Distribuidora San Martín</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-secondary">
                  <Search className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <div className="relative flex h-7 w-7 items-center justify-center rounded-md bg-secondary">
                  <Bell className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary" />
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="mb-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
              {[
                { label: "Ventas del día", value: "$148.500", change: "+12%", icon: DollarSign, up: true },
                { label: "Deuda total", value: "$892.400", change: "-5%", icon: TrendingDown, up: true },
                { label: "Clientes activos", value: "247", change: "+3", icon: Users, up: true },
                { label: "Repartos hoy", value: "18", change: "4 pend.", icon: Truck, up: false },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border/30 bg-secondary/20 p-2.5"
                >
                  <div className="flex items-center justify-between">
                    <stat.icon className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className={`text-[10px] ${stat.up ? "text-primary" : "text-muted-foreground"}`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className="mt-1.5 text-lg font-semibold text-foreground">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Two Column Layout */}
            <div className="grid gap-3 lg:grid-cols-2">
              {/* Clients with Debt */}
              <div className="rounded-lg border border-border/30 bg-secondary/20 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xs font-medium text-foreground">Clientes con deuda</h3>
                  <MoreHorizontal className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  {clients.map((client) => (
                    <div
                      key={client.name}
                      className="flex items-center justify-between rounded-md bg-background/30 px-2 py-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[10px] font-medium text-foreground">
                          {client.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-xs text-foreground">{client.name}</div>
                          <div className={`text-[10px] ${
                            client.status === "atrasado" 
                              ? "text-red-400" 
                              : client.status === "al día"
                                ? "text-primary"
                                : "text-muted-foreground"
                          }`}>
                            {client.status}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs font-medium text-foreground">
                        ${client.debt.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Movements */}
              <div className="rounded-lg border border-border/30 bg-secondary/20 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xs font-medium text-foreground">Movimientos recientes</h3>
                  <MoreHorizontal className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  {recentMovements.map((movement, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-md bg-background/30 px-2 py-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <div className={`flex h-6 w-6 items-center justify-center rounded-full ${
                          movement.type === "venta" 
                            ? "bg-primary/20" 
                            : movement.type === "cobro"
                              ? "bg-blue-500/20"
                              : "bg-red-500/20"
                        }`}>
                          {movement.type === "venta" ? (
                            <TrendingUp className="h-3 w-3 text-primary" />
                          ) : movement.type === "cobro" ? (
                            <DollarSign className="h-3 w-3 text-blue-400" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-red-400" />
                          )}
                        </div>
                        <div>
                          <div className="text-xs text-foreground">{movement.description}</div>
                          <div className="text-[10px] text-muted-foreground">{movement.time}</div>
                        </div>
                      </div>
                      <div className={`text-xs font-medium ${
                        movement.amount > 0 ? "text-primary" : "text-red-400"
                      }`}>
                        {movement.amount > 0 ? "+" : ""}${Math.abs(movement.amount).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stock Alert */}
            <div className="mt-3 flex items-center justify-between rounded-lg border border-primary/30 bg-primary/5 px-3 py-2">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-primary" />
                <span className="text-xs text-foreground">
                  <span className="font-medium">5 productos</span> con stock crítico
                </span>
              </div>
              <button className="text-xs font-medium text-primary hover:underline">
                Ver ahora
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
