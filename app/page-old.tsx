import { MelonScoutHero } from "@/components/melon-scout-hero"
import { MelonScoutNav } from "@/components/melon-scout-nav"
import { MelonScoutFooter } from "@/components/melon-scout-footer"
import { WhatIsMelonScout } from "@/components/what-is-melon-scout"
import { FeverSwarmAdvantage } from "@/components/fever-swarm-advantage"
import { BuiltForDefense } from "@/components/built-for-defense"
import { RealTimeOps } from "@/components/real-time-ops"
import { MelonEdge } from "@/components/melon-edge"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <MelonScoutNav />
      <main>
        <MelonScoutHero />
        <WhatIsMelonScout />
        <FeverSwarmAdvantage />
        <BuiltForDefense />
        <RealTimeOps />
        <MelonEdge />
        <CTASection />
      </main>
      <MelonScoutFooter />
    </div>
  )
}
