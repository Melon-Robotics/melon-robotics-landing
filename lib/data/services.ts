export interface ServiceCapability {
  title: string
  description: string
  icon: string
}

export interface ROVService {
  name: string
  description: string
  deliverables: string[]
  equipment: string[]
}

export interface SubscriptionTier {
  name: string
  price: string
  includedServices: string[]
  deliverablesPerYear: string[]
  equipment: string[]
}

export interface Service {
  id: string
  name: string
  tagline: string
  description: string
  category: 'inspection' | 'data' | 'safety' | 'infrastructure'
  capabilities: ServiceCapability[]
  useCases: string[]
  industries: string[]
  deliverables: string[]
  rovServices?: ROVService[]
  subscriptionTiers?: SubscriptionTier[]
  // Services page specific fields
  valueProposition: string // One-sentence value prop
  supportingParagraph: string // 2-3 line supporting text
  keySpecs: Array<{ label: string; value: string }> // 3-4 key specifications for services page
  servicesPageCta: {
    primary: string
    primaryHref: string
    secondary?: string
    secondaryHref?: string
  }
}

export const services: Service[] = [
  {
    id: 'rov-inspection',
    name: 'ROV Inspection & Survey',
    tagline: 'Precision Subsea Inspection and Data Collection',
    description: 'Professional-grade remotely operated vehicle inspection services for infrastructure assessment, maintenance, and exploration missions. Real-time HD video, sonar mapping, and sensor data collection.',
    category: 'inspection',
    valueProposition: 'Professional ROV inspection services using Scout technology for infrastructure assessment, maintenance, and emergency response operations.',
    supportingParagraph: 'Deploy Scout AUV systems for subsea inspection missions requiring HD video documentation, structural assessment, and environmental monitoring. Services include hull inspections, dock surveys, pipeline assessments, and emergency recovery operations. Available as one-time engagements or annual subscription tiers.',
    keySpecs: [
      { label: 'Primary Use Case', value: 'Infrastructure inspection and maintenance assessment' },
      { label: 'Equipment', value: 'Scout AUV with HD cameras, sonar, sensors' },
      { label: 'Deliverables', value: 'HD video, annotated reports, structural condition ratings' },
      { label: 'Target Operator', value: 'Marine vessel operators, port authorities, engineering firms' }
    ],
    servicesPageCta: {
      primary: 'View Service Details',
      primaryHref: '/services/rov-inspection',
      secondary: 'View Pricing',
      secondaryHref: '/services/rov-inspection'
    },
    capabilities: [
      {
        title: 'HD Video Documentation',
        description: '4K underwater videography and photography with lighting systems optimized for deep-sea conditions.',
        icon: 'Video',
      },
      {
        title: '3D Photogrammetry',
        description: 'High-resolution 3D modeling of underwater structures and terrain for precision mapping and analysis.',
        icon: 'Cube',
      },
      {
        title: 'Structural Assessment',
        description: 'Ultrasonic testing, thickness gauging, and defect detection for infrastructure integrity analysis.',
        icon: 'Scan',
      },
      {
        title: 'Environmental Survey',
        description: 'Current profiling, turbidity measurement, and sediment analysis for comprehensive environmental assessment.',
        icon: 'Waves',
      },
    ],
    useCases: [
      'Hull inspection and maintenance',
      'Dock and piling surveys',
      'Pipeline and cable inspection',
      'Environmental monitoring',
      'Emergency recovery operations',
      'Pre-dive safety assessments',
      'Bridge footing inspections',
      'AI-driven predictive maintenance',
    ],
    industries: [
      'Marine Vessel Operators',
      'Port Authorities',
      'DOT & Engineering Firms',
      'Insurance & Marine Survey',
      'Municipalities',
      'Marine Construction',
    ],
    deliverables: [
      'HD Video & Photo Documentation',
      'Annotated Inspection Reports',
      'Structural Condition Ratings',
      'AI Predictive Analytics',
      'Geo-referenced Data',
      'Emergency Response Reports',
    ],
    rovServices: [
      {
        name: 'Hull Inspection',
        description: 'Detailed visual survey of vessel hulls for corrosion, fouling, cracks, or damage.',
        deliverables: [
          'HD 4K video footage',
          'Annotated photo set',
          'Summary inspection report',
          'Depth & GPS overlay (if available)',
        ],
        equipment: [
          'LBV-150 ROV with HD camera',
          'Laser scaler',
          'Floodlights',
          'GPS overlay module',
          'Topside control station',
        ],
      },
      {
        name: 'Dock & Piling Survey',
        description: 'Inspections of marina structures, docks, and pilings for marine growth, structural wear, or scouring.',
        deliverables: [
          'Photo/video documentation',
          'Structural condition rating',
          'Recommendations for maintenance',
        ],
        equipment: [
          'LBV-150 ROV',
          'Lighting array',
          'Altimeter',
          'Imaging sonar (optional)',
          'Measuring stick tool',
        ],
      },
      {
        name: 'Pipeline & Cable Inspection',
        description: 'Linear survey of submerged utility lines to detect exposure, movement, or damage.',
        deliverables: [
          'Geo-referenced video',
          'Path deviation log',
          'Anomaly report with still frames',
        ],
        equipment: [
          'LBV-150 ROV',
          'DVL (Doppler Velocity Log)',
          'GPS transponder',
          'HD camera',
          'Side-scan sonar (optional)',
        ],
      },
      {
        name: 'Environmental Monitoring',
        description: 'Data collection for water clarity, temperature, sedimentation, and marine growth.',
        deliverables: [
          'Sensor data (temp, turbidity)',
          'HD site imagery',
          'Environmental summary report',
        ],
        equipment: [
          'LBV-150 ROV with sensor payload',
          'Temp, turbidity, pH sensors',
          'Environmental sampling attachment',
        ],
      },
      {
        name: 'Emergency Recovery / Search',
        description: 'Rapid deployment for lost objects, sunken assets, or accident scenes.',
        deliverables: [
          'Real-time feed for client',
          'Recovery report',
          'Object imagery or video',
        ],
        equipment: [
          'LBV-150 ROV',
          'Grabber arm attachment',
          'HD camera',
          'High-intensity lights',
        ],
      },
      {
        name: 'Pre-Dive Safety Survey',
        description: 'Quick situational assessment before human dive operations.',
        deliverables: [
          'Live visual confirmation',
          'Safety condition checklist',
        ],
        equipment: [
          'LBV-150 ROV',
          'Topside video link',
          'Floodlights',
        ],
      },
      {
        name: 'Structure & Bridge Footing Inspection',
        description: 'High-precision imaging of submerged bridge structures for DOT or engineering firms.',
        deliverables: [
          'HD imagery and 3D model (if equipped)',
          'Structural condition grading report',
        ],
        equipment: [
          'LBV-150 ROV',
          'Laser scaler',
          '3D photogrammetry kit',
          'Altimeter',
          'Sonar (optional)',
        ],
      },
      {
        name: 'AI Predictive Maintenance Analysis',
        description: 'Data-driven corrosion detection and predictive model for recurring clients.',
        deliverables: [
          'AI-driven condition score',
          'Predictive maintenance report',
          'Change-over-time graph',
        ],
        equipment: [
          'LBV-150 ROV',
          'HD camera',
          'Edge-compute AI node',
          'Melon cloud analytics platform',
        ],
      },
    ],
    subscriptionTiers: [
      {
        name: 'Bronze',
        price: '$2,400/yr',
        includedServices: [
          'Hull Inspection (x2)',
          'Dock & Piling Survey (x1)',
          '1 Emergency Callout',
        ],
        deliverablesPerYear: [
          '3 HD video reports',
          '1 emergency response report',
          'Annual condition summary',
        ],
        equipment: [
          'LBV-150 ROV',
          'HD camera',
          'Floodlights',
          'Laser scaler',
        ],
      },
      {
        name: 'Silver',
        price: '$4,800/yr',
        includedServices: [
          'Hull Inspection (x4)',
          'Dock & Piling Survey (x2)',
          'Environmental Monitoring (x2)',
          '2 Emergency Callouts',
        ],
        deliverablesPerYear: [
          '8 full video reports',
          '2 emergency reports',
          'Annual analytics dashboard',
        ],
        equipment: [
          'LBV-150 ROV',
          'DVL',
          'Sensor payload',
          'HD camera',
          'Laser scaler',
        ],
      },
      {
        name: 'Gold',
        price: '$9,000/yr',
        includedServices: [
          'Hull Inspection (x4)',
          'Dock & Piling Survey (x2)',
          'Pipeline & Cable Inspection (x1)',
          'Structure/Bridge Inspection (x1)',
          'AI Predictive Maintenance Analysis',
          '4 Emergency Callouts',
        ],
        deliverablesPerYear: [
          '10+ video reports',
          '4 emergency dispatches',
          'Predictive maintenance trend analysis',
          'Client dashboard access',
        ],
        equipment: [
          'LBV-150 ROV with full payload kit',
          'DVL, sonar, sensors',
          'Laser scaler',
          'Grabber arm',
          'Onboard compute node',
        ],
      },
      {
        name: 'Enterprise / Municipal',
        price: 'Custom',
        includedServices: [
          'Tailored packages for ports, municipalities, or industrial clients',
        ],
        deliverablesPerYear: [
          'Custom inspection schedule',
          'AI maintenance tracking',
          'Cloud portal access',
        ],
        equipment: [
          'Multiple LBV-150 units',
          'AI node',
          'Sonar package',
          'Mobile base station',
        ],
      },
    ],
  },
  {
    id: 'photogrammetry',
    name: '3D Photogrammetry',
    tagline: 'Millimeter-Accurate Underwater 3D Mapping',
    description: 'Professional photogrammetric survey services producing centimeter-accurate 3D models of underwater structures, terrain, and objects. Advanced processing and analysis workflows.',
    category: 'inspection',
    valueProposition: 'Centimeter-accurate 3D photogrammetric modeling of underwater structures and terrain for engineering analysis and documentation.',
    supportingParagraph: 'High-resolution 3D reconstruction from thousands of precisely positioned images. Produces photorealistic models with measurement capabilities, volume analysis, and change detection over time. Export formats compatible with CAD and engineering software.',
    keySpecs: [
      { label: 'Primary Use Case', value: '3D documentation and measurement of underwater structures' },
      { label: 'Accuracy', value: 'Centimeter-level precision for dimensional analysis' },
      { label: 'Deliverables', value: '3D models, point clouds, orthomosaics, measurement reports' },
      { label: 'Target Operator', value: 'Marine engineering, archaeology, construction, insurance survey' }
    ],
    servicesPageCta: {
      primary: 'View Service Details',
      primaryHref: '/services/photogrammetry',
      secondary: 'Request Quote',
      secondaryHref: '/contact'
    },
    capabilities: [
      {
        title: 'Multi-View Reconstruction',
        description: 'Thousands of precisely positioned images stitched into seamless 3D models with photorealistic textures.',
        icon: 'Camera',
      },
      {
        title: 'Measurements & Volume Analysis',
        description: 'Precise dimensional analysis, volume calculations, and deformation monitoring from 3D data.',
        icon: 'Ruler',
      },
      {
        title: 'Change Detection',
        description: 'Temporal comparison of structures to identify degradation, corrosion, or movement over time.',
        icon: 'Compare',
      },
      {
        title: 'Integration & Export',
        description: 'Export to standard formats (OBJ, PLY, LAS) for CAD integration and engineering analysis.',
        icon: 'Download',
      },
    ],
    useCases: [
      'Wreck documentation and preservation',
      'Structural change monitoring',
      'Volume estimation for dredging',
      'Pre/Post-installation verification',
      'Virtual archaeology',
      'Damage assessment documentation',
    ],
    industries: [
      'Underwater Archaeology',
      'Marine Engineering',
      'Insurance Survey',
      'Environmental Monitoring',
      'Construction & Dredging',
      'Cultural Heritage',
    ],
    deliverables: [
      'High-Resolution 3D Models',
      'Orthomosaic Imagery',
      'Point Cloud Data',
      'Measurement Reports',
      'Interactive 3D Viewers',
      'CAD-Ready Files',
    ],
  },
  {
    id: 'ocean-data',
    name: 'Ocean Data Services',
    tagline: 'Comprehensive Maritime Environmental Intelligence',
    description: 'Real-time and historical oceanographic data services including currents, temperature, salinity, waves, and water quality. API access and custom analytics.',
    category: 'data',
    valueProposition: 'Real-time and historical oceanographic data services with API access for operational planning and environmental intelligence.',
    supportingParagraph: 'Environmental data feeds from sensor networks, buoys, and AUV deployments. Includes real-time monitoring, historical archives, predictive modeling, and RESTful API integration. Supports offshore operations, research, and environmental compliance requirements.',
    keySpecs: [
      { label: 'Primary Use Case', value: 'Environmental intelligence for operational planning and research' },
      { label: 'Data Sources', value: 'Real-time sensors, historical archives, predictive models' },
      { label: 'Access Method', value: 'API integration, dashboards, custom analytics' },
      { label: 'Target Operator', value: 'Maritime operations, research institutions, government agencies' }
    ],
    servicesPageCta: {
      primary: 'View Service Details',
      primaryHref: '/services/ocean-data',
      secondary: 'API Documentation',
      secondaryHref: '/services/ocean-data'
    },
    capabilities: [
      {
        title: 'Real-Time Monitoring',
        description: 'Live data feeds from buoys, AUVs, and sensor networks providing up-to-the-minute environmental conditions.',
        icon: 'Activity',
      },
      {
        title: 'Historical Archives',
        description: 'Decades of historical oceanographic data for trend analysis, forecasting, and research applications.',
        icon: 'Database',
      },
      {
        title: 'Predictive Modeling',
        description: 'AI-powered forecasting models for currents, waves, and environmental conditions with high accuracy.',
        icon: 'Brain',
      },
      {
        title: 'API Integration',
        description: 'RESTful APIs for seamless integration with your systems and applications.',
        icon: 'Code',
      },
    ],
    useCases: [
      'Offshore operation planning',
      'Weather window optimization',
      'Environmental impact assessment',
      'Research data collection',
      'Coastal management',
      'Dredging & construction planning',
    ],
    industries: [
      'Maritime Operations',
      'Offshore Energy',
      'Research Institutions',
      'Government Agencies',
      'Environmental Consulting',
      'Insurance & Risk Assessment',
    ],
    deliverables: [
      'Real-Time Data Feeds',
      'Historical Database Access',
      'Custom Analytics Dashboards',
      'Forecasting Services',
      'API Access',
      'Data Reports & Documentation',
    ],
  },
  {
    id: 'safety-standards',
    name: 'Human-Ocean Interface Standards',
    tagline: 'Safety Protocols and Technical Documentation',
    description: 'Comprehensive safety standards, protocols, and technical documentation for human-ocean interface operations. Research-backed best practices for commercial diving and subsea work.',
    category: 'safety',
    valueProposition: 'Safety standards, protocols, and technical documentation for commercial diving and subsea operations with regulatory compliance guidance.',
    supportingParagraph: 'Research-backed safety procedures and technical documentation for human-ocean interface operations. Includes safety protocols, operating procedures, training materials, and compliance consulting for commercial diving, ROV operations, and subsea construction.',
    keySpecs: [
      { label: 'Primary Use Case', value: 'Safety program development and regulatory compliance' },
      { label: 'Deliverables', value: 'Safety manuals, operating procedures, training materials, compliance reports' },
      { label: 'Scope', value: 'Commercial diving, ROV operations, subsea construction' },
      { label: 'Target Operator', value: 'Commercial diving contractors, government agencies, training organizations' }
    ],
    servicesPageCta: {
      primary: 'View Service Details',
      primaryHref: '/services/safety-standards',
      secondary: 'Request Consultation',
      secondaryHref: '/contact'
    },
    capabilities: [
      {
        title: 'Safety Protocols',
        description: 'Industry-leading safety procedures for commercial diving, ROV operations, and subsea construction.',
        icon: 'Shield',
      },
      {
        title: 'Technical Documentation',
        description: 'Detailed technical manuals and operating procedures for complex subsea equipment and operations.',
        icon: 'FileText',
      },
      {
        title: 'Training Materials',
        description: 'Curriculum development and training resources for certification programs and skill development.',
        icon: 'Graduation',
      },
      {
        title: 'Compliance Consulting',
        description: 'Expert guidance on regulatory compliance for offshore and subsea operations in various jurisdictions.',
        icon: 'Scale',
      },
    ],
    useCases: [
      'Safety program development',
      'Regulatory compliance',
      'Standard operating procedures',
      'Training curriculum design',
      'Equipment certification',
      'Incident investigation protocols',
    ],
    industries: [
      'Commercial Diving',
      'Offshore Construction',
      'Government Agencies',
      'Training Organizations',
      'Insurance Companies',
      'Marine Operators',
    ],
    deliverables: [
      'Safety Manuals',
      'Operating Procedures',
      'Training Materials',
      'Compliance Reports',
      'Technical Documentation',
      'Consultation Services',
    ],
  },
]

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}

export function getServicesByCategory(category: Service['category']): Service[] {
  return services.filter((s) => s.category === category)
}


