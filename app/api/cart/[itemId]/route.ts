import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth-helpers'
import { createClient } from '@/lib/supabase/server'

/**
 * PATCH /api/cart/[itemId]
 * Update cart item quantity
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ itemId: string }> }
) {
  try {
    const user = await requireAuth()
    const { itemId } = await params
    const body = await request.json()
    const { quantity } = body

    if (quantity === undefined || quantity < 0) {
      return NextResponse.json(
        { error: 'Valid quantity is required' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Get user's cart
    const { data: cart } = await supabase
      .from('carts')
      .select('id')
      .eq('user_id', user.id)
      .single()

    if (!cart) {
      return NextResponse.json(
        { error: 'Cart not found' },
        { status: 404 }
      )
    }

    // Get cart item
    const { data: cartItem } = await supabase
      .from('cart_items')
      .select('*')
      .eq('id', itemId)
      .eq('cart_id', cart.id)
      .single()

    if (!cartItem) {
      return NextResponse.json(
        { error: 'Cart item not found' },
        { status: 404 }
      )
    }

    if (quantity === 0) {
      // Remove item
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', cartItem.id)

      if (error) {
        throw error
      }

      return NextResponse.json({ message: 'Item removed from cart' })
    }

    // Update quantity
    const { data: updatedItem, error } = await supabase
      .from('cart_items')
      .update({ quantity })
      .eq('id', cartItem.id)
      .select()
      .single()

    if (error) {
      throw error
    }

    return NextResponse.json(updatedItem)
  } catch (error) {
    console.error('Update cart item error:', error)
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to update cart item', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/cart/[itemId]
 * Remove item from cart
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ itemId: string }> }
) {
  try {
    const user = await requireAuth()
    const { itemId } = await params

    const supabase = await createClient()

    // Get user's cart
    const { data: cart } = await supabase
      .from('carts')
      .select('id')
      .eq('user_id', user.id)
      .single()

    if (!cart) {
      return NextResponse.json(
        { error: 'Cart not found' },
        { status: 404 }
      )
    }

    // Verify item belongs to user's cart
    const { data: cartItem } = await supabase
      .from('cart_items')
      .select('*')
      .eq('id', itemId)
      .eq('cart_id', cart.id)
      .single()

    if (!cartItem) {
      return NextResponse.json(
        { error: 'Cart item not found' },
        { status: 404 }
      )
    }

    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('id', cartItem.id)

    if (error) {
      throw error
    }

    return NextResponse.json({ message: 'Item removed from cart' })
  } catch (error) {
    console.error('Remove cart item error:', error)
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to remove cart item', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
