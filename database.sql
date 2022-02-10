
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
	"phone_num" varchar(15) DEFAULT NULL,
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
	"USTeamLead" integer DEFAULT NULL,
	"EUTeamLead" integer DEFAULT NULL
);

CREATE TABLE "pet" (
	"id" serial PRIMARY KEY,
	"name" varchar(255) NOT NULL,
	"breed" varchar(255) NOT NULL,
	"owner_id" serial NOT NULL,
	"weight" integer NOT NULL
);

INSERT INTO "public"."user"("username", "password", "full_name", "phone_num", "email", "sec_level", "avail_start", "avail_end", "continent_origin") 
VALUES('AdminRose', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Rose', '6128005555', 'rose@horns.com', '2', '2022-10-29', '2022-10-31', 'US'), 
('Joe', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Joseph', '5128806000', 'joe@joe.com', '2',  '2022-09-17', '2022-09-30', 'EU'),
('Mary', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Marietta', '5559990000', 'marietta@georgia.gov', '1', '2022-03-19', '2022-11-11', 'US'),
('Malcolm', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Malcolm', '55554444', 'little@middle.com', '0', '2022-05-01', '2023-05-31', 'US'),
('OmahaTodd', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Toddrick von Waddingham', '1234441233', 'omaha@todd.com', '0', '2022-04-11', '2022-12-31', 'EU'),
('Denice', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Denice Power', '6053526834', 'denice@knees.com', '2022-03-17', '2023-03-17', '0', 'EU'),
('WhiskyBill', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Whisker Billiam', '6059521619', 'fan@twins.com', '0', '2022-09-01', '2022-10-20', 'US'),
('Jerome', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Jerome Horton', '6080059944', 'jerome@horton.com', '2', '2022-04-04', '2022-04-30', 'US'),
('Amber', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Amber Sorenson', '9208785656', 'amber@sorenson.com', '2', '2022-08-01', '2022-08-31', 'US'),
('Zane', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Zane Klausing', '888300033', 'zane@klausing.com', '2', '2023-01-01', '2023-03-31', 'US'),
('TheADog', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Adam Iverson', '5123528716', 'adam@iverson.com', '2', '2022-03-01', '2022-05-31', 'US'),
('Trooms', '$2a$10$TZ3rW70oJIgNQ/2ulfsutuuotLCEo42USxgfiSBxSqVPf6gqq2jdG', 'Harry S. Truman', '1800333444', 'harry@truman.com', '0', '2022-02-14', '2024-01-01', 'US')
RETURNING "username", "password", "full_name", "sec_level", "avail_start", "avail_end", "flight_event_id", "signed_contract", "paid", "covid_free", "continent_origin";


