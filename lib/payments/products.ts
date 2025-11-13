/**
 * Product and Service Payment Configuration
 * 
 * This file maps products and services to their payment configurations.
 * Update prices, subscription intervals, and metadata here.
 */

import type { PaymentItem } from './types'

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
    price: 9500000, // $95,000 - Market-appropriate for commercial diving exoskeleton
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
 * Convert product/service to payment items
 */
export function createPaymentItems(
  items: Array<{
    id: string
    name: string
    amount: number
    quantity?: number
    description?: string
    metadata?: Record<string, string>
  }>
): PaymentItem[] {
  return items.map((item) => ({
    id: item.id,
    name: item.name,
    amount: item.amount,
    quantity: item.quantity || 1,
    description: item.description,
    metadata: item.metadata,
  }))
}


