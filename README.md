# Tofu DB

## Project overview

TofuDB is a customizable database builder with an interactive UI based on Ruby on Rails and React. We made this for users who want to create their own simple database driven website, and allow them to manage database structure and control how the data is presented. No coding needed!


## Getting started
Install dependencies on the Client Server:
```sh
npm install
```
Running Webpack Development Server:
```sh
npm start
```
we'll need to run both Client Server and Api Server to get our application working. For Api Server, please head over to https://github.com/tsun812/tofu_db_api <br />

In a new terminal window, install the dependencies of Api Server by running:
```sh
bundle install
```
Running Api Server:
```sh
rails s
```

After setting up Api server, you should be able to view Tofu DB in http://localhost:8000/
