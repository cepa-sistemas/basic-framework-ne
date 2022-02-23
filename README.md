# Vistula Holdings basic prototype

This basic prototype is a functional Nodejs and Express web application for supporting developers to implement a web app project and not starting from the scratch.
Linux development: The version of NodeJs is 10.22.1
Windows development: The version of NodeJs is 13.14.0
The web app uses MariaDb as a database.

## Installation

Assumptions:
Any version of NodeJs, MariaDB, Visual Studio and Git are installed previously.

NodeJs              https://nodejs.org/en/
MariaDB             https://mariadb.org/
Express generator   https://expressjs.com/en/starter/generator.html
Handlebars          https://handlebarsjs.com/
Github              https://github.com/


In Linux, open a terminal to clone and install the prototype.
In Windows, open a git bash terminal to clone and install the prototype.

### Database
```mariadb

Use the txt files located in the models folder. 

To create the database use the file [2022-01-10-backup-sample-db.sql.txt]

The command to restore a data is:
mysqldump --user=[user] --password=[password] --databases sample  < ~/Home/Public/<local folder>-form/models/[file.txt]

```

### Web application
```bash
To install the libraries type
npm install

Create a .env file in the root folder with the labels

DB_HOST='web server'
DB_DATABASE='database'
DB_USER='user'
DB_PASSWORD='Password'
DB_PORT=3306
SERVER_PORT=3500
ENVIRONMENT=PRODUCTION
IMAGE_LOGO=logo50-50.png
WITH_PARAMETER=false
```

## Running the prototype

```nodejs
npm start

With .env file
# BROWSER
type http://localhost:3500/start

Without .env file
# BROWSER
type http://localhost:3000/start


```

## Improvements


## Contributing
Pull requests are welcome. For major changes, please contact Alfredo Celso to have a chat about the changes to implement.
Tests module are not include as is a prototype app.

## License
[Vistula Holdings](https://www.vistula-holdings.com/)

## NodeJS dist
https://nodejs.org/dist/