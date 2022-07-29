import { Product } from '../../types/categories.types'

export type CartItem = Product & { quantity: number }

export type CartState = {
    isCartOpen: boolean
    cartItems: CartItem[]
}
