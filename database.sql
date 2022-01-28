
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE “user” (
	“id” serial PRIMARY KEY,
	“username” varchar(255) UNIQUE NOT NULL,
	“password” varchar(255) NOT NULL,
	“sec_level” integer NOT NULL,
	“avail_start” DATE NOT NULL,
	“avail_end” DATE NOT NULL,
	“flight_event_id” integer NOT NULL,
	“signed_contract” BOOLEAN NOT NULL,
	“paid” BOOLEAN NOT NULL,
	“covid_free” BOOLEAN NOT NULL,
	“in_group” BOOLEAN NOT NULL,
	“flight_direction” VARCHAR(4) NOT NULL,
	CONSTRAINT “user_pk” PRIMARY KEY (“id”)
);
CREATE TABLE “flight_event” (
	“id” serial NOT NULL,
	“date” serial NOT NULL,
	“nyc team leader” integer NOT NULL,
	“lon team leader” integer NOT NULL,
	CONSTRAINT “flight event_pk” PRIMARY KEY (“id”)
);
CREATE TABLE “pet” (
	“id” serial NOT NULL,
	“name” varchar(255) NOT NULL,
	“breed” varchar(255) NOT NULL,
	“owner_id” serial NOT NULL,
	“weight” integer(255) NOT NULL,
	CONSTRAINT “pet_pk” PRIMARY KEY (“id”)
);
