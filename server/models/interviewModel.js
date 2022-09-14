const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const makeDatabaseDir = require('../utils/utils');

makeDatabaseDir();

// Captures stack traces when handling queries. Makes it easier to debug errors resulting from
// bad queries.
sqlite3.verbose();

const dbPath = path.resolve(__dirname, '../../database/interviewDB.db');
const dbExists = fs.existsSync(dbPath);
//make the databases
const interviewDB = new sqlite3.Database(
  dbPath,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    // Console logs to confirm connection to the database
    if (err) {
      throw err;
    }
    console.log('Connection successful to database :)');
  }
);
//make tables only if the databases wasnt created yet
if (!dbExists) {
  //ensure that all sqlite actions happen in order 
  interviewDB.serialize(() => {
    //make interviews table
    interviewDB.run(
      `CREATE TABLE interviews(id INTEGER PRIMARY KEY AUTOINCREMENT , interview_date ,job_title TEXT NOT NULL , company TEXT NOT NULL,tech_stack TEXT , resume_version TEXT, interest_level TEXT CHECK( interest_level IN ('1','2','3') )  , questions TEXT DEFAULT NULL, notes text DEFAULT NULL )`
    );

    //make skills table
    interviewDB.run(`
CREATE TABLE skills(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, question_prompt TEXT, answer TEXT, confidence TEXT CHECK( confidence IN ('1','2','3') ))
`);

    //make assocative entity or join table
    interviewDB.run(
      `CREATE TABLE interToSkill(interview_id INTEGER NOT NULL, skill_id INTEGER NOT NULL, PRIMARY KEY(interview_id, skill_id) )`
    );

    //sample insert into interviews
    let sql = `INSERT INTO interviews (interview_date, job_title,company, tech_stack, resume_version, interest_level, questions, notes) VALUES (?,?,?,?,?,?,?,?)`;

    interviewDB.run(sql, [
      '9/13/2022',
      'Software Engineer',
      'Spotify',
      'React',
      'Resume v1',
      '3',
      'Expierence with Testing',
      'No :)',
    ]);

    //sample insert into skills
    let sqlSkill = `INSERT INTO skills(name, question_prompt, answer, confidence) VALUES (?,?,?,?)`;

    interviewDB.run(sqlSkill, [
      'React',
      'Why would you use React?',
      'Make reusable JSX components',
      '1',
    ]);

    //sample insert into interToSkill join table
    let joinInsert = `INSERT INTO interToSkill(skill_id,interview_id) VALUES(?,?)`;
    interviewDB.run(joinInsert, [1, 1]);

    //selection queries to get all the info from intervies and skills table
    const allInterviews = `SELECT * FROM interviews`;
    const allSkills = `SELECT * FROM skills`;
    const allJoin = `SELECT * FROM interToSkill`;
    
    //console.log all the interviews
    interviewDB.all(allInterviews, [], (err, rows) => {
      rows.forEach((row) => {
        console.log('INTERVIEWS =>', row);
      });
    });

    //console.log all the skills
    interviewDB.all(allSkills, [], (err, rows) => {
      rows.forEach((row) => {
        console.log('SKILLS =>', row);
      });
    });
    //console.log all the joins
    interviewDB.all(allJoin, [], (err, rows) => {
      rows.forEach((row) => {
        console.log('JOINS =>', row);
      });
    });
  });
}

//best practices to close database
interviewDB.close((err) => {
  if (err) return console.log(err.message);
});
