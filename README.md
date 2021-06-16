# e-commerce-back-end

[Link to video demonstration of application](https://drive.google.com/file/d/1ARDisqydgyB3bUVvNa4mzKBcyYFW4j__/view)

## Description

This application lets users reach all endpoints for an e-commerce app. It demonstrates the ability to read, update, create, delete products, tags, and categories with influence and relationships on each other from a relational database

## Table of Contents


- [Installation](#installation)
  
- [Usage](#usage)
  
- [Questions](#questions)

## Installation

This app requires Node and NPM to be installed to work.

You will also need a MySQL server to run the schema file on.


First you will need to clone or download this repository to your machine.

Then in your terminal, while on the repo folder, run the following command

```
npm install
```

Be sure to create a .env file in the repo and add the following, filling out the lines as needed per your database info.
In this case the db name will be ecommerce_db

```
DB_USER=
DB_PW=
DB_NAME=
```

Log in to your MySQL server, and run the schema.sql file to create your DB.
Then, if you choose you may seed the DB with the seeds.sql file.

This can be done also with the following command
```
npm run seed
```




Your applicationa and all its dependencies should now be installed

## Usage

This can be used by following these steps

While on the repo folder in your terminal, run the following command to start the application

```
npm start
```

Insomnia core is recommended to test each endpoint as this application has no functional front end currently.

[Here is a video demonstration of the application in use](https://drive.google.com/file/d/1ARDisqydgyB3bUVvNa4mzKBcyYFW4j__/view)

## Questions

You can find more of my work at [BTDubbzzz-gitHub](https://github.com/BTDubbzzz).

If you have any questions about the repo, open an issue or contact me directly at wright.blake.t@gmail.com
