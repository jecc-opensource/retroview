
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setInterviewsLinked } from '../../redux/slices/skillSlice';




const SkillLinksList = () => {
  const dispatch = useDispatch();
  const interviewList = useSelector((state) => state.interview.interviewList);
  const interviewsLinked = useSelector((state) => state.skill.interviewsLinked);
  const modalSkill = useSelector((state) => state.skill.modalSkill);

  useEffect(() => {
    fetch(`/api/skills/${modalSkill}/links`)
      .then((data) => data.json())
      .then((data) => {
        console.log(`Skill link fetch data`);
        console.log(data);
        dispatch(setInterviewsLinked(data));
      })
  }, [modalSkill, dispatch])

  const linkedInterviewList = [];
  interviewsLinked.forEach(l => {
    linkedInterviewList.push(interviewList.find((i) => i.id === l.interview_id));
  })
  console.log(linkedInterviewList);

  const linkedInterviewElementsList = linkedInterviewList.map((i, idx) => {
    return (
      <li key={`interview-link-${idx}`}>
        {idx} {i.company} {i.job_title}
      </li>
    );
  })

  return (
    <ul>
      {linkedInterviewElementsList}
    </ul>
  );
}

export default SkillLinksList;