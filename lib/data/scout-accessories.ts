/**
 * Melon Scout Accessories, Peripherals, and Attachments
 * 
 * Modular components that can be added to Scout systems
 */

export interface ScoutAccessory {
  id: string
  name: string
  category: 'sensor' | 'peripheral' | 'attachment' | 'communication' | 'power' | 'payload'
  price: number // in cents
  description: string
  specifications: string[]
  compatibleTiers: string[] // Which Scout tiers this is compatible with
  image?: string
  isReplacement?: boolean // If true, this replaces default equipment included with tiers
  isUpgrade?: boolean // If true, this is an upgrade (not just a replacement)
  replacesDefault?: string // Description of what default equipment this replaces
}

export const SCOUT_ACCESSORIES: ScoutAccessory[] = [
  // Sensors
  {
    id: 'sensor-multibeam-sonar',
    name: 'Multi-Beam Sonar System',
    category: 'sensor',
    price: 4500000, // $45,000
    description: 'High-resolution multi-beam sonar for detailed seafloor mapping and object detection. Provides 360° coverage with centimeter accuracy.',
    specifications: [
      '360° coverage',
      'Range: 200m',
      'Resolution: 2cm',
      'Frequency: 200-400 kHz',
      'Real-time processing',
    ],
    compatibleTiers: ['advanced', 'enterprise'],
    isReplacement: true,
    replacesDefault: 'Replacement for multi-beam sonar included with Advanced tier',
  },
  {
    id: 'sensor-sidescan-sonar',
    name: 'Side-Scan Sonar',
    category: 'sensor',
    price: 2500000, // $25,000
    description: 'High-resolution side-scan sonar for wide-area seabed imaging and target detection.',
    specifications: [
      'Range: 150m per side',
      'Resolution: 5cm',
      'Frequency: 100-500 kHz',
      'Swath width: 300m',
    ],
    compatibleTiers: ['standard', 'advanced', 'enterprise'],
    isReplacement: true,
    replacesDefault: 'Replacement for standard side-scan sonar included with Standard tier',
  },
  {
    id: 'sensor-laser-scanner',
    name: 'Underwater Laser Scanner',
    category: 'sensor',
    price: 3500000, // $35,000
    description: 'Precision 3D laser scanning system for detailed structural inspection and photogrammetry.',
    specifications: [
      'Range: 50m',
      'Accuracy: ±2mm',
      'Scan rate: 1M points/sec',
      'Field of view: 360° × 270°',
    ],
    compatibleTiers: ['advanced', 'enterprise'],
    isReplacement: true,
    isUpgrade: true,
    replacesDefault: 'Upgrade: Replaces multi-beam sonar system with enhanced laser scanning capabilities',
  },
  {
    id: 'sensor-chemical-sampler',
    name: 'Chemical/Biological Sampler',
    category: 'sensor',
    price: 1800000, // $18,000
    description: 'Automated water sampling system with real-time chemical analysis and biological sample collection.',
    specifications: [
      '12 sample chambers',
      'Real-time pH, O2, CO2 analysis',
      'Temperature and salinity sensors',
      'Biological filter system',
    ],
    compatibleTiers: ['advanced', 'enterprise'],
    isReplacement: true,
    replacesDefault: 'Replacement for chemical sensors included with Advanced tier',
  },
  {
    id: 'sensor-magnetometer',
    name: 'Marine Magnetometer',
    category: 'sensor',
    price: 1200000, // $12,000
    description: 'High-sensitivity magnetometer for detecting ferrous objects and geological surveys.',
    specifications: [
      'Sensitivity: 0.01 nT',
      'Range: ±100,000 nT',
      'Sampling rate: 10 Hz',
      'Gradient capability',
    ],
    compatibleTiers: ['standard', 'advanced', 'enterprise'],
  },
  {
    id: 'sensor-ctd-probe',
    name: 'CTD Profiling System',
    category: 'sensor',
    price: 800000, // $8,000
    description: 'Conductivity, Temperature, and Depth profiling system for oceanographic research.',
    specifications: [
      'Depth: 0-6000m',
      'Accuracy: ±0.001°C, ±0.0003 S/m',
      'Sampling rate: 24 Hz',
      'Real-time data transmission',
    ],
    compatibleTiers: ['standard', 'advanced', 'enterprise'],
  },

  // Communication
  {
    id: 'comm-satellite-modem',
    name: 'Satellite Communication Module',
    category: 'communication',
    price: 5500000, // $55,000
    description: 'Iridium satellite communication system for real-time data transmission and remote control from anywhere in the world.',
    specifications: [
      'Iridium network compatible',
      'Data rate: 2.4 kbps',
      'Global coverage',
      'Encrypted transmission',
    ],
    compatibleTiers: ['advanced', 'enterprise'],
  },
  {
    id: 'comm-acoustic-modem',
    name: 'Advanced Acoustic Modem',
    category: 'communication',
    price: 1500000, // $15,000
    description: 'High-speed underwater acoustic modem for long-range communication and swarm coordination.',
    specifications: [
      'Range: 5-10 km',
      'Data rate: 10-20 kbps',
      'Multi-hop capability',
      'Swarm mesh networking',
    ],
    compatibleTiers: ['standard', 'advanced', 'enterprise'],
  },
  {
    id: 'comm-rf-buoy',
    name: 'RF Surface Buoy',
    category: 'communication',
    price: 3000000, // $30,000
    description: 'Surface communication buoy that extends Scout communication range via RF and satellite links.',
    specifications: [
      'WiFi and cellular connectivity',
      'Satellite backup',
      'GPS tracking',
      'Solar powered',
    ],
    compatibleTiers: ['advanced', 'enterprise'],
  },

  // Power
  {
    id: 'power-extended-battery',
    name: 'Extended Battery Pack',
    category: 'power',
    price: 1200000, // $12,000
    description: 'Additional battery pack extending operational time by 6-8 hours.',
    specifications: [
      'Capacity: 8 kWh',
      'Weight: 8 kg',
      'Hot-swappable',
      'Fast charge: 2 hours',
    ],
    compatibleTiers: ['basic', 'standard', 'advanced', 'enterprise'],
  },
  {
    id: 'power-solar-charger',
    name: 'Solar Surface Charging Station',
    category: 'power',
    price: 4500000, // $45,000
    description: 'Autonomous surface charging station with solar panels for extended missions.',
    specifications: [
      'Solar array: 2 kW',
      'Battery capacity: 20 kWh',
      'Weather resistant',
      'GPS tracking',
    ],
    compatibleTiers: ['standard', 'advanced', 'enterprise'],
  },

  // Payload & Attachments
  {
    id: 'payload-manipulator-arm',
    name: 'Robotic Manipulator Arm',
    category: 'payload',
    price: 2800000, // $28,000
    description: '6-DOF robotic arm for object manipulation, sample collection, and tool deployment.',
    specifications: [
      '6 degrees of freedom',
      'Payload: 5 kg',
      'Reach: 1.2 m',
      'Force: 200 N',
    ],
    compatibleTiers: ['advanced', 'enterprise'],
  },
  {
    id: 'payload-sampling-basket',
    name: 'Sample Collection Basket',
    category: 'payload',
    price: 450000, // $4,500
    description: 'Modular sample collection system with multiple chambers for biological and geological samples.',
    specifications: [
      '8 sample chambers',
      'Capacity: 2L per chamber',
      'Watertight seals',
      'Easy retrieval',
    ],
    compatibleTiers: ['standard', 'advanced', 'enterprise'],
  },
  {
    id: 'payload-tool-deployment',
    name: 'Tool Deployment System',
    category: 'payload',
    price: 1800000, // $18,000
    description: 'Modular tool deployment system for attaching custom tools and instruments.',
    specifications: [
      'Quick-release mechanism',
      'Tool capacity: 10 kg',
      'Multiple tool slots',
      'Standardized interface',
    ],
    compatibleTiers: ['advanced', 'enterprise'],
  },

  // Peripherals
  {
    id: 'peripheral-docking-station',
    name: 'Autonomous Docking Station',
    category: 'peripheral',
    price: 8500000, // $85,000
    description: 'Underwater docking station for autonomous recharging, data transfer, and maintenance.',
    specifications: [
      'Autonomous docking',
      'Wireless charging',
      'Data transfer: 1 Gbps',
      'Depth rating: 1000m',
    ],
    compatibleTiers: ['advanced', 'enterprise'],
  },
  {
    id: 'peripheral-launch-recovery',
    name: 'Launch & Recovery System',
    category: 'peripheral',
    price: 12000000, // $120,000
    description: 'Automated launch and recovery system for safe deployment from vessels.',
    specifications: [
      'Automated deployment',
      'Works in sea state 4',
      'Handles up to 200 kg',
      'GPS positioning',
    ],
    compatibleTiers: ['standard', 'advanced', 'enterprise'],
  },
  {
    id: 'peripheral-mission-control',
    name: 'Mission Control Software Suite',
    category: 'peripheral',
    price: 2500000, // $25,000
    description: 'Advanced mission planning and control software with swarm coordination capabilities.',
    specifications: [
      'Mission planning tools',
      'Real-time monitoring',
      'Swarm coordination',
      'Data analysis suite',
    ],
    compatibleTiers: ['standard', 'advanced', 'enterprise'],
  },
]

