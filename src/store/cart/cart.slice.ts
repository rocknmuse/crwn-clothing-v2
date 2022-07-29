import { createSlice, createSelector } from '@reduxjs/toolkit'
import { CartState } from './cart.types'

const initialState: CartState = {
    isCartOpen: false,
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: ({ cartItems }, { payload }) => {
            const cartItemIdx = cartItems.findIndex(
                (cartItem) => cartItem.id === payload.id
            )

            if (cartItemIdx > -1) {
                cartItems[cartItemIdx].quantity++
            } else {
                cartItems.push({ ...payload, quantity: 1 })
            }
        },
        removeItemFromCart: (state, { payload }) => {
            const cartItem = state.cartItems.find(({ id }) => id === payload.id)
            if (cartItem) {
                if (cartItem.quantity === 1) {
                    state.cartItems = state.cartItems.filter(
                        ({ id }) => id !== payload.id
                    )
                } else {
                    cartItem.quantity--
                }
            }
        },
        clearCartItem: (state, { payload }) => {
            state.cartItems = state.cartItems.filter(
                ({ id }) => id !== payload.id
            )
        },
        setCartItems: (state, { payload }) => {
            state.cartItems = payload
        },
        setIsCartOpen: (state, { payload }) => {
            state.isCartOpen = payload
        }
    }
})

export default cartSlice.reducer
export const {
    addItemToCart,
    removeItemFromCart,
    clearCartItem,
    setCartItems,
    setIsCartOpen
} = cartSlice.actions
