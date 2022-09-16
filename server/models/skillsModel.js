/* eslint-disable no-console */
/* eslint-disable camelcase */
const db = require('./database');

class Skills {
  constructor(database) {
    this.database = database;
  }

  async getAllSkills() {
    const allSkillsQuery = 'SELECT * FROM skills';
    return new Promise((resolve, reject) => {
      this.database.all(allSkillsQuery, [], (err, rows) => {
        if (err) reject(err);
        rows.forEach((row) => {
          console.log('SKILLS =>', row);
        });
        resolve(rows);
      });
    });
  }

  async insertSkill({
    name, question_prompt, answer, confidence,
  }) {
    const insertSkillQuery = 'INSERT INTO skills(name, question_prompt, answer, confidence) VALUES (?,?,?,?)';
    return new Promise((resolve, reject) => {
      this.database.run(
        insertSkillQuery,
        [name, question_prompt, answer, confidence],
        (err) => {
          if (err) reject(err);
          resolve();
        },
      );
    });
  }

  async updateSkill({
    name, question_prompt, answer, confidence, id,
  }) {
    const updateSkillQuery = 'UPDATE skills SET name = $name, question_prompt = $question_prompt, answer = $answer, confidence = $confidence WHERE id = $id';
    return new Promise((resolve, reject) => {
      this.database.run(
        updateSkillQuery,
        {
          $id: id,
          $name: name,
          $question_prompt: question_prompt,
          $answer: answer,
          $confidence: confidence,
        },
        (err) => {
          if (err) reject(err);
          resolve();
        },
      );
    });
  }

  async deleteSkill({ id }) {
    const skillDeleteSQL = 'DELETE FROM skills WHERE id = ?';
    return new Promise((resolve, reject) => {
      this.database.run(skillDeleteSQL, id, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
}

const Skill = new Skills(db);

module.exports = Skill;
