import SkillBox from "../components/SkillBox/SkillBox";
import styles from '../styles/Home.module.scss';

const Skills = () => {
  const skillsArray = ['React', 'Express', 'Jest', 'React Testing Library', 'SQL', 'NoSQL', 'Skill1', 'Skill2', 'skill3'];
  const newArr = skillsArray.map((skill) => {
    return <SkillBox key={skill} label={skill} confidence={2}></SkillBox>
  })

  return (
    <>
    <h1 className={styles.title}>Skills</h1>
    <button>Add a skill</button>
    <br></br>
    <div className={styles.skillsContainer}>
        {newArr}
    </div>
    </>
  )
}

export default Skills;