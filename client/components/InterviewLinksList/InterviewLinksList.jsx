
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setSkillsLinked } from '../../redux/slices/interviewSlice';




const InterviewLinkList = () => {
  const dispatch = useDispatch();
  const skillList = useSelector((state) => state.skill.skillList);
  const skillsLinked = useSelector((state) => state.interview.skillsLinked);
  const modalInterview = useSelector((state) => state.interview.modalInterview);

  useEffect(() => {
    fetch(`/api/interviews/${modalInterview}/links`)
      .then((data) => data.json())
      .then((data) => {
        console.log(`Interview link fetch data`);
        console.log(data);
        dispatch(setSkillsLinked(data));
      })
  }, [modalInterview, dispatch])

  const linkedSkillList = [];
  skillsLinked.forEach(l => {
    linkedSkillList.push(skillList.find((s) => s.id === l.skill_id));
  })
  console.log(linkedSkillList);

  const linkedSkillElementsList = linkedSkillList.map((i, idx) => {
    return (
      <li key={`interview-link-${idx}`}>
        {idx} {i.name}
      </li>
    );
  })

  return (
    <ul>
      {linkedSkillElementsList}
    </ul>
  );
}

export default InterviewLinkList;