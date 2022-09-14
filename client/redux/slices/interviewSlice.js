import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  newInterview: {
    job_title: 'Software Engineer',
    company: 'Initech',
    tech_stack: ['Node', 'React', 'Redux', 'SQL'],
    resume_version: 'A',
    interest_level: 1,
    questions:['Do you know what you are doing?'],
    notes: 'I think I totally bombed that one'
  },
  interviewList: [
    {
      id: 1,
      interview_date: new Date().toLocaleString(),
      job_title: 'Sr. Frontend Engineer',
      company: 'Spotify',
      tech_stack: [
        'React',
        'Redux',
      ],
      resume_version: 'my-resume-220903.pdf',
      interest_level: 3,
      questions: [
        "Tell me about how you've used React",
        'Why do you prefer Redux to Recoil?',
      ],
      notes: 'Doggo ipsum pats very hand that feed shibe pupperino dat tungg tho, pats. He made many woofs fat boi puggo long woofer woofer shibe, most angery pupper I have ever seen maximum borkdrive very taste wow. Dat tungg tho doing me a frighten length boy many pats very hand that feed shibe pupperino heckin, floofs borking doggo pupper porgo.',
    },
    {
      id: 2,
      interview_date: new Date().toLocaleString(),
      job_title: 'Backend Engineer II',
      company: 'Microsoft',
      tech_stack: [
        'C#',
        'Visual Basic',
      ],
      resume_version: 'my-resume-220903-ms.pdf',
      interest_level: 1,
      questions: [
        'Why do you want to work here?',
        'What is one architectural difference between Windows and Mac?',
        'What is a Macro?',
      ],
      notes: 'Very good spot I am bekom fat most angery pupper I have ever seen long bois big ol very taste wow borking doggo, what a nice floof wow very biscit puggorino bork the neighborhood pupper. Bork very taste wow super chub stop it fren fat boi, very taste wow tungg snoot smol floofs, extremely cuuuuuute such treat wrinkler. Very hand that feed shibe long bois pupper very jealous pupper long woofer, shibe snoot floofs. corgo. Adorable doggo extremely cuuuuuute porgo shoober long doggo, pupperino big ol pupper doggo. pupper shooberino heckin good boys. Heck long doggo puggorino wow such tempt boofers thicc, the neighborhood pupper sub woofer very taste wow shoob.',
    },
    {
      id: 3,
      interview_date: new Date().toLocaleString(),
      job_title: 'Database Architect',
      company: 'dbdiagram.io',
      tech_stack: [
        'DBML',
        'Node.js',
        'SQL',
      ],
      resume_version: 'my-resume-220822.pdf',
      interest_level: 2,
      questions: [
        'What is normalization?',
        'Is SQLite even a real database?',
      ],
      notes: 'Dat tungg tho such treat he made many woofs pupperino pats, shoob shooberino much ruin diet. borkf wow very biscit. Floofs wow such tempt corgo boof pats fat boi, heckin boofers noodle horse. clouds doing me a frighten ruff. Such treat blep fluffer big ol pupper maximum borkdrive many pats blep, shoob he made many woofs tungg long woofer stop it fren, shoober doggorino borking doggo most angery pupper I have ever seen doggorino. Blep porgo heckin waggy wags ruff, most angery pupper I have ever seen wow such tempt most angery pupper I have ever seen.',
    }
  ]
}

export const interviewSlice = createSlice({
  name: 'interview',
  initialState,
  reducers: {
    //update job title from user entry
    updateTitle: (state, action) => {
      state.newInterview.job_title = action.payload;
    },
    //update company from user entry
    updateCompany: (state, action) => {
      state.newInterview.company = action.payload;
    },
    //add new tech into array
    addTech: (state, action) => {
      state.newInterview.techStack.push(action.payload)
    },
    //update verion from user entry
    resumeVersion: (state, action) => {
      state.newInterview.resume_version = action.payload;
    },
     //update interest level from user entry
    interestLevel: (state, action) => {
      state.newInterview.job_title = action.payload;
    },
    //add new question to array
    addQuestion: (state, action) => {
      state.newInterview.questions.push(action.payload)
    },
    //update notes related to question
    updateNotes: (state, action) => {
      state.newInterview.notes = action.payload;
    }
  }
})


export const {updateTitle, updateCompany, addTech, resumeVersion, interestLevel, addQuestion, updateNotes} = interviewSlice.actions;
export default interviewSlice.reducer;
