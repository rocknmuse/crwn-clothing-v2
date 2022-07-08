import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import { rootReducer } from './root-reducer'
import { configureStore } from '@reduxjs/toolkit'

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
    Boolean
)

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false
        }),
        ...middleWares
    ],
    
})

export const persistor = persistStore(store)
