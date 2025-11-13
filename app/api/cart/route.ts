import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth-helpers'
import { createClient } from '@/lib/supabase/server'

/**
 * GET /api/cart
 * Get user's cart
 */
export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth()
    const supabase = await createClient()

    // Get or create cart
    let { data: cart, error: cartError } = await supabase
      .from('carts')
      .select(`
        *,
        cart_items (*)
      `)
      .eq('user_id', user.id)
      .single()

    if (cartError && cartError.code === 'PGRST116') {
      // Cart doesn't exist, create it
      const { data: newCart, error: createError } = await supabase
        .from('carts')
        .insert({ user_id: user.id })
        .select(`
          *,
          cart_items (*)
        `)
        .single()

      if (createError) {
        throw createError
      }

      return NextResponse.json(newCart)
    }

    if (cartError) {
      throw cartError
    }

    return NextResponse.json(cart)
  } catch (error) {
    console.error('Get cart error:', error)
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to get cart', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/cart
 * Add item to cart
 */
export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth()
    const body = await request.json()
    const { itemType, itemId, itemName, price, quantity = 1, metadata } = body

    if (!itemType || !itemId || !itemName || price === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: itemType, itemId, itemName, price' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Get or create cart
    let { data: cart, error: cartError } = await supabase
      .from('carts')
      .select('id')
      .eq('user_id', user.id)
      .single()

    if (cartError && cartError.code === 'PGRST116') {
      // Create cart
      const { data: newCart, error: createError } = await supabase
        .from('carts')
        .insert({ user_id: user.id })
        .select('id')
        .single()

      if (createError) {
        throw createError
      }
      cart = newCart
    } else if (cartError) {
      throw cartError
    }

    // Check if item already exists in cart
    const { data: existingItem } = await supabase
      .from('cart_items')
      .select('*')
      .eq('cart_id', cart.id)
      .eq('item_id', itemId)
      .eq('item_type', itemType)
      .single()

    if (existingItem) {
      // Update quantity
      const { data: updatedItem, error: updateError } = await supabase
        .from('cart_items')
        .update({
          quantity: existingItem.quantity + quantity,
        })
        .eq('id', existingItem.id)
        .select()
        .single()

      if (updateError) {
        throw updateError
      }

      return NextResponse.json(updatedItem)
    }

    // Create new cart item
    const { data: cartItem, error: insertError } = await supabase
      .from('cart_items')
      .insert({
        cart_id: cart.id,
        item_type: itemType,
        item_id: itemId,
        item_name: itemName,
        price,
        quantity,
        metadata: metadata || null,
      })
      .select()
      .single()

    if (insertError) {
      throw insertError
    }

    return NextResponse.json(cartItem, { status: 201 })
  } catch (error) {
    console.error('Add to cart error:', error)
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to add item to cart', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/cart
 * Clear entire cart
 */
export async function DELETE(request: NextRequest) {
  try {
    const user = await requireAuth()
    const supabase = await createClient()

    const { data: cart } = await supabase
      .from('carts')
      .select('id')
      .eq('user_id', user.id)
      .single()

    if (cart) {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('cart_id', cart.id)

      if (error) {
        throw error
      }
    }

    return NextResponse.json({ message: 'Cart cleared' })
  } catch (error) {
    console.error('Clear cart error:', error)
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to clear cart', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
