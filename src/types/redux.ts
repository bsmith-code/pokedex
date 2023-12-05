import { ListenerEffectAPI, TypedStartListening } from '@reduxjs/toolkit'

import { combinedReducers, dispatch } from 'store'

export type TAppDispatch = typeof dispatch
export type IRootState = ReturnType<typeof combinedReducers>

export type TAppStartListening = TypedStartListening<IRootState, TAppDispatch>
export type TAppListenerAPI = ListenerEffectAPI<IRootState, TAppDispatch>
