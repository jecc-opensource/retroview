import { useSelector, useDispatch } from 'react-redux';
import styles from './InterviewModal.module.scss';
import { renderModal } from "../../redux/slices/interviewSlice";

const InterviewModal = ({ interviewId }) => {
  const dispatch = useDispatch();
  const interviewList = useSelector((state) => state.interview.interviewList);
  const interview = interviewList.find(interview => interview.id === interviewId);
  return (
    <div className={styles.modalBox}>
      <div className={styles.modalHeader}>
        <div className={styles.modalTitle}>
          {interview.company}
        </div>
        <button className={styles.modalClose} onClick={() => dispatch(renderModal(null))}>
          &times;
        </button>
      </div>
      <div className={styles.modalBody}>
        <strong>Interview Date: </strong>{interview.interview_date}
        <br />
        <strong>Job Title: </strong>{interview.job_title}
        <br />
        <strong>Tech Stack: </strong>{interview.tech_stack}
        <br />
        <strong>Résumé: </strong>{interview.resume_version}
        <br />
        <strong>Questions: </strong>{interview.questions}
        <br />
        <strong>Notes: </strong>{interview.notes}
      </div>
    </div>
  );
};

export default InterviewModal;