/* eslint-disable camelcase */
const db = require('./database');

class Interviews {
  constructor(database) {
    this.database = database;
  }
  // get all interviews

  async getAllInterviews() {
    const allInterviewsQuery = 'SELECT * FROM interviews';
    return new Promise((resolve, reject) => {
      this.database.all(allInterviewsQuery, [], (err, rows) => {
        if (err) reject(err);
        rows.forEach((row) => {
          console.log('INTERVIEWS =>', row);
        });
        resolve(rows);
      });
    });
  }

  async insertInterview({
    interview_date,
    job_title,
    company,
    tech_stack,
    resume_version,
    interest_level,
    questions,
    notes,
  }) {
    const sqlInsert =
      'INSERT INTO interviews (interview_date, job_title,company, tech_stack, resume_version, interest_level, questions, notes) VALUES (?,?,?,?,?,?,?,?)';
    return new Promise((resolve, reject) => {
      this.database.run(
        sqlInsert,
        [
          interview_date,
          job_title,
          company,
          tech_stack,
          resume_version,
          interest_level,
          questions,
          notes,
        ],
        (err) => {
          if (err) reject(err);
          resolve();
        },
      );
    });
  }
}

const Interview = new Interviews(db);

//  export instance of Interview
module.exports = Interview;
