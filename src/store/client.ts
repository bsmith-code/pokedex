import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

import { IRootState } from 'types'

interface IAppState {
  notifications: Record<string, string>
}
const initialState: IAppState = {
  notifications: {}
}

const reducers = {
  createNotification: (
    state: IAppState,
    { payload }: PayloadAction<string>
  ) => {
    state.notifications = {
      [uniqid()]: payload ?? ''
    }
  },
  removeNotification: (
    state: IAppState,
    { payload }: PayloadAction<string>
  ) => {
    delete state.notifications[payload]
  }
}

const appSlice = createSlice({
  name: 'app',
  reducers,
  initialState
})

export const {
  reducer: appReducer,
  actions: { createNotification, removeNotification }
} = appSlice

export const selectNotifications = (state: IRootState) =>
  state?.app?.notifications ?? []
