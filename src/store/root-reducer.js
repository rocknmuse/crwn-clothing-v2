import { combineReducers } from 'redux'

import userReducer from './user-slice'
import categoriesReducer from './categories-slice'
import cartReducer from './cart-slice'

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
})
