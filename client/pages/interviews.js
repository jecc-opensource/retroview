import InterviewBox from "../components/InterviewBox/InterviewBox";
import styles from "../styles/Home.module.scss";
import Card from '../components/Card/Card';

const Interviews = () => {
  const interviewArray = ['Spotify', 'Meta', 'Amazon', 'Discord', 'Netflix'];
  const newArr = interviewArray.map((interview) => {
    return <InterviewBox key={interview} label={interview} confidence={2}></InterviewBox>
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