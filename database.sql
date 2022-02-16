
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

DROP TABLE IF EXISTS "user";
CREATE TABLE "user" (
	"id" serial PRIMARY KEY,
	"username" varchar(255) UNIQUE NOT NULL,
	"password" varchar(255) NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"phone_num" varchar(15) DEFAULT NULL,
	"email" varchar(255) DEFAULT NULL,
	"sec_level" integer NOT NULL,
	"avail_start" DATE DEFAULT NULL,
	"avail_end" DATE DEFAULT NULL,
	"flight_event_id" integer DEFAULT NULL,
	"signed_contract" BOOLEAN DEFAULT FALSE,
	"paid" BOOLEAN DEFAULT FALSE,
	"covid_free" BOOLEAN DEFAULT FALSE,
	"continent_origin" VARCHAR(2) NOT NULL
);

DROP TABLE IF EXISTS "flight_event";
CREATE TABLE "flight_event" (
	"id" serial PRIMARY KEY,
	"name" varchar(255) NOT NULL,
	"dep_date" DATE DEFAULT NULL,
	"ret_date" DATE DEFAULT NULL,
	"USTeamLead" integer DEFAULT NULL,
	"EUTeamLead" integer DEFAULT NULL
);

DROP TABLE IF EXISTS "pet";
CREATE TABLE "pet" (
	"id" serial PRIMARY KEY,
	"name" varchar(255) NOT NULL,
	"breed" varchar(255) NOT NULL,
	"owner_id" serial NOT NULL,
	"weight" integer NOT NULL
);

INSERT INTO "public"."user"("username", "password", "full_name", "phone_num", "email", "sec_level", "avail_start", "avail_end", "continent_origin") 
VALUES('AdminRose', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Rose', '6128005555', 'rose@horns.com', '2', '2022-10-29', '2022-10-31', 'US'), 
RETURNING "username", "password", "full_name", "sec_level", "avail_start", "avail_end", "flight_event_id", "signed_contract", "paid", "covid_free", "continent_origin";


