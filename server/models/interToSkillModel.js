/* eslint-disable camelcase */
const db = require('./database');

class InterToSkill {
  constructor(database) {
    this.database = database;
  }

  async getAllJoins() {
    const allJoin = 'SELECT * FROM interToSkill';
    return new Promise((resolve, reject) => {
      this.database.all(allJoin, [], (err, rows) => {
        if (err) reject(err);
        rows.forEach((row) => {
          console.log('JOINS =>', row);
        });
        resolve(rows);
      });
    });
  }

  async insertJoin({ skill_id, interview_id }) {
    const joinInsert =
      'INSERT INTO interToSkill(skill_id,interview_id) VALUES(?,?)';
    return new Promise((resolve, reject) => {
      this.database.run(joinInsert, [skill_id, interview_id], (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
}

const IntToSkill = new InterToSkill(db);
module.exports = IntToSkill;
