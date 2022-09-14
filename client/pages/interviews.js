import SkillBox from "../components/SkillBox/SkillBox";
import styles from "../styles/Home.module.scss";
import Card from '../components/Card/Card';

const Interviews = () => {
  const interviewArray = ['Spotify', 'Meta', 'Amazon', 'Discord', 'Netflix'];
  const newArr = interviewArray.map((interview) => {
    return <SkillBox key={interview} label={interview}></SkillBox>
  })

  const handleClick = (e) => {
    console.log('clicked')
  }

  return (
    <>
    <h1 className={styles.title}>Interviews</h1>
    <button onClick={handleClick}>Add Interview</button>
    <br></br>
    <div className={styles.interviewContainer}>
      {newArr}
    </div>
    </>
  )
}

export default Interviews;