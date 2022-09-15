import React,{useState} from 'react'
import styles from './Button.module.scss'

const AddSkillButton = () => {
  
  return (
    <div className={styles.centered}>
      <button className={styles.addSkill} >Add Skill +</button>
    </div>
  );
}

export default AddSkillButton;