import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducers from '../../actions'
import rootSagas from '../../../infrastructure/services/sagas'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const sagaMiddleware = createSagaMiddleware()

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false
  }),
  sagaMiddleware,
]

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable global-require */
  const { logger } = require('redux-logger')
  middleware.push(logger)
}

const store = configureStore({
  middleware,
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

let persistor = persistStore(store)

sagaMiddleware.run(rootSagas)

export { store, persistor }