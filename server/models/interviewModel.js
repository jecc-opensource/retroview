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
    const sqlInsert = 'INSERT INTO interviews (interview_date, job_title,company, tech_stack, resume_version, interest_level, questions, notes) VALUES (?,?,?,?,?,?,?,?)';
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

  async updateInterview({
    id,
    interview_date,
    job_title,
    company,
    tech_stack,
    resume_version,
    interest_level,
    questions,
    notes,
  }) {
    const sqlUpdate = 'UPDATE interviews SET interview_date = $interview_date, job_title = $job_title, company = $company, tech_stack = $tech_stack, resume_version = $resume_version, interest_level = $interest_level, questions = $questions, notes = $notes WHERE id = $id';
    return new Promise((resolve, reject) => {
      this.database.run(
        sqlUpdate,
        {
          $interview_date: interview_date,
          $job_title: job_title,
          $company: company,
          $tech_stack: tech_stack,
          $resume_version: resume_version,
          $interest_level: interest_level,
          $questions: questions,
          $notes: notes,
          $id: id,
        },
        (err) => {
          if (err) reject(err);
          resolve();
        },
      );
    });
  }

  async deleteInterview({ id }) {
    const interviewDeleteSQL = 'DELETE FROM interviews WHERE id = ?';
    return new Promise((resolve, reject) => {
      this.database.run(interviewDeleteSQL, id, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
}

const Interview = new Interviews(db);

//  export instance of Interview
module.exports = Interview;
