import { configureStore } from '@reduxjs/toolkit'
import interviewReducer from './slices/interviewSlice'
import skillReducer from './slices/skillSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      interview: interviewReducer,
      skill: skillReducer
    },
  })
}

const store = makeStore();

export default store;