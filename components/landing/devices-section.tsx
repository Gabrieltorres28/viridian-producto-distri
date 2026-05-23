"use client"

import { motion } from "framer-motion"
import { Smartphone, Monitor, Tablet } from "lucide-react"

export function DevicesSection() {
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
          <span className="text-sm font-medium text-primary">Acceso universal</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Tu negocio sigue funcionando incluso cuando vos no estás.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Accedé a toda la información de tu distribuidora desde cualquier dispositivo. 
            Todo sincronizado en tiempo real.
          </p>
        </motion.div>

        {/* Devices Showcase */}
        <div className="mt-16 flex items-end justify-center gap-4 lg:gap-8">
          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative w-32 sm:w-40 lg:w-48"
          >
            <div className="glass viridian-glow overflow-hidden rounded-2xl border border-border/50">
              {/* Phone Frame */}
              <div className="bg-secondary/30 px-2 py-2">
                <div className="mx-auto h-1 w-12 rounded-full bg-border/50" />
              </div>
              
              {/* Screen Content */}
              <div className="bg-background/50 p-2">
                <div className="space-y-2">
                  <div className="rounded-lg bg-secondary/50 p-2">
                    <div className="text-[8px] text-muted-foreground">Ventas hoy</div>
                    <div className="text-sm font-semibold text-foreground">$148.500</div>
                  </div>
                  <div className="rounded-lg bg-secondary/50 p-2">
                    <div className="text-[8px] text-muted-foreground">Deuda total</div>
                    <div className="text-sm font-semibold text-foreground">$892.400</div>
                  </div>
                  <div className="rounded-lg bg-primary/10 p-2">
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-[8px] text-primary">5 productos stock crítico</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Bottom */}
              <div className="bg-secondary/30 px-2 py-3">
                <div className="mx-auto h-1 w-8 rounded-full bg-border/50" />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              <Smartphone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Celular</span>
            </div>
          </motion.div>

          {/* Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative w-64 sm:w-80 lg:w-96"
          >
            <div className="glass viridian-glow overflow-hidden rounded-xl border border-border/50">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/30 px-3 py-2">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-500/60" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
                  <div className="h-2 w-2 rounded-full bg-green-500/60" />
                </div>
                <div className="ml-2 flex-1">
                  <div className="rounded bg-background/50 px-2 py-0.5 text-[8px] text-muted-foreground">
                    app.viridiancore.com
                  </div>
                </div>
              </div>

              {/* Screen Content */}
              <div className="bg-background/50 p-3">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-xs font-medium text-foreground">Dashboard</div>
                  <div className="flex gap-1">
                    <div className="h-4 w-4 rounded bg-secondary/50" />
                    <div className="h-4 w-4 rounded bg-secondary/50" />
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="rounded bg-secondary/50 p-2">
                      <div className="h-1.5 w-8 rounded bg-muted-foreground/30" />
                      <div className="mt-1 h-3 w-full rounded bg-foreground/20" />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded bg-secondary/50 p-2">
                    <div className="h-16 w-full rounded bg-primary/10" />
                  </div>
                  <div className="rounded bg-secondary/50 p-2">
                    <div className="space-y-1">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-4 w-full rounded bg-foreground/10" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stand */}
            <div className="mx-auto h-4 w-24 rounded-b-lg bg-secondary/50" />
            <div className="mx-auto h-2 w-32 rounded-b bg-secondary/30" />

            <div className="mt-4 flex items-center justify-center gap-2">
              <Monitor className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Computadora</span>
            </div>
          </motion.div>

          {/* Tablet */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative hidden w-48 sm:block lg:w-56"
          >
            <div className="glass viridian-glow overflow-hidden rounded-2xl border border-border/50">
              {/* Tablet Top */}
              <div className="bg-secondary/30 py-2">
                <div className="mx-auto h-1 w-4 rounded-full bg-border/50" />
              </div>
              
              {/* Screen Content */}
              <div className="bg-background/50 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-[10px] font-medium text-foreground">Repartos del día</div>
                  <div className="flex h-4 w-4 items-center justify-center rounded bg-primary/20">
                    <span className="text-[8px] text-primary">18</span>
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  {["Almacén Don Pedro", "Kiosco La Esquina", "Minimarket Express"].map((name, i) => (
                    <div key={i} className="flex items-center justify-between rounded bg-secondary/50 px-2 py-1.5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-[8px] text-primary">
                          {name.charAt(0)}
                        </div>
                        <span className="text-[9px] text-foreground">{name}</span>
                      </div>
                      <span className={`text-[8px] ${i === 0 ? "text-primary" : "text-muted-foreground"}`}>
                        {i === 0 ? "En camino" : "Pendiente"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tablet Bottom */}
              <div className="bg-secondary/30 py-2">
                <div className="mx-auto h-4 w-4 rounded-full border border-border/50" />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              <Tablet className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Tablet</span>
            </div>
          </motion.div>
        </div>

        {/* Sync Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex items-center justify-center gap-2"
        >
          <span className="flex h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">Sincronizado en tiempo real</span>
        </motion.div>
      </div>
    </section>
  )
}
