
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
	"id" serial PRIMARY KEY,
	"username" varchar(255) UNIQUE NOT NULL,
	"password" varchar(255) NOT NULL,
	"sec_level" integer NOT NULL,
	"avail_start" DATE NOT NULL,
	"avail_end" DATE NOT NULL,
	"flight_event_id" integer NOT NULL,
	"signed_contract" BOOLEAN NOT NULL,
	"paid" BOOLEAN NOT NULL,
	"covid_free" BOOLEAN NOT NULL,
	"in_group" BOOLEAN NOT NULL,
	"flight_direction" VARCHAR(4) NOT NULL
);
CREATE TABLE "flight_event" (
	"id" serial PRIMARY KEY,
	"date" serial NOT NULL,
	"USTeamLead" integer NOT NULL,
	"EUTeamLead" integer NOT NULL
);
CREATE TABLE "pet" (
	"id" serial PRIMARY KEY,
	"name" varchar(255) NOT NULL,
	"breed" varchar(255) NOT NULL,
	"owner_id" serial NOT NULL,
	"weight" integer NOT NULL
);

