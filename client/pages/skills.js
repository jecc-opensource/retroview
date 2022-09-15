import SkillBox from '../components/SkillBox/SkillBox';
import styles from '../styles/Home.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import SkillModal from '../components/SkillModal/SkillModal';
import { renderModal } from '../redux/slices/skillSlice';
import AddSkillButton from '../components/Buttons/addSkillButton';
import { useEffect, useState } from 'react';
const Skills = () => {
  const [addSkillModalStatus, setAddModal] = useState(false);
const [database, setData] = useState([])

  const dispatch = useDispatch();
  const skillList = useSelector((state) => state.skill.skillList);
  const modalSkill = useSelector((state) => state.skill.modalSkill);
  const newArr = skillList.map((skill, index) => {
    return (
      <SkillBox
        label={skill.name}
        confidence={skill.confidence}
        key={`skillBox-${index}`}
        onClick={() => dispatch(renderModal(skill.id))}
      />
    );
  });

//database JSX array
const databaseArray = database.map((skill,index)=> {
  return (
    <SkillBox
      label={skill.name}
      confidence={Number(skill.confidence)}
      key={`skillBox2-${index}`}
      onClick={() => dispatch(renderModal(skill.id))}
    />
  );
})
//fetching all skills
/* This is a fetch request to the backend to get all the skills from the database. */
  useEffect(()=>{
fetch('/api/skills/', {
  // //since fetching from other server must use cors and allow credentials
  // mode: 'cors',
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Credentials': true,
  // },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  return setData(data)}),
  [];
},[])

  return (
    <>
      <h1 className={styles.title}>Skills</h1>
      {/* <button>Add a skill</button> */}

      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.skillsContainer}>
          {newArr} 
          {databaseArray} <AddSkillButton onClick={() => setAddModal(!addSkillModalStatus)} />
        </div>
      </div>
      {modalSkill && <SkillModal skillId={modalSkill} />}
    </>
  );
};

export default Skills;
