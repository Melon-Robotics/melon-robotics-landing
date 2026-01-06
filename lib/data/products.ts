import type { LucideIcon } from "lucide-react"

export interface ProductFeature {
  icon: string
  title: string
  description: string
}

export interface ProductSpec {
  title: string
  value: string
}

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  heroImage: string
  heroImageAlt?: string
  category: 'software' | 'hardware' | 'robotics'
  features: ProductFeature[]
  specifications: ProductSpec[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  cta: {
    primary: string
    secondary: string
  }
  // Products page specific fields
  valueProposition: string // One-sentence value prop
  supportingParagraph: string // 2-3 line supporting text
  keySpecs: Array<{ label: string; value: string }> // 3-4 key specifications for products page
  productsPageCta: {
    primary: string
    primaryHref: string
    secondary?: string
    secondaryHref?: string
  }
}

export const products: Product[] = [
  {
    id: 'blackbox',
    name: 'BlackBox',
    tagline: 'Intelligent Communication Platform for the Ocean',
    description: 'Advanced speech-to-text software for maritime and subsea operations. Real-time transcription, intelligent flagging, and offline-first architecture.',
    heroImage: '/linear.webp',
    heroImageAlt: 'BlackBox communication platform interface showing real-time transcription and maritime communication protocols',
    category: 'software',
    valueProposition: 'Real-time speech-to-text transcription for maritime and subsea communications, operating entirely offline.',
    supportingParagraph: 'Designed for operations where network connectivity is unreliable or security-sensitive. Processes VHF, UHF, HF, and satellite communications with domain-specific accuracy. All data remains on-device with zero cloud dependency.',
    keySpecs: [
      { label: 'Operating Environment', value: 'Maritime, subsea, aviation' },
      { label: 'Primary Use Case', value: 'Critical communication transcription and archival' },
      { label: 'Differentiator', value: 'Offline-first, zero-latency local processing' },
      { label: 'Target Operator', value: 'Maritime operations, defense, search and rescue' }
    ],
    productsPageCta: {
      primary: 'View System Overview',
      primaryHref: '/products/blackbox',
      secondary: 'View Documentation',
      secondaryHref: '/products/blackbox'
    },
    features: [
      {
        icon: 'Cpu',
        title: 'AI-Powered Speech Recognition',
        description: 'Custom-built NLP models optimized for maritime and aviation terminology with extreme accuracy.',
      },
      {
        icon: 'Battery',
        title: 'Offline-First Architecture',
        description: 'All data stored locally on device. No cloud dependency, complete privacy, zero latency.',
      },
      {
        icon: 'Flag',
        title: 'Intelligent Flagging',
        description: 'Mark critical communications for instant recall. Smart context awareness understands mission priorities.',
      },
      {
        icon: 'Radio',
        title: 'Multi-Protocol Support',
        description: 'Hardwired and wireless connections. VHF, UHF, HF, and satellite communication compatibility.',
      },
      {
        icon: 'Map',
        title: 'Situational Awareness Display',
        description: 'Real-time location, altitude, speed over ground, and coordinate tracking with minimap visualization.',
      },
      {
        icon: 'Search',
        title: 'Advanced Search & Archive',
        description: 'Search entire communication history with natural language queries. Intelligent date indexing.',
      },
    ],
    specifications: [
      { title: 'Platform', value: 'iOS 17+' },
      { title: 'Device Support', value: 'iPhone 11+, iPad 2020+' },
      { title: 'Connectivity', value: 'Hardware & Wireless' },
      { title: 'Privacy', value: '100% Local Storage' },
      { title: 'Languages', value: 'Multi-Language Support' },
      { title: 'Update Model', value: 'Periodic Model Improvements' },
    ],
    cta: {
      primary: 'Download on App Store',
      secondary: 'View Documentation',
    },
  },
  {
    id: 'pneumaforce',
    name: 'PneumaForce',
    tagline: 'Revolutionary Upper-Body Exoskeleton for Commercial Diving',
    description: 'Advanced pneumatic exoskeleton augmenting diver strength up to 100 lbs while maintaining precise control. Engineered for extreme depths and demanding commercial operations.',
    heroImage: '/exoskeleton.png',
    heroImageAlt: 'PneumaForce exoskeleton system showing pneumatic actuators and marine-grade construction for commercial diving operations',
    category: 'hardware',
    valueProposition: 'Pneumatic exoskeleton system augmenting diver strength by 100 lbs while maintaining precise control at depths up to 1,000 feet.',
    supportingParagraph: 'Engineered for commercial diving operations requiring extended bottom time and heavy lifting capability. AirMatrix buoyancy control reduces diver fatigue and extends operational duration. Marine-grade construction withstands corrosive saltwater environments.',
    keySpecs: [
      { label: 'Operating Environment', value: 'Commercial diving, depths up to 1,000 ft (305 m)' },
      { label: 'Primary Use Case', value: 'Heavy lifting and extended bottom time operations' },
      { label: 'Differentiator', value: 'Pneumatic power assist with predictive AI movement amplification' },
      { label: 'Target Operator', value: 'Commercial diving contractors, offshore construction, salvage operations' }
    ],
    productsPageCta: {
      primary: 'View Specifications',
      primaryHref: '/products/pneumaforce',
      secondary: 'Request Demo',
      secondaryHref: '/contact'
    },
    features: [
      {
        icon: 'Waves',
        title: 'AirMatrix Buoyancy System',
        description: 'Precision real-time buoyancy control replaces traditional dive belts. Reduces fatigue and extends dive duration by up to 3x.',
      },
      {
        icon: 'Zap',
        title: 'PneumaPower Assist',
        description: '100 lb (45 kg) strength augmentation powered by adaptive pneumatic actuators. Seamless integration with natural movement.',
      },
      {
        icon: 'Activity',
        title: 'SyncMotion Interface',
        description: 'Predictive AI algorithms anticipate diver intentions and amplify movements. Neural sensor network provides millisecond response.',
      },
      {
        icon: 'Depth',
        title: 'Extreme Depth Capability',
        description: 'Operational depth up to 1000 ft (305 m). Pressure-resistant housing and redundant safety systems.',
      },
      {
        icon: 'Battery',
        title: 'Extended Operating Time',
        description: 'Up to 9 hours continuous operation on single charge. Hot-swappable battery system for extended missions.',
      },
      {
        icon: 'Shield',
        title: 'Marine-Grade Construction',
        description: 'Carbon fiber, aerospace aluminum, and HDPE construction. Corrosion-resistant and impact-rated for harsh environments.',
      },
    ],
    specifications: [
      { title: 'Weight', value: '46 lbs (21 kg)' },
      { title: 'Max Operating Depth', value: '1000 ft (305 m)' },
      { title: 'Battery Life', value: 'Up to 9 hours' },
      { title: 'Power Assist', value: 'Up to 100 lbs (45 kg)' },
      { title: 'Air Supply', value: 'Standard SCUBA Compatible' },
      { title: 'Materials', value: 'Carbon Fiber, Aluminum, HDPE' },
    ],
    testimonial: {
      quote: 'The PneumaForce makes working at depth feel effortless. It\'s like having superhuman strength underwater.',
      author: 'Carlos Mendoza',
      role: 'Offshore Operations Specialist',
    },
    cta: {
      primary: 'Request Demo',
      secondary: 'View Specifications',
    },
  },
  {
    id: 'scout',
    name: 'Melon Scout',
    tagline: 'Autonomous Underwater Vehicle with Swarm Intelligence',
    description: 'Modular AUV system designed for precision exploration, surveillance, and data collection. Features advanced AI, multi-unit coordination, and extreme depth capability.',
    heroImage: '/placeholder.svg?height=600&width=600',
    heroImageAlt: 'Melon Scout AUV system showing modular design with sensor payloads and swarm coordination capabilities',
    category: 'robotics',
    valueProposition: 'Modular autonomous underwater vehicle system with swarm coordination for persistent subsea operations at depths up to 1,000 meters.',
    supportingParagraph: 'Designed for defense, research, and infrastructure inspection missions requiring autonomous data collection and surveillance. Swarm intelligence enables coordinated multi-unit operations with shared situational awareness. Configurable payload modules support sonar mapping, environmental sensing, and sample collection.',
    keySpecs: [
      { label: 'Operating Environment', value: 'Subsea operations, depths up to 1,000 m' },
      { label: 'Primary Use Case', value: 'Autonomous surveillance, exploration, and data collection' },
      { label: 'Differentiator', value: 'Modular architecture with swarm coordination and edge AI processing' },
      { label: 'Target Operator', value: 'Defense contractors, research institutions, infrastructure operators' }
    ],
    productsPageCta: {
      primary: 'Explore Architecture',
      primaryHref: '/products/scout',
      secondary: 'Request Demo',
      secondaryHref: '/contact'
    },
    features: [
      {
        icon: 'Cpu',
        title: 'AI-Powered Intelligence',
        description: 'Advanced neural networks enable autonomous decision-making and adaptive mission planning in complex underwater environments.',
      },
      {
        icon: 'Zap',
        title: 'Modular Design',
        description: 'Customizable payload options allow for mission-specific configurations, from sonar mapping to sample collection.',
      },
      {
        icon: 'Waves',
        title: 'Deep Ocean Capability',
        description: 'Engineered to withstand extreme pressures and operate efficiently at depths of up to 1,000 meters.',
      },
      {
        icon: 'Compass',
        title: 'Precision Navigation',
        description: 'Multi-sensor fusion provides centimeter-level positioning accuracy even in GPS-denied underwater environments.',
      },
    ],
    specifications: [
      { title: 'Operating Depth', value: 'Up to 1,000 m' },
      { title: 'Autonomy', value: '8-12 hours typical' },
      { title: 'Speed', value: 'Up to 12 knots' },
      { title: 'Payload Capacity', value: 'Configurable' },
      { title: 'Communication', value: 'Acoustic & Satellite' },
      { title: 'Swarm Size', value: 'Unlimited (tested up to 50 units)' },
    ],
    cta: {
      primary: 'Schedule Demo',
      secondary: 'View Specifications',
    },
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category)
}

