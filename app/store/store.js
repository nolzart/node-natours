import { createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers'

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const makeConfiguredStore = reducer => {
    if (process.env.NODE_ENV !== 'production')
        return createStore(reducer, bindMiddleware([thunkMiddleware, logger]))
    else return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

const makeStore = () => {
    const isServer = typeof window === 'undefined'

    if (isServer) {
        return makeConfiguredStore(rootReducer)
    } else {
        // we need it only on client side
        const { persistStore, persistReducer } = require('redux-persist')
        const storage = require('redux-persist/lib/storage').default

        const persistConfig = {
            key: 'nextjs',
            whitelist: ['tour'], // make sure it does not clash with server keys
            storage,
        }

        const persistedReducer = persistReducer(persistConfig, rootReducer)
        const store = makeConfiguredStore(persistedReducer)

        store.__persistor = persistStore(store) // Nasty hack

        return store
    }
}

export const wrapper = createWrapper(makeStore)
