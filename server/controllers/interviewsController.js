/* eslint-disable camelcase */
const { createErr } = require('../utils/utils');
const Interview = require('../models/interviewModel');

const interviewsController = {};

interviewsController.getAllInterviews = async (req, res, next) => {
  try {
    const dbRes = await Interview.getAllInterviews();
    res.locals.interviews = dbRes;
  } catch (err) {
    return next(
      createErr({
        method: 'getAllInterviews',
        type: 'db query error',
        err,
      }),
    );
  }

  return next();
};

interviewsController.createInterview = async (req, res, next) => {
  const required = ['job_title', 'company'];
  const {
    interview_date = new Date(), job_title, company = '', tech_stack = [], resume_version = '', interest_level = 1, questions = [], notes = '',
  } = req.body;

  if (required.some((key) => req.body[key] === undefined)) {
    return next(
      createErr({
        method: 'createInterview',
        type: 'data validation error',
        err: 'request body did not include all required fields',
      }),
    );
  }

  if (
    typeof job_title !== 'string'
    || typeof company !== 'string'
    || typeof resume_version !== 'string'
    || typeof notes !== 'string'
    || typeof interest_level !== 'number'
  ) {
    return next(
      createErr({
        method: 'createInterview',
        type: 'data validation error',
        err: 'request body contained invalid data',
      }),
    );
  }

  try {
    const dbRes = await Interview.insertInterview({
      interview_date,
      job_title,
      company,
      tech_stack,
      resume_version,
      interest_level,
      questions,
      notes,
    });
    res.locals.newInterview = dbRes;
  } catch (err) {
    return next(
      createErr({
        method: 'createInterview',
        type: 'db insert error',
        err,
      }),
    );
  }

  return next();
};

interviewsController.updateInterview = async (req, res, next) => {
  const id = Number(req.params.id);
  const required = ['job_title', 'company'];
  const {
    interview_date = new Date(), job_title, company = '', tech_stack = [], resume_version = '', interest_level = 1, questions = [], notes = '',
  } = req.body;

  if (required.some((key) => req.body[key] === undefined)) {
    return next(
      createErr({
        method: 'updateInterview',
        type: 'data validation error',
        err: 'request body did not include all required fields',
      }),
    );
  }

  if (
    typeof job_title !== 'string'
    || typeof company !== 'string'
    || typeof resume_version !== 'string'
    || typeof notes !== 'string'
    || typeof interest_level !== 'number'
    || typeof id !== 'number'
  ) {
    return next(
      createErr({
        method: 'updateInterview',
        type: 'data validation error',
        err: 'request body contained invalid data',
      }),
    );
  }

  try {
    const dbRes = await Interview.updateInterview({
      interview_date,
      job_title,
      company,
      tech_stack,
      resume_version,
      interest_level,
      questions,
      notes,
      id,
    });
    res.locals.updatedInterview = dbRes;
  } catch (err) {
    return next(
      createErr({
        method: 'updateInterview',
        type: 'db update error',
        err,
      }),
    );
  }

  return next();
};

interviewsController.deleteInterviewById = async (req, res, next) => {
  const id = Number(req.params.id);

  if (
    typeof id !== 'number'
  ) {
    return next(
      createErr({
        method: 'deleteInterviewById',
        type: 'data validation error',
        err: 'request param contained invalid data',
      }),
    );
  }

  try {
    const dbRes = await Interview.deleteInterview({ id });
    console.log(dbRes);
    res.locals.deletedInterview = dbRes;
  } catch (err) {
    return next(
      createErr({
        method: 'deleteInterviewById',
        type: 'db query error',
        err,
      }),
    );
  }

  return next();
};

module.exports = interviewsController;
