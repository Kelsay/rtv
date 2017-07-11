## Running Back End app:
Add logreader.io as alias for localhost
Add LogBackEnd to the IIS 

## Building Front End app:
Navigate to the project and type

` npm install
` npm build

## Running Front End app:
Production: Add it to IIS with /dist folder as root
Devel: navigate to the project and use 'npm start' to run WebpackDevServer 


## Notes
Analysed the provided log file and create a LogEntryModel class based on the file data.

Used Swagger to design an endpoint that will return the data - collection of log entries.

Implemented LogFileReader to read the file data.

Implemented API Endpoint to serve the data.

Added Cors supprto to ensure the API can be accessed from the FE app.


The most interesting part in the Back End as the structure of the file. It looks like lines are separated by spaces, but there are also special cases with fields containing spaces, enclosed in "" or [].

I've chosen to break them down using regular expressions and implemented this method, but it was not working correctly for the case of strings enclosed in double quotes containing parens [].
Therefore I had to implement more thorough and manual method.

I have skipped pagination as it was not within the scope of the task.


For the Front End I have implemented a simple JavaScript app.

I have used:

- Node and npm
- React, Redux and a React-Redux bridge
- Webpack with WebpackDevServer for packaging
- Babel for translating ES6 and JSX files
- Eslint for enforcing strict checking for better code quality
- Sass for the styles
- Bootstrap for quickly adding styles


