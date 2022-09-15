import styles from './InterviewBox.module.scss';
import cn from 'classnames';
import Link from 'next/link';

const ClickBox = ({ label, confidence, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn({
        [styles.high]: confidence === 3,
        [styles.medium]: confidence === 2,
        [styles.low]: confidence === 1,
      })}
    >
      {label}
    </button>
  );
};

const LinkBox = ({ label, confidence, href }) => {
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

const InterviewBox = ({ label, confidence, href, onClick }) => {
  return (
    <>
      {href ? (
        <LinkBox label={label} confidence={confidence} href={href} />
      ) : (
        <ClickBox label={label} confidence={confidence} onClick={onClick} />
      )}
    </>
  );
};

export default InterviewBox;
