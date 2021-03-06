
# PetJet
<a href="https://www.heroku.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

### Deployment

<a href="https://pet-jet.herokuapp.com/#/home">PetJet on Heroku</a>

### Prerequisites

Node.js, PostgreSQL, Nodemon

### Screenshots
![Screen Shot 2022-02-18 at 10 38 17 AM](https://user-images.githubusercontent.com/88250950/154727163-2c1d08c1-36f6-48e6-ab74-d8b6320655c4.png)
![Screen Shot 2022-02-18 at 10 37 41 AM](https://user-images.githubusercontent.com/88250950/154727169-faa6f6d2-483f-4101-a5a8-3646dce55c5d.png)
![Screen Shot 2022-02-18 at 10 37 19 AM](https://user-images.githubusercontent.com/88250950/154727173-972b8db6-82dc-4651-b9c5-207dbd08e656.png)


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

## Contacts

<a href="https://www.linkedin.com/in/amber-sorenson-420a89225/">Amber Sorenson</a>
<a hrerf="https://www.linkedin.com/in/jerome-d-horton/">Jerome Horton</a>
<a href="https://www.linkedin.com/in/zane-klausing-805347225/">Zane Klausing</a>
<a href="https://www.linkedin.com/in/adam-iverson-7ba890a4/">Adam Iverson</a>
