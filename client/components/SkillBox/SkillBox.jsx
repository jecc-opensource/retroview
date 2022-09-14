import styles from './SkillBox.module.scss';
import cn from 'classnames';

const SkillBox = ({label, confidence}) => {


  return (
    <button className={cn({
      [styles.high]: confidence === 3,
      [styles.medium]: confidence === 2,
      [styles.low]: confidence === 1, })
    }>
      {label}
    </button>
  )
}

export default SkillBox;