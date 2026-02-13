/**
 * Product and Service Payment Configuration
 * 
 * This file maps products and services to their payment configurations.
 * Update prices, subscription intervals, and metadata here.
 */

import type { PaymentItem } from './types'
import { products } from '@/lib/data/products'
import { services } from '@/lib/data/services'

export interface ProductPaymentConfig {
  productId: string
  name: string
  type: 'one-time' | 'subscription'
  price: number // in cents
  description?: string
  metadata?: Record<string, string>
}

export interface ServicePaymentConfig {
  serviceId: string
  name: string
  type: 'one-time' | 'subscription'
  price?: number // in cents, undefined for custom pricing
  description?: string
  metadata?: Record<string, string>
}

// Product Payment Configurations
export const PRODUCT_PAYMENTS: Record<string, ProductPaymentConfig> = {
  blackbox: {
    productId: 'blackbox',
    name: 'BlackBox - Intelligent Communication Platform',
    type: 'one-time',
    price: 0, // Free app, but could be a paid license
    description: 'Advanced speech-to-text software for maritime and subsea operations',
    metadata: {
      category: 'software',
    },
  },
  pneumaforce: {
    productId: 'pneumaforce',
    name: 'PneumaForce Exoskeleton',
    type: 'one-time',
    price: 1800000, // $18,000
    description: 'Revolutionary Upper-Body Exoskeleton for Commercial Diving',
    metadata: {
      category: 'hardware',
    },
  },
  scout: {
    productId: 'scout',
    name: 'Melon Scout AUV',
    type: 'one-time',
    price: 0, // Tiered pricing - use Scout pricing tiers instead
    description: 'Autonomous Underwater Vehicle with Swarm Intelligence',
    metadata: {
      category: 'robotics',
      hasTiers: 'true',
      hasVolumeDiscounts: 'true',
    },
  },
}

// Service Payment Configurations
export const SERVICE_PAYMENTS: Record<string, ServicePaymentConfig> = {
  'rov-inspection': {
    serviceId: 'rov-inspection',
    name: 'ROV Inspection & Survey',
    type: 'subscription',
    description: 'Professional-grade remotely operated vehicle inspection services',
    metadata: {
      category: 'inspection',
    },
  },
  'photogrammetry': {
    serviceId: 'photogrammetry',
    name: '3D Photogrammetry',
    type: 'one-time',
    price: 0, // Custom pricing based on project scope
    description: 'Millimeter-Accurate Underwater 3D Mapping',
    metadata: {
      category: 'inspection',
      requiresQuote: 'true',
    },
  },
  'ocean-data': {
    serviceId: 'ocean-data',
    name: 'Ocean Data Services',
    type: 'subscription',
    description: 'Comprehensive Maritime Environmental Intelligence',
    metadata: {
      category: 'data',
    },
  },
  'safety-standards': {
    serviceId: 'safety-standards',
    name: 'Human-Ocean Interface Standards',
    type: 'one-time',
    price: 0, // Custom pricing
    description: 'Safety Protocols and Technical Documentation',
    metadata: {
      category: 'safety',
      requiresQuote: 'true',
    },
  },
}

// ROV Inspection Subscription Tiers
export const ROV_SUBSCRIPTION_TIERS = {
  bronze: {
    tierId: 'rov-bronze',
    name: 'Bronze',
    price: 240000, // $2,400 in cents
    interval: 'year' as const,
    description: 'Bronze Subscription Package',
    metadata: {
      serviceId: 'rov-inspection',
      tier: 'bronze',
    },
  },
  silver: {
    tierId: 'rov-silver',
    name: 'Silver',
    price: 480000, // $4,800 in cents
    interval: 'year' as const,
    description: 'Silver Subscription Package',
    metadata: {
      serviceId: 'rov-inspection',
      tier: 'silver',
    },
  },
  gold: {
    tierId: 'rov-gold',
    name: 'Gold',
    price: 900000, // $9,000 in cents
    interval: 'year' as const,
    description: 'Gold Subscription Package',
    metadata: {
      serviceId: 'rov-inspection',
      tier: 'gold',
    },
  },
  enterprise: {
    tierId: 'rov-enterprise',
    name: 'Enterprise / Municipal',
    price: 0, // Custom pricing
    interval: 'year' as const,
    description: 'Enterprise Subscription Package',
    metadata: {
      serviceId: 'rov-inspection',
      tier: 'enterprise',
      requiresQuote: 'true',
    },
  },
}

