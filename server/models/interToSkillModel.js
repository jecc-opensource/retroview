/* eslint-disable no-console */
/* eslint-disable camelcase */
const db = require('./database');

class InterToSkill {
  constructor(database) {
    this.database = database;
  }

  async getAllLinks() {
    const allJoin = 'SELECT * FROM interToSkill';
    return new Promise((resolve, reject) => {
      this.database.all(allJoin, [], (err, rows) => {
        if (err) reject(err);
        rows.forEach((row) => {
          console.log('LINKS =>', row);
        });
        resolve(rows);
      });
    });
  }

  async insertLink({ skill_id, interview_id }) {
    const joinInsert = 'INSERT INTO interToSkill(skill_id,interview_id) VALUES(?,?)';
    return new Promise((resolve, reject) => {
      this.database.run(joinInsert, [skill_id, interview_id], (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  async deleteLink({ skill_id, interview_id }) {
    const linkDelete = 'DELETE FROM interToSkill WHERE skill_id = ? AND interview_id = ?';
    return new Promise((resolve, reject) => {
      this.database.run(linkDelete, skill_id, interview_id, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  async getBySkillId({ skill_id }) {
    const selectSkillId = 'SELECT * FROM interToSkill WHERE skill_id = ?';
    return new Promise((resolve, reject) => {
      this.database.all(selectSkillId, skill_id, (err, rows) => {
        if (err) reject(err);
        rows.forEach((row) => {
          console.log('LINKS =>', row);
        });
        resolve(rows);
      });
    });
  }

  async getByInterviewId({ interview_id }) {
    const selectInterviewId = 'SELECT * FROM interToSkill WHERE interview_id = ?';
    return new Promise((resolve, reject) => {
      this.database.all(selectInterviewId, interview_id, (err, rows) => {
        if (err) reject(err);
        rows.forEach((row) => {
          console.log('LINKS =>', row);
        });
        resolve(rows);
      });
    });
  }
}

const IntToSkill = new InterToSkill(db);
module.exports = IntToSkill;
