import React from 'react'
import styles from "./InputModal.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import {updateName, addQuestion, addAnswer, updateConfidence, renderModal, setInterviewsLinked} from '../../redux/slices/skillSlice'
const InputSkillModal = () => {
  const dispatch = useDispatch()
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
          onChange={(e) => dispatch(updateName(e.target.value))}
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
          onChange={(e) => dispatch(addQuestion(e.target.value))}
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
          onChange={(e) => dispatch(addAnswer(e.target.value))}
        />
        <br />
        <label> How confident are you in this Skill?</label>
        <br />
        <div className={styles.radioInputs}>
          <input type='radio' id='low' name='confidence' value='1' />{' '}
          <label>Not Confident</label>{' '}
          <input
            className={styles.radio}
            type='radio'
            id='medium'
            name='confidence'
            value='2'
            onChange={(e) => dispatch(updateConfidence(e.target.value))}
          />{' '}
          <label> It's Okay</label>{' '}
          <input
            type='radio'
            id='high'
            name='confidence'
            value='3'
            onChange={(e) => dispatch(updateConfidence(e.target.value))}
          />{' '}
          <label>Confident</label>{' '}
        </div>
        <button className={styles.save}>Save</button>
      </form>
    </div>
  );
}

export default InputSkillModal