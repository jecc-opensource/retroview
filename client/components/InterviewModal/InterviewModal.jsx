import { useSelector, useDispatch } from 'react-redux';
import styles from './InterviewModal.module.scss';
import { renderModal } from '../../redux/slices/interviewSlice';
import InterviewLinkList from '../InterviewLinksList/InterviewLinksList';

const InterviewModal = ({ interviewId }) => {
  const dispatch = useDispatch();
  const interviewList = useSelector((state) => state.interview.interviewList);
  const interview = interviewList.find(
    (interview) => interview.id === interviewId
  );
  return (
    <div className={styles.modalBox}>
      <div className={styles.modalHeader}>
        <div className={styles.modalTitle}>{interview.company}</div>
        <button
          className={styles.modalClose}
          onClick={() => dispatch(renderModal(null))}
        >
          &times;
        </button>
      </div>
      <div className={styles.modalBody}>
        <strong>Interview Date: </strong>
        {interview.interview_date}
        <br />
        <strong>Job Title: </strong>
        {interview.job_title}
        <br />
        <strong>Tech Stack: </strong>
        {interview.tech_stack.map((tech, index) => {
          return (
            <li className={styles.techList}>{`${index + 1}. ${tech} `}</li>
          );
        })}
        <strong>Résumé: </strong>
        {interview.resume_version}
        <br />
        <strong>Questions: </strong>
        {interview.questions.map((question, index) => {
          return (
            <li className={styles.questList}>{`${index + 1}. ${question} `}</li>
          );
        })}
        <strong>Notes: </strong>
        {interview.notes}
        <hr />
        <InterviewLinkList />
      </div>
    </div>
  );
};

export default InterviewModal;
