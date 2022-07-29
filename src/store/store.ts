import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import { rootReducer } from './root-reducer'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        let middleware = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        })

        return process.env.NODE_ENV === 'development' ? middleware.concat(logger) : middleware
    },
    devTools: process.env.NODE_ENV === 'development'
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
