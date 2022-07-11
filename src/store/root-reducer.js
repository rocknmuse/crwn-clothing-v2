import { combineReducers } from 'redux'

import { cartReducer } from './cart/cart.reducer'
import userReducer from './user-slice'
import categoriesReducer from './categories-slice'

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
})
