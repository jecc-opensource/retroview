import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'Redux',
  question: 'Do you know what you are doing?',
  answer: 'I have no idea how to use this tech',
  confidence: 1
}

export const skillSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    
  }
})

export const {} = skillSlice.actions
export default skillSlice.reducer