/**
 * Get payment configuration for a product
 */
export function getProductPaymentConfig(productId: string): ProductPaymentConfig | undefined {
  return PRODUCT_PAYMENTS[productId]
}

/**
 * Get payment configuration for a service
 */
export function getServicePaymentConfig(serviceId: string): ServicePaymentConfig | undefined {
  return SERVICE_PAYMENTS[serviceId]
}

/**
 * Get ROV subscription tier configuration
 */
export function getROVSubscriptionTier(tierName: string) {
  const tierKey = tierName.toLowerCase().replace(/\s+/g, '-').replace(/\/.*$/, '')
  return ROV_SUBSCRIPTION_TIERS[tierKey as keyof typeof ROV_SUBSCRIPTION_TIERS]
}

/**
 * Convert relative image path to absolute URL for Stripe
 * Stripe requires absolute URLs for product images
 */
function getAbsoluteImageUrl(imagePath: string): string {
  if (!imagePath) return ''
  
  // If already an absolute URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  
  // Convert relative path to absolute URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  // Remove leading slash if present to avoid double slashes
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
  return `${baseUrl}${cleanPath}`
}

/**
 * Get product details with image and enhanced description
 */
export function getProductDetailsForCheckout(productId: string): {
  image?: string
  enhancedDescription?: string
} {
  const product = products.find(p => p.id === productId)
  if (!product) {
    return {}
  }
  
  const image = product.heroImage ? getAbsoluteImageUrl(product.heroImage) : undefined
  
  // Create enhanced description combining tagline and description
  const enhancedDescription = product.tagline 
    ? `${product.tagline}. ${product.description}`
    : product.description
  
  return {
    image,
    enhancedDescription,
  }
}

/**
 * Get service details with enhanced description
 */
export function getServiceDetailsForCheckout(serviceId: string): {
  enhancedDescription?: string
} {
  const service = services.find(s => s.id === serviceId)
  if (!service) {
    return {}
  }
  
  // Create enhanced description combining tagline and description
  const enhancedDescription = service.tagline 
    ? `${service.tagline}. ${service.description}`
    : service.description
  
  return {
    enhancedDescription,
  }
}

/**
 * Convert product/service to payment items with enhanced details
 */
export function createPaymentItems(
  items: Array<{
    id: string
    name: string
    amount: number
    quantity?: number
    description?: string
    metadata?: Record<string, string>
    images?: string[]
  }>
): PaymentItem[] {
  return items.map((item) => {
    let enhancedDetails: { image?: string; enhancedDescription?: string } = {}
    
    // Try to enhance with product details if it's a product
    if (item.metadata?.type === 'product') {
      enhancedDetails = getProductDetailsForCheckout(item.metadata.productId || item.id)
    }
    // Try to enhance with service details if it's a service or subscription
    else if (item.metadata?.type === 'service' || item.metadata?.type === 'subscription') {
      const serviceId = item.metadata.serviceId
      if (serviceId) {
        enhancedDetails = getServiceDetailsForCheckout(serviceId)
        // For subscriptions, combine service description with subscription tier info
        if (item.metadata.type === 'subscription' && enhancedDetails.enhancedDescription) {
          enhancedDetails.enhancedDescription = `${item.description || item.name}. ${enhancedDetails.enhancedDescription}`
        }
      }
    }
    
    return {
      id: item.id,
      name: item.name,
      amount: item.amount,
      quantity: item.quantity || 1,
      // Use enhanced description if available, otherwise use provided description
      description: enhancedDetails.enhancedDescription || item.description,
      metadata: item.metadata,
      // Use provided images or product image if available
      images: item.images || (enhancedDetails.image ? [enhancedDetails.image] : undefined),
    }
  })
}


