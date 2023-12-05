import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { appReducer } from 'store/client'
import { listenerMiddleware } from 'store/middleware'
import { middleware, reducer, reducerPath } from 'store/server'

export const combinedReducers = combineReducers({
  app: appReducer,
  [reducerPath]: reducer
})

const store = configureStore({
  reducer: combinedReducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      .concat(middleware)
})

// eslint-disable-next-line @typescript-eslint/unbound-method
export const { dispatch, getState } = store
export default store
