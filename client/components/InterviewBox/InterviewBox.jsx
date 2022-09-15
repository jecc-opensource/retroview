import styles from './InterviewBox.module.scss';
import cn from 'classnames';
import Link from 'next/link';

const InterviewBox = ({ label, confidence, href = '/' }) => {
  
  return (
    <Link href={href}>
      <button
        className={cn({
          [styles.high]: confidence === 3,
          [styles.medium]: confidence === 2,
          [styles.low]: confidence === 1,
        })}
      >
        {label}
      </button>
    </Link>
  );
};

export default InterviewBox;
