/*
Table Interviews{
  id int [pk, increment]
  interview_date timestamp [default: `now()`]
  job_title varchar
  company varchar
  tech_stack varchar
  resume_version varchar
  interest_level  scale
  questions varchar
  notes varchar
}
*/

const fakeInterviews = [
  {
    id: 1,
    interview_date: new Date(),
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
    interview_date: new Date(),
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
    interview_date: new Date(),
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
  },
];

/*
Table Skills{
  id int [pk, increment]
  name varchar
  question_prompt varchar
  answer varchar
  confidence scale
}
*/

const fakeSkills = [
  {
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
    name: 'SQL',
    question_prompt: 'How have you used SQL in past projects?',
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
  },
];

/*
Table intToSkill{
  id int [pk, increment]
  skill_id int [ref: > Skills.id]
  interview_id int [ref: > Interviews.id]
}
*/

const fakeIntToSkill = [
  {
    id: 1,
    skill_id: 6,
    interview_id: 3,
  },
  {
    id: 2,
    skill_id: 2,
    interview_id: 1,
  },
  {
    id: 3,
    skill_id: 5,
    interview_id: 3,
  },
];

const fakeDb = {
  getAllSkills: () => fakeSkills,
  getAllInterviews: () => fakeInterviews,
  getAllIntToSkills: () => fakeIntToSkill,
  createSkill: (s) => {
    const n = s;
    n.id = fakeSkills[fakeSkills.length - 1].id + 1;
    fakeSkills.push(n);
    return n;
  },
  createInterview: (i) => {
    const n = i;
    n.id = fakeInterviews[fakeInterviews.length - 1].id + 1;
    fakeInterviews.push(n);
    return n;
  },
};

module.exports = fakeDb;
