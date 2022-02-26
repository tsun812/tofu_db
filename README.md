# Tofu DB

## Project overview

TofuDB is a customizable database builder with an interactive UI based on Ruby on Rails and React. We made this for users who want to create their own simple database driven website, allow them to manage database structure and control how the data is presented. No coding needed!

## Getting started
Install dependencies on the Client Server:
```sh
npm install
```
Running Webpack Development Server:
```sh
npm start
```
we'll need to run both Client Server and Api Server to get our application working. For installation Api Server, please head over to README file of https://github.com/tsun812/tofu_db_api 

After both servers are installed and running, you should be able to view Tofu DB in http://localhost:8000/

## Feature

#### Database UI
User could dynamically generate database based on their need.
- Create/modify/delete row
- Create/modify/delete column
- Create/modify/delete cell value

!["DB UI"](https://github.com/tsun812/tofu_db/blob/master/docs/DBUI.gif)

#### Settings panel

Preview of app with customizable settings where user could decide how the data is presented:

- Modify app name/header
- Add/modify image banner
- Sort/filter results
- Change display themes

!["Settings"](https://github.com/tsun812/tofu_db/blob/master/docs/Settings.png)

<b>Settings panel overview</b>

Details page contains data related to this specific item.

!["Details"](https://github.com/tsun812/tofu_db/blob/master/docs/Details.gif)

<b>Details</b>

!["SortFilter"](https://github.com/tsun812/tofu_db/blob/master/docs/SoftFilter.png)

<b>Sort by dates, filter by keywords</b>

#### General applications

###### Dictionary

!["Dictionary"](https://github.com/tsun812/tofu_db/blob/master/docs/Dictionary.png)

###### Real estate directory

!["Real estate"](https://github.com/tsun812/tofu_db/blob/master/docs/Realestate.png)

###### Catering website

!["Catering"](https://github.com/tsun812/tofu_db/blob/master/docs/Catering.png)
