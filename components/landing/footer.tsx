export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">V</span>
            </div>
            <span className="text-lg font-semibold text-foreground">Viridian Core</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#problema" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              El problema
            </a>
            <a href="#solucion" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Solución
            </a>
            <a href="#dashboard" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Dashboard
            </a>
            <a href="#beneficios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Beneficios
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Viridian Core
          </p>
        </div>
      </div>
    </footer>
  )
}
