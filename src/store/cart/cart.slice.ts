import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types/categories.types'
import { CartState } from './cart.types'

const initialState: CartState = {
    isCartOpen: false,
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: ({ cartItems }, { payload }: PayloadAction<Product>) => {
            const cartItem = cartItems.find(({ id }) => id === payload.id)

            if (cartItem) {
                cartItem.quantity++
            } else {
                cartItems.push({ ...payload, quantity: 1 })
            }
        },
        removeItemFromCart: (
            state,
            { payload: itemId }: PayloadAction<number>
        ) => {
            const cartItem = state.cartItems.find(({ id }) => id === itemId)
            if (cartItem) {
                if (cartItem.quantity === 1) {
                    state.cartItems = state.cartItems.filter(
                        ({ id }) => id !== itemId
                    )
                } else {
                    cartItem.quantity--
                }
            }
        },
        clearCartItem: (state, { payload: itemId }: PayloadAction<number>) => {
            state.cartItems = state.cartItems.filter(({ id }) => id !== itemId)
        },
        setIsCartOpen: (state, { payload }: PayloadAction<boolean>) => {
            state.isCartOpen = payload
        }
    }
})

export default cartSlice.reducer
export const {
    addItemToCart,
    removeItemFromCart,
    clearCartItem,
    setIsCartOpen
} = cartSlice.actions
