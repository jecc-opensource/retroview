import InterviewBox from '../components/InterviewBox/InterviewBox';
import styles from '../styles/Home.module.scss';
import Card from '../components/Card/Card';
import { useEffect,useState } from 'react';

const Interviews = () => {
  const interviewArray = ['Spotify', 'Meta', 'Amazon', 'Discord', 'Netflix'];
  const newArr = interviewArray.map((interview) => {
    return (
      <InterviewBox
        key={interview}
        label={interview}
        confidence={2}
      ></InterviewBox>
    );
  });

  const handleClick = (e) => {
    console.log('clicked');
  };
//fetching all interviews
  useEffect(() => {
    fetch('/api/interviews/', {
      // mode: 'cors',
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Credentials': true,
      // },
    })
      .then((res) => res.json())
      .then((data) => console.log(data)),
      [];
  });

  return (
    <>
      <h1 className={styles.title}>Interviews</h1>
      <button onClick={handleClick}>Add Interview</button>

      <br></br>
      <div className={styles.interviewContainer}>{newArr}</div>
    </>
  );
};

export default Interviews;
