import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
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
            if (cartItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(
                    ({ id }) => id !== payload.id
                )
            } else {
                cartItem.quantity--
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

const selectCartSlice = (state) => state.cart

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
