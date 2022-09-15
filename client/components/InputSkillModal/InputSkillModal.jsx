import React from 'react'
import styles from "./InputModal.module.scss"
const InputSkillModal = () => {
  return (
    <div>
      <form className={styles.modalBox}>
        <h1 className={styles.modalTitle}>Input a new Skill</h1>
        <label for='skillname'>Skill Name:</label>
        <br />
        <input
          className={styles.input}
          type='text'
          id='skillname'
          name='skillname'
          placeholder='Skill Name...'
        />
        <br />
        <label for='questions'>Question you might be asked?:</label>
        <br />
        <input
          className={styles.input}
          type='text'
          id='questions'
          name='questions'
          placeholder='Questions...'
        />
        <br />
        <label for='answer'>Answer for the Question</label>
        <br />
        <input
          className={styles.input}
          type='text'
          id='answer'
          name='answer'
          placeholder='Answer...'
        />
        <br />
        <label> How confident are you in this Skill?</label>
        <br />
        <div>
          <input type='radio' id='low' name='confidence' value='1' />{' '}
          <label>Not Confident</label>{' '}
          <input className={styles.radio} type='radio' id='low'name='confidence'  value='1' />{' '}
          <label> It's Okay</label>{' '}
          <input type='radio' id='high' name='confidence' value='1' />{' '}
          <label>Confident</label>{' '}
        </div>
        <button className={styles.save}>Save</button>
      </form>
    </div>
  );
}

export default InputSkillModal