# Azure_School_System


# Setup

- Install Node JS
- Install Git bash - https://git-scm.com/download/win
- cd <<project folder>
- Clone the repo - git clone https://github.com/dbprojects/Azure_School_System.git
- npm start

# VSD setup

- Download the latest version
- Install the extensions from the market place - https://developer.okta.com/blog/2019/05/08/top-vs-code-extensions-for-nodejs-developers
- Bracket Pair Colorizer 2
- npm commands for VS code
- npm Intellisense
- ES Lint
- 
# Dev commands for node js


npm install --save-dev eslint

npm install --save body-parser


# Sequelizer
npm install sequelize --save
npm install -g sequelize-cli
sequelize init


sequelize model:create --name Users --attributes "dn:string, registerType:string, profileType:string, language_id:integer,field1:string, field2:string, field3:string, setcurr:string, lastorder:date,lastsession:date,registrationCancelDt:date, prevLastSession:date,personalizationId:string"

