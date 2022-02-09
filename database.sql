
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
	"full_name" varchar(255) NOT NULL,
	"phone_num" varchar(11) DEFAULT NULL,
	"email" varchar(255) DEFAULT NULL,
	"sec_level" integer NOT NULL,
	"avail_start" DATE DEFAULT NULL,
	"avail_end" DATE DEFAULT NULL,
	"flight_event_id" integer DEFAULT NULL,
	"signed_contract" BOOLEAN DEFAULT NULL,
	"paid" BOOLEAN DEFAULT NULL,
	"covid_free" BOOLEAN DEFAULT NULL,
	"continent_origin" VARCHAR(2) NOT NULL
);

CREATE TABLE "flight_event" (
	"id" serial PRIMARY KEY,
	"name" varchar(255) NOT NULL,
	"dep_date" DATE DEFAULT NULL,
	"ret_date" DATE DEFAULT NULL,
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

INSERT INTO "public"."user"("username", "password", "full_name", "sec_level", "continent_origin") 
VALUES('AdminRose', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Rose', '2', 'US'), 
('Joe', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Joseph', '2', 'EU'),
('Mary', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Marietta', '1', 'US'),
('Malcolm', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Malcolm', '0', 'US'),
('OmahaTodd', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Toddrick von Waddingham', '0', 'EU'),
('Denice', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Denice Power', '0', 'EU'),
('WhiskyBill', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Whisker Billiam', '0', 'US'),
('Jerome', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Jerome Horton', '2', 'US'),
('Amber', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Amber Sorenson', '2', 'US'),
('Zane', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Zane Klausing', '2', 'US'),
('TheADog', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Adam Iverson', '2', 'US'),
('Trooms', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Harry S. Truman', '0', 'US')
RETURNING "username", "password", "full_name", "sec_level", "avail_start", "avail_end", "flight_event_id", "signed_contract", "paid", "covid_free", "in_group", "continent_origin";


