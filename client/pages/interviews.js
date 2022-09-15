import InterviewBox from "../components/InterviewBox/InterviewBox";
import styles from "../styles/Home.module.scss";
import { useSelector, useDispatch } from 'react-redux';
import InterviewModal from "../components/InterviewModal/InterviewModal";
import { renderModal } from "../redux/slices/interviewSlice";
import { useEffect,useState } from 'react';
import InputInterviewModal from "../components/InputInterviewModal/InputInterviewModal"

const Interviews = () => {
  const dispatch = useDispatch();
  const interviewList = useSelector((state) => state.interview.interviewList);
  const modalInterview = useSelector((state) => state.interview.modalInterview);
  const newArr = interviewList.map((interview, index) => {
    return (
      <InterviewBox 
        label={interview.company} 
        confidence={interview.interest_level}
        key={`interviewBox-${index}`} 
        onClick={() => dispatch(renderModal(interview.id))}
      />
    )
  })
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
      <button>Add Interview</button>
      <br></br>
      <div className={styles.centered}>
        <div className={styles.interviewContainer}>{newArr}</div>
      </div>
      <InputInterviewModal/>
      {modalInterview && <InterviewModal interviewId={modalInterview} />}
    </>
  );
};

export default Interviews;
