/**
 * Melon Scout Pricing Configuration
 * 
 * Tiered pricing based on equipment level
 * Volume discounts for swarm purchases
 */

export interface ScoutTier {
  id: string
  name: string
  basePrice: number // in cents
  description: string
  features: string[]
  specifications: {
    depth: string
    autonomy: string
    sensors: string[]
    aiLevel: string
  }
}

export interface VolumeDiscount {
  minQuantity: number
  maxQuantity: number | null // null means unlimited
  discountPercent: number
  label: string
}

export const SCOUT_TIERS: Record<string, ScoutTier> = {
  basic: {
    id: 'scout-basic',
    name: 'Basic',
    basePrice: 3200000, // $32,000 - Base price before options
    description: 'Entry-level Scout with core AUV capabilities. Perfect for research, training, and basic surveillance missions.',
    features: [
      'Core AI navigation system',
      'Standard depth rating (500m)',
      'HD camera system',
      'Basic acoustic communication',
      '8-hour battery life',
      'GPS and IMU navigation',
    ],
    specifications: {
      depth: 'Up to 500m',
      autonomy: '8 hours',
      sensors: ['HD Camera', 'IMU', 'GPS', 'Depth Sensor'],
      aiLevel: 'Standard',
    },
  },
  standard: {
    id: 'scout-standard',
    name: 'Standard',
    basePrice: 4800000, // $48,000
    description: 'Enhanced Scout with advanced sensors and improved AI. Ideal for commercial operations and detailed inspections.',
    features: [
      'Advanced AI mission planning',
      'Extended depth rating (750m)',
      '4K camera with low-light capability',
      'Side-scan sonar',
      'Enhanced acoustic mesh networking',
      '10-hour battery life',
      'DVL (Doppler Velocity Log)',
      'Water quality sensors',
    ],
    specifications: {
      depth: 'Up to 750m',
      autonomy: '10 hours',
      sensors: ['4K Camera', 'Side-Scan Sonar', 'DVL', 'Water Quality Sensors', 'IMU', 'GPS'],
      aiLevel: 'Advanced',
    },
  },
  advanced: {
    id: 'scout-advanced',
    name: 'Advanced',
    basePrice: 7500000, // $75,000
    description: 'Fully-equipped Scout with comprehensive sensor suite and enterprise AI. Designed for complex missions and defense applications.',
    features: [
      'Enterprise-grade AI with swarm coordination',
      'Maximum depth rating (1000m)',
      'Multi-beam sonar',
      'Chemical/biological sampling',
      'Laser scanning system',
      'Satellite communication',
      '12-hour battery life',
      'Advanced obstacle avoidance',
      'Real-time data processing',
    ],
    specifications: {
      depth: 'Up to 1000m',
      autonomy: '12 hours',
      sensors: ['4K Camera', 'Multi-beam Sonar', 'Laser Scanner', 'Chemical Sensors', 'DVL', 'IMU', 'GPS'],
      aiLevel: 'Enterprise',
    },
  },
  enterprise: {
    id: 'scout-enterprise',
    name: 'Enterprise',
    basePrice: 12000000, // $120,000
    description: 'Military-grade Scout with all capabilities, hardened systems, and maximum performance. For critical defense and government operations.',
    features: [
      'Military-grade AI with advanced swarm intelligence',
      'Maximum depth rating (1000m+)',
      'Full sensor suite (all available sensors)',
      'Encrypted communication systems',
      'Hardened against jamming',
      'Extended battery life (14+ hours)',
      'Redundant systems',
      'ITAR compliant',
      'Custom mission software',
      'Priority support and training',
    ],
    specifications: {
      depth: 'Up to 1000m+',
      autonomy: '14+ hours',
      sensors: ['All Available Sensors', 'Military-Grade Encryption', 'Redundant Systems'],
      aiLevel: 'Military-Grade',
    },
  },
}

export const VOLUME_DISCOUNTS: VolumeDiscount[] = [
  {
    minQuantity: 1,
    maxQuantity: 5,
    discountPercent: 0,
    label: 'Standard Pricing',
  },
  {
    minQuantity: 6,
    maxQuantity: 10,
    discountPercent: 5,
    label: 'Small Swarm (5% off)',
  },
  {
    minQuantity: 11,
    maxQuantity: 25,
    discountPercent: 10,
    label: 'Medium Swarm (10% off)',
  },
  {
    minQuantity: 26,
    maxQuantity: null,
    discountPercent: 15,
    label: 'Large Swarm (15% off)',
  },
]

/**
 * Calculate price with volume discount
 */
export function calculateScoutPrice(tierId: string, quantity: number): number {
  const tier = SCOUT_TIERS[tierId as keyof typeof SCOUT_TIERS]
  if (!tier) {
    return 0
  }

  const basePrice = tier.basePrice
  const discount = getVolumeDiscount(quantity)
  const discountAmount = basePrice * (discount.discountPercent / 100)
  const finalPrice = basePrice - discountAmount

  return Math.round(finalPrice * quantity)
}

/**
 * Get volume discount for quantity
 */
export function getVolumeDiscount(quantity: number): VolumeDiscount {
  for (const discount of VOLUME_DISCOUNTS) {
    if (
      quantity >= discount.minQuantity &&
      (discount.maxQuantity === null || quantity <= discount.maxQuantity)
    ) {
      return discount
    }
  }
  return VOLUME_DISCOUNTS[0] // Default to no discount
}

/**
 * Get tier by ID
 */
export function getScoutTier(tierId: string): ScoutTier | undefined {
  return SCOUT_TIERS[tierId as keyof typeof SCOUT_TIERS]
}

/**
 * Get all tiers
 */
export function getAllScoutTiers(): ScoutTier[] {
  return Object.values(SCOUT_TIERS)
}







