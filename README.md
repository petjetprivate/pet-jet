
# PetJet
<a href="https://www.heroku.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

### Prerequisites

Node.js, PostgreSQL, Nodemon

### Installation

1. Create a database named pet-jet
2. The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries
3. Open editor of choice and run an npm install
4. Run npm run server in your terminal
5. Run npm run client in your terminal, which will open a new browser tab for hatclub.

## Create database and table

Create a new database called `pet-jet` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

If you would like to name your database something else, you will need to change `pet-jet` to the name of your new database name in `server/modules/pool.js`

## Acknowledgements

Thank you to Chris Nelson for trusting us with this project. Thank you to Matt Black, and everyone at Prime Digital Academy, for not only teaching us how to code this project, but also how to learn technology as it develops.

## Acknowledgements

Thank you to Chris Nelson for trusting us with this project. Thank you to Matt Black, and everyone at Prime Digital Academy, for not only teaching us how to code this project, but also how to learn technology as it develops.

## Contacts

<a href="https://www.linkedin.com/in/amber-sorenson-420a89225/">Amber Sorenson</a>
