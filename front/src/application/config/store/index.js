import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducers from '../../actions'
import rootSagas from '../../../infrastructure/services/sagas'

const sagaMiddleware = createSagaMiddleware()

const middleware = [
  ...getDefaultMiddleware({
    immutableStateInvariant: false,
    thunk: false,
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
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSagas)

export default store