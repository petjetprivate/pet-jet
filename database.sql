
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
	"full_name" varchar(255) UNIQUE NOT NULL,
	"email" varchar(255) UNIQUE NOT NULL,
	"phone" varchar(255) UNIQUE NOT NULL,
	"sec_level" integer NOT NULL,
	"avail_start" DATE DEFAULT NULL,
	"avail_end" DATE DEFAULT NULL,
	"flight_event_id" integer DEFAULT NULL,
	"signed_contract" BOOLEAN DEFAULT NULL,
	"paid" BOOLEAN DEFAULT NULL,
	"covid_free" BOOLEAN DEFAULT NULL,
	"in_group" BOOLEAN DEFAULT NULL,
	"continent_origin" VARCHAR(2) NOT NULL
);
CREATE TABLE "flight_event" (
	"id" serial PRIMARY KEY,
	"name" varchar(255) NOT NULL,
	"date" DATE NOT NULL,
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

INSERT INTO "public"."user"("id", "username", "password", "full_name", "sec_level", "continent_origin") 
VALUES(1, 'AdminRose', 'Flower', 'Rose', 2, 'US') 
RETURNING "id", "username", "password", "full_name", "sec_level", "avail_start", "avail_end", "flight_event_id", "signed_contract", "paid", "covid_free", "in_group", "continent_origin";



