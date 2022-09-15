import SkillBox from "../components/SkillBox/SkillBox";
import styles from '../styles/Home.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import SkillModal from "../components/SkillModal/SkillModal";
import { renderModal } from "../redux/slices/skillSlice";

const Skills = () => {
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
    ) 
  })

  return (
    <>
    <h1 className={styles.title}>Skills</h1>
    <button>Add a skill</button>
    <br/>
    <div className={styles.skillsContainer}>
        {newArr}
    </div>
    { modalSkill && <SkillModal skillId={modalSkill} /> }
    </>
  )
}

export default Skills;