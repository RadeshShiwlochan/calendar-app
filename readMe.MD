Creating a Calendar App: Coding challenge for TTP.

Tools used for this Project:
- Nodejs
- Express
- MongoDB
- ejs
- css
- bootstrap

Goal: create one month, October and be able to schedule events and store to a database.

To run this app, you need to have Nodejs and MongoDB installed. Follow these general
Directions to install this app.

1. Make an empty directory where you want to store the project.

2. Clone the project with the following: 

   git clone https://github.com/RadeshShiwlochan/calendar-app.git

3. Navigate to the folder you cloned the project into.

4. Use the following code to install the dependencies: 
    
    npm install

5. In a separate window terminal, run mongod with the following:

    mongod

6. Next open a third window on the terminal, and type the following:

   mongo

7.Drop any databases named calendar, by the following: 
 
    show dbs
    use calendar
    db.dropDatabase();

  This avoids any conflicts with any pre-existing databases.
  
8. Go back to the terminal window with the project and run the project by typing:

   node app.js

   This should run the program. The program should connect to the database and make a collection
   called profile

 General Information on this project

- This project is still under development and as such many of the CSS styling is not done properly.
  I apologize for the bad design but I will continue to work until the app is complete.           