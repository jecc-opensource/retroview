CREATE TYPE "scale" AS ENUM (
  '1',
  '2',
  '3'
);

CREATE TABLE "Interviews" (
  "id" SERIAL PRIMARY KEY,
  "interview_date" timestamp DEFAULT (now()),
  "job_title" varchar,
  "company" varchar,
  "tech_stack" varchar,
  "resume_version" varchar,
  "interest_level" scale,
  "questions" varchar,
  "notes" varchar
);

CREATE TABLE "Skills" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "question_prompt" varchar,
  "answer" varchar,
  "confidence" scale
);

CREATE TABLE "intoSkill" (
  "id" SERIAL PRIMARY KEY,
  "skill_id" int,
  "interview_id" int
);

ALTER TABLE "intoSkill" ADD FOREIGN KEY ("skill_id") REFERENCES "Skills" ("id");

ALTER TABLE "intoSkill" ADD FOREIGN KEY ("interview_id") REFERENCES "Interviews" ("id");
