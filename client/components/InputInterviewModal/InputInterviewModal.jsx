import React from 'react';
import styles from './InputInterviewModal.module.scss';
const InputInterviewModal = () => {
  return (
    <div>
      <form action='' className={styles.modalBox}>
        <h2 className={styles.modalTitle}>Enter a new Interview! </h2>
        <label for='interview_date'>Interview Date </label>
        <br />
        <input id='date' type='date' className={styles.input} />
        <br />
        <label for='company'>Company</label>
        <br />
        <input
          id='company'
          type='text'
          className={styles.input}
          placeholder='Company...'
        />
        <br />
        <label for='job_title'>Job Title</label>
        <br />
        <input
          id='job_title'
          type='text'
          className={styles.input}
          placeholder='Job Title...'
        />
        <br />
        <label for='tech_stack'>What tech stack does the company use? </label>
        <br />
        <input
          id='tech_stack'
          type='text'
          className={styles.input}
          placeholder='React.js, Next.js, Node.js, Python ...'
        />
        <br />
        <label for='resume_version'>
          Which version of your Resume did you send?
        </label>
        <br />
        <input
          id='resume_version'
          type='text'
          className={styles.input}
          placeholder='Resume version 1.1 ...'
        />
        <br />
        <label for='interest_level'>What is your Interest Level?</label>
        <br />
        <div >
          <input
            id='interest_level'
            type='radio'
            className={styles.input}
            placeholder=''
          />
          <label > Not really </label>
        </div>
      </form>
    </div>
  );
};

export default InputInterviewModal;
