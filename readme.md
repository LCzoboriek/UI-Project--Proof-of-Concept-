Installation Instructions for Running Locally
----------------------------------------------------------------------------------------------
1) Pull the git repository to local storage

2) Install postgres onto the local computer following the link here https://www.postgresql.org/download/

3) Run the data-RZ2tJ4HDjt7mMAP7rxowA.sql file on the SQL query to generate the tables and data required for the project to run. Then edit
the db.js file located within the project and add the relevant connection details so the program knows where the database is located.

4) Open up a command line terminal and navigate to UI-Project-App using the cd command

5) Run the command npm install, this looks at the package.json file within the repository and then installs all required
   modules for the program to work
   
6) Start up the postgres database that you previously created using the data-RZ2tJ4HDjt7mMAP7rxowA.sql file

7) Run the program from terminal using the command 'npm run dev'

8) Navigate to your web browser and input 'localhost:4000' to run the program
