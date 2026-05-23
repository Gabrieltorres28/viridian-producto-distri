import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { DashboardSection } from "@/components/landing/dashboard-section"
import { DevicesSection } from "@/components/landing/devices-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { TrustSection } from "@/components/landing/trust-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DashboardSection />
      <DevicesSection />
      <BenefitsSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  )
}
