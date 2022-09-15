/* eslint-disable camelcase */
const { createErr } = require('../utils/utils');
const Link = require('../models/interToSkillModel');

const linksController = {};

linksController.getAll = async (req, res, next) => {
  try {
    const dbRes = await Link.getAllLinks();
    res.locals.links = dbRes;
  } catch (err) {
    return next(
      createErr({
        method: 'getAllLinks',
        type: 'db query error',
        err,
      }),
    );
  }

  return next();
};

linksController.getBySkillId = async (req, res, next) => {
  const skill_id = Number(req.params.id);

  if (
    typeof skill_id !== 'number'
  ) {
    return next(
      createErr({
        method: 'getBySkillId',
        type: 'data validation error',
        err: 'request body contained invalid data',
      }),
    );
  }

  try {
    const dbRes = await Link.getBySkillId({ skill_id });
    res.locals.links = dbRes;
  } catch (err) {
    return next(
      createErr({
        method: 'getBySkillId',
        type: 'db query error',
        err,
      }),
    );
  }

  return next();
};

linksController.getByInterviewId = async (req, res, next) => {
  const interview_id = Number(req.params.id);

  if (
    typeof interview_id !== 'number'
  ) {
    return next(
      createErr({
        method: 'getByInterviewId',
        type: 'data validation error',
        err: 'request body contained invalid data',
      }),
    );
  }

  try {
    const dbRes = await Link.getByInterviewId({ interview_id });
    res.locals.links = dbRes;
  } catch (err) {
    return next(
      createErr({
        method: 'getByInterviewId',
        type: 'db query error',
        err,
      }),
    );
  }

  return next();
};

linksController.create = async (req, res, next) => {
  let skill_id = null;
  let interview_id = null;
  if (/.*skills.*/.test(req.originalUrl)) {
    skill_id = Number(req.params.id);
    interview_id = Number(req.body.interview_id);
  }
  if (/.*interviews.*/.test(req.originalUrl)) {
    interview_id = Number(req.params.id);
    skill_id = Number(req.body.skill_id);
  }

  if (
    typeof skill_id !== 'number'
    || typeof interview_id !== 'number'
  ) {
    return next(
      createErr({
        method: 'createLink',
        type: 'data validation error',
        err: 'request body contained invalid data',
      }),
    );
  }

  try {
    const dbRes = await Link.insertLink({
      skill_id,
      interview_id,
    });
    res.locals.newLink = dbRes;
  } catch (err) {
    return next(
      createErr({
        method: 'createLink',
        type: 'db insert error',
        err,
      }),
    );
  }

  return next();
};

linksController.delete = async (req, res, next) => {
  let skill_id = null;
  let interview_id = null;
  if (/.*skills.*/.test(req.originalUrl)) {
    skill_id = Number(req.params.id);
    interview_id = Number(req.body.interview_id);
  }
  if (/.*interviews.*/.test(req.originalUrl)) {
    interview_id = Number(req.params.id);
    skill_id = Number(req.body.skill_id);
  }

  if (
    typeof skill_id !== 'number'
    || typeof interview_id !== 'number'
  ) {
    return next(
      createErr({
        method: 'deleteLink',
        type: 'data validation error',
        err: 'request body contained invalid data',
      }),
    );
  }

  try {
    const dbRes = await Link.deleteLink({
      skill_id,
      interview_id,
    });
    res.locals.deletedLink = dbRes;
  } catch (err) {
    return next(
      createErr({
        method: 'deleteLink',
        type: 'db delete error',
        err,
      }),
    );
  }

  return next();
};

module.exports = linksController;
