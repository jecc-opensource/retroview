/* eslint-disable camelcase */
const db = require('../models/fakeDbModel');
const { createErr } = require('../utils/utils');

const interviewsController = {};

interviewsController.getAllInterviews = async (req, res, next) => {
  try {
    const dbRes = db.getAllInterviews();
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
    const dbRes = db.createInterview({
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

module.exports = interviewsController;
