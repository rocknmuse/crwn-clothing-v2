import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../root-reducer'

const selectCartSlice = (state: RootState) => state.cart

export const selectIsCartOpen = createSelector(
    [selectCartSlice],
    (cart) => cart.isCartOpen
)

export const selectCartItems = createSelector(
    [selectCartSlice],
    (cart) => cart.cartItems
)

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
    )
)

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)
