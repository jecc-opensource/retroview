import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import cn from 'classnames';
import styles from './SkillModal.module.scss';
import { renderModal } from "../../redux/slices/skillSlice";

const SkillModal = ({ skillId }) => {
  const dispatch = useDispatch();
  const skillList = useSelector((state) => state.skill.skillList);
  const skill = skillList.find(skill => skill.id === skillId);
  return (
    <div className={styles.modalBox}>
      <div className={styles.modalHeader}>
        <div className={styles.modalTitle}>
          {skill.name}
        </div>
        <button className={styles.modalClose} onClick={() => dispatch(renderModal(null))}>
          &times;
        </button>
      </div>
      <div className={styles.modalBody}></div>
      Prompt: {skill.question_prompt}
      <br />
      Confidence: {skill.confidence}
      <br />
      Answer: {skill.answer}
    </div>
  );
};

export default SkillModal;