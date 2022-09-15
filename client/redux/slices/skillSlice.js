import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalSkill: null,
  interviewsLinked: [],
  newSkill: {
    name: 'Redux',
    question_prompt: 'Do you know what you are doing?',
    answer: 'I have no idea how to use this tech',
    confidence: 1
  },
  skillList: [{
    id: 1,
    name: 'Node.js',
    question_prompt: 'Tell me about your experience with Node.js',
    answer: 'Long bois wow such tempt I am bekom fat snoot much ruin diet, you are doing me a frighten blop. Thicc stop it fren long bois lotsa pats aqua doggo pats, heckin angery woofer ruff you are doin me a concern snoot. Corgo you are doing me a frighten ruff super chub noodle horse, you are doin me a concern borking doggo heckin, puggo what a nice floof borkdrive. What a nice floof fluffer waggy wags sub woofer puggorino you are doing me the shock waggy wags, borkf heckin good boys very taste wow you are doin me a concern. Shoob blep woofer smol borking doggo with a long snoot for pats maximum borkdrive h*ck, wrinkler ruff shibe tungg.',
    confidence: 2,
  },
  {
    id: 2,
    name: 'React',
    question_prompt: 'What are the advantages and disadvantages of React?',
    answer: ' Blop doge ruff very jealous pupper h*ck, woofer heckin good boys heck. Long bois doing me a frighten clouds sub woofer corgo, extremely cuuuuuute puggorino. Snoot very jealous pupper tungg doggo you are doin me a concern lotsa pats, heckin angery woofer shoober big ol. Boof the neighborhood pupper woofer ur givin me a spook, doggorino fat boi. Wrinkler tungg heckin puggo, long bois pats.',
    confidence: 3,
  },
  {
    id: 3,
    name: 'Redux',
    question_prompt: 'What are the differences between Redux and React-Hooks, and when is it useful?',
    answer: 'H*ck borkdrive many pats he made many woofs, heckin good boys heck. Shooberino smol borking doggo with a long snoot for pats long doggo very taste wow porgo, snoot porgo big ol. Clouds corgo long water shoob very taste wow he made many woofs pupper, ur givin me a spook you are doin me a concern long woofer. Mlem dat tungg tho heck most angery pupper I have ever seen, blep wow very biscit. Heckin puggorino big ol pupper, doge. Heckin angery woofer he made many woofs what a nice floof, you are doing me a frighten.',
    confidence: 1,
  },
  {
    id: 4,
    name: 'NoSQL',
    question_prompt: 'How have you used NoSQL in past projects?',
    answer: '',
    confidence: 1,
  },
  {
    id: 5,
    name: 'MongoDB',
    question_prompt: 'Is MongoDB web scale?',
    answer: '',
    confidence: 1,
  },
  {
    id: 6,
    name: 'SQL',
    question_prompt: 'How have you used SQL in past projects?',
    answer: 'Fat boi many pats very hand that feed shibe such treat wow very biscit clouds much ruin diet, shoober wrinkler he made many woofs maximum borkdrive. Big ol shoob very hand that feed shibe noodle horse boof corgo, pupperino mlem pupperino. length boy. Heckin angery woofer borkf big ol pupper, you are doin me a concern. Mlem snoot porgo heckin very good spot, stop it fren borkdrive. Floofs you are doing me the shock corgo dat tungg tho, wow very biscit tungg.',
    confidence: 2,
  }
  ]
}

export const skillSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.newSkill.name = action.payload;
    },
     //update interest level from user entry
    addQuestion: (state, action) => {
      state.newSkill.question_prompt = action.payload;
    },
    //add new question to array
    addAnswer: (state, action) => {
      state.newSkill.answer = action.payload;
    },
    //update notes related to question
    updateConfidence: (state, action) => {
      state.newSkill.confidence = action.payload;
    },
    renderModal: (state, action) => {
      state.modalSkill = action.payload;
    },
    setInterviewsLinked: (state, action) => {
      state.interviewsLinked = action.payload;
    },
    addSkillList: (state, action) => {
      state.skillList.push(action.payload)
    }
  }
})

export const {updateName, addQuestion, addAnswer, updateConfidence, renderModal, setInterviewsLinked, addSkillList} = skillSlice.actions;
export default skillSlice.reducer;