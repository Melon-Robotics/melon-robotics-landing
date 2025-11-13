"use client"

import { CheckoutButton } from './checkout-button'
import { Button } from '@/components/ui/button'

interface SubscribeButtonProps {
  serviceId: string
  tierName: string
  tierPrice: string
  customerEmail?: string
  className?: string
  variant?: 'default' | 'outline' | 'ghost'
  isRecommended?: boolean
  isEnterprise?: boolean
}

export function SubscribeButton({
  serviceId,
  tierName,
  tierPrice,
  customerEmail,
  className,
  variant = 'outline',
  isRecommended = false,
  isEnterprise = false,
}: SubscribeButtonProps) {
  if (isEnterprise || tierPrice === 'Custom' || tierPrice.includes('Custom')) {
    return (
      <Button
        onClick={() => window.location.href = '/contact'}
        className={className}
        variant={variant}
      >
        Contact Sales
      </Button>
    )
  }

  return (
    <CheckoutButton
      type="subscription"
      id={serviceId}
      tier={tierName}
      customerEmail={customerEmail}
      className={className}
      variant={isRecommended ? 'default' : variant}
    >
      {isRecommended ? 'Subscribe Now' : 'Subscribe'}
    </CheckoutButton>
  )
}


