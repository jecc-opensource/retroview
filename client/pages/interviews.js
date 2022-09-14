import Card from "../components/Card/Card";
import styles from "../styles/Home.module.scss";

const Interviews = () => {
  const interviewArray = ['Spotify', 'Meta', 'Amazon', 'Discord', 'Netflix'];
  const newArr = interviewArray.map((interview) => {
    return <Card key={interview} title={interview}></Card>
  })

  return (
    <>
    <h1 className={styles.title}>Interviews</h1>
    <button>Add Interview</button>
    <br></br>
    <div className={styles.interviewContainer}>
      {newArr}
    </div>
    </>
  )
}

export default Interviews;