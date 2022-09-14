import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jobTitle: 'Software Engineer',
  company: 'Initech',
  techStack: ['Node', 'React', 'Redux', 'SQL'],
  resumeVersion: 'A',
  interest: 1,
  questions:{
    A: 'Do you know what you are doing?',
    B: 'Can you even write a for loop?'
  },
  notes: 'I think I totally bombed that one'
}

export const interviewSlice = createSlice({
  name: 'interview',
  initialState,
  reducers: {

  }
})


export const {} = interviewSlice.actions
export default interviewSlice.reducer