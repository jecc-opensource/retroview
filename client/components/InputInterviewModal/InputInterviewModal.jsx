import React, { useState } from 'react';
import styles from './InputInterviewModal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {setInterviewModal} from "../../redux/slices/interviewSlice"
import {
  updateTitle,
  updateCompany,
  addTech,
  resumeVersion,
  interestLevel,
  addQuestion,
  updateNotes,
  renderModal,
  setSkillsLinked,
} from '../../redux/slices/interviewSlice';

const InputInterviewModal = () => {
  const dispatch = useDispatch();
  const newInterview = useSelector((state)=> state.interview.newInterview)

  const putRequest = () => {
    const req = {
      method: 'PUT',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ ...newInterview }),
    };
    fetch('/api/interviews', req)
    .then(res => res.json())
    .then(data=> console.log(data))
  }

  return (
    <div>
      <form action='' className={styles.modalBox}>
        <button
          className={styles.modalClose}
          onClick={() => {
            dispatch(setInterviewModal(false));
          }}
        >
          &times;
        </button>
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
          onChange={(e) => dispatch(updateCompany(e.target.value))}
        />
        <br />
        <label for='job_title'>Job Title</label>
        <br />
        <input
          id='job_title'
          type='text'
          className={styles.input}
          placeholder='Software Engineer...'
          onChange={(e) => dispatch(updateTitle(e.target.value))}
        />
        <br />
        <label for='tech_stack'>
          What tech stack does the company use?{' '}
          <a
            href='https://stackshare.io/'
            target='_blank'
            className={styles.link}
            rel='noreferrer'
          >
            not sure CHECK HERE!
          </a>
        </label>
        <br />
        <input
          id='tech_stack'
          type='text'
          className={styles.input}
          placeholder='React.js, Next.js, Node.js, Python ...'
          onChange={(e) => dispatch(addTech(e.target.value))}
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
          onChange={(e) => dispatch(resumeVersion(e.target.value))}
        />
        <br />
        <label for='interest_level'>What is your Interest Level?</label>
        <br />
        <div className={styles.radioInputs}>
          <input
            id='interest_level'
            type='radio'
            className={styles.input}
            name='interest'
            value='1'
            onChange={(e) => dispatch(interestLevel(e.target.value))}
          />
          <label> Not really </label>
          <input
            id='interest_level'
            type='radio'
            className={styles.input}
            name='interest'
            value='2'
            onChange={(e) => dispatch(interestLevel(e.target.value))}
          />
          <label> Interested </label>
          <input
            id='interest_level'
            type='radio'
            className={styles.input}
            name='interest'
            value='3'
            onChange={(e) => dispatch(interestLevel(e.target.value))}
          />
          <label> VERY Interested </label>
        </div>
        <br />
        <label for='questions'>
          {' '}
          What are some question they might ask you?{' '}
        </label>
        <br />
        <input
          id='questions'
          type='text'
          className={styles.input}
          placeholder='Do you have any experience with testing?...'
          onChange={(e) => dispatch(addQuestion(e.target.value))}
        />
        <br />
        <label for='notes'> Notes </label>
        <br />
        <input
          id='notes'
          type='text'
          className={styles.input}
          placeholder='The interviewer went to the same alma mater...'
          onChange={(e) => dispatch(updateNotes(e.target.value))}
        />
        <button
          type='submit'
          className={styles.save}
          onClick={() => putRequest()}
        >
          {' '}
          Save{' '}
        </button>
      </form>
    </div>
  );
};

export default InputInterviewModal;