/**
 * Get accessories by category
 */
export function getAccessoriesByCategory(category: ScoutAccessory['category']): ScoutAccessory[] {
  return SCOUT_ACCESSORIES.filter((acc) => acc.category === category)
}

/**
 * Get add-on accessories (not replacements)
 */
export function getAddOnAccessories(): ScoutAccessory[] {
  return SCOUT_ACCESSORIES.filter((acc) => !acc.isReplacement)
}

/**
 * Get replacement accessories (replace default equipment)
 */
export function getReplacementAccessories(): ScoutAccessory[] {
  return SCOUT_ACCESSORIES.filter((acc) => acc.isReplacement === true)
}

/**
 * Get upgrade accessories (upgrades, not just replacements)
 */
export function getUpgradeAccessories(): ScoutAccessory[] {
  return SCOUT_ACCESSORIES.filter((acc) => acc.isReplacement === true && acc.isUpgrade === true)
}

/**
 * Get standard replacement accessories (not upgrades)
 */
export function getStandardReplacementAccessories(): ScoutAccessory[] {
  return SCOUT_ACCESSORIES.filter((acc) => acc.isReplacement === true && acc.isUpgrade !== true)
}

/**
 * Get accessories compatible with a Scout tier
 */
export function getAccessoriesForTier(tierId: string): ScoutAccessory[] {
  return SCOUT_ACCESSORIES.filter((acc) => acc.compatibleTiers.includes(tierId))
}

/**
 * Get accessory by ID
 */
export function getAccessory(id: string): ScoutAccessory | undefined {
  return SCOUT_ACCESSORIES.find((acc) => acc.id === id)
}

/**
 * Get all accessories
 */
export function getAllAccessories(): ScoutAccessory[] {
  return SCOUT_ACCESSORIES
}








