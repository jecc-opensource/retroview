import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import cn from 'classnames';
import styles from './SkillModal.module.scss';
import { renderModal } from "../../redux/slices/skillSlice";
import SkillLinksList from '../SkillLinksList/SkillLinksList';

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
      <div className={styles.modalBody}>
        <strong>Prompt: </strong>{skill.question_prompt}
        <br />
        <strong>Confidence: </strong>{skill.confidence}
        <br />
        <strong>Answer: </strong>{skill.answer}
        <hr />
        <SkillLinksList />
      </div>
    </div>
  );
};

export default SkillModal;