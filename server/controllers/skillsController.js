/* eslint-disable camelcase */
const { createErr } = require('../utils/utils');
const Skill = require('../models/skillsModel');

const skillsController = {};

skillsController.getAllSkills = async (req, res, next) => {
  try {
    const dbRes = await Skill.getAllSkills();
    console.log(dbRes);
    res.locals.skills = dbRes;
  } catch (err) {
    return next(
      createErr({
        method: 'getAllSkills',
        type: 'db query error',
        err,
      }),
    );
  }

  return next();
};

skillsController.deleteSkillById = async (req, res, next) => {
  const id = Number(req.params.id);

  if (
    typeof id !== 'number'
  ) {
    return next(
      createErr({
        method: 'deleteSkillById',
        type: 'data validation error',
        err: 'request param contained invalid data',
      }),
    );
  }

  try {
    const dbRes = await Skill.deleteSkill({ id });
    console.log(dbRes);
    res.locals.deletedSkill = dbRes;
  } catch (err) {
    return next(
      createErr({
        method: 'deleteSkillById',
        type: 'db query error',
        err,
      }),
    );
  }

  return next();
};

skillsController.createSkill = async (req, res, next) => {
  const required = ['name'];
  const {
    name, question_prompt = '', answer = '', confidence = 1,
  } = req.body;

  if (required.some((key) => req.body[key] === undefined)) {
    return next(
      createErr({
        method: 'createSkill',
        type: 'data validation error',
        err: 'request body did not include all required fields',
      }),
    );
  }

  if (
    typeof name !== 'string'
    || typeof question_prompt !== 'string'
    || typeof answer !== 'string'
    || typeof confidence !== 'number'
  ) {
    return next(
      createErr({
        method: 'createSkill',
        type: 'data validation error',
        err: 'request body contained invalid data',
      }),
    );
  }

  try {
    const dbRes = await Skill.insertSkill({
      name,
      question_prompt,
      answer,
      confidence,
    });
    res.locals.newSkill = dbRes;
  } catch (err) {
    return next(
      createErr({
        method: 'createSkill',
        type: 'db insert error',
        err,
      }),
    );
  }

  return next();
};

skillsController.updateSkill = async (req, res, next) => {
  const id = Number(req.params.id);
  const required = ['name'];
  const {
    name, question_prompt = '', answer = '', confidence = 1,
  } = req.body;

  if (required.some((key) => req.body[key] === undefined)) {
    return next(
      createErr({
        method: 'updateSkill',
        type: 'data validation error',
        err: 'request body did not include all required fields',
      }),
    );
  }

  if (
    typeof name !== 'string'
    || typeof question_prompt !== 'string'
    || typeof answer !== 'string'
    || typeof confidence !== 'number'
    || typeof id !== 'number'
  ) {
    return next(
      createErr({
        method: 'updateSkill',
        type: 'data validation error',
        err: 'request body contained invalid data',
      }),
    );
  }

  try {
    const dbRes = await Skill.updateSkill({
      name,
      question_prompt,
      answer,
      confidence,
      id,
    });
    res.locals.updatedSkill = dbRes;
  } catch (err) {
    return next(
      createErr({
        method: 'updateSkill',
        type: 'db update error',
        err,
      }),
    );
  }

  return next();
};

module.exports = skillsController;
