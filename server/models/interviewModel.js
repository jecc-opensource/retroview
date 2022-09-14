
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs=require( 'fs');
const makeDatabaseDir = require ("../utils/utils")

makeDatabaseDir()

// Captures stack traces when handling queries. Makes it easier to debug errors resulting from
// bad queries.
sqlite3.verbose();

const dbPath = path.resolve(__dirname, '../../database/interviewDB.db');
const dbExists = fs.existsSync(dbPath);

const interviewDB = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    // Console logs to confirm connection to the database
    if (err) {
      throw (err);
    }
    console.log('Connection successful to database :)');
  },

)
if (!dbExists){
interviewDB.run(
  `CREATE TABLE interviews(id INTEGER PRIMARY KEY AUTOINCREMENT , interview_date ,job_title TEXT NOT NULL , company TEXT NOT NULL,tech_stack TEXT , resume_version TEXT, interest_level  TEXT CHECK( interest_level IN ('1','2','3') )  , questions TEXT DEFAULT NULL, notes text DEFAULT NULL )`
);



}
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

const allInterviews = `SELECT * FROM interviews`

interviewDB.all(allInterviews, [], (err,rows)=> {
  rows.forEach((row)=>{
    console.log(row);
  })
}
)

interviewDB.close((err)=> {
    if(err) return console.log(err.message);
})