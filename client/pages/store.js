import { configureStore } from '@reduxjs/toolkit'
import interviewReducer from './slice_store/interviewSlice'
import skillReducer from './slice_store/skillSlice'

export const store = configureStore({
  reducer: {
    interview: interviewReducer,
    skill: skillReducer
  },
})