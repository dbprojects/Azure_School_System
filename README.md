# Azure_School_System


# Setup

- Install Node JS
- Install Git bash - https://git-scm.com/download/win
- cd <<project folder>
- Clone the repo - git clone https://github.com/dbprojects/Azure_School_System.git
- npm start


# Git - You can't push to remote repo without these two below
git config --global user.name DB Patil
git config --global user.email dbprojects@gmail.com

# VSD setup

- Download the latest version
- Install the extensions from the market place - https://developer.okta.com/blog/2019/05/08/top-vs-code-extensions-for-nodejs-developers
- Bracket Pair Colorizer 2
- npm commands for VS code
- npm Intellisense
- ES Lint
- Code Spell Checker!
- Auto Close Tag
- Path Intellisense
- Markdownlint

# MySQL

Need to change the password using the below SQL
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'


## Dev commands for node js


npm install --save-dev eslint

npm install --save body-parser


# Sequelizer
npm install sequelize --save
npm install -g sequelize-cli
sequelize init


sequelize model:create --name Users --attributes "dn:string, registerType:string, profileType:string, language_id:integer,field1:string, field2:string, field3:string, setcurr:string, lastorder:date,lastsession:date,registrationCancelDt:date, prevLastSession:date,personalizationId:string"

# Run migration 
npx sequelize-cli db:migrate