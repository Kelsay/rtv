## Running:
Add logreader.io as alias for localhost
Add LogBackEnd to the IIS 

## Building Front End app:
Navigate to the project and type
npm install
npm build

## Running Front End app:
Production: Add it to IIS with /dist folder as root
Devel: navigate to the project and use 'npm start' to run WebpackDevServer 


## Analyse the provided log file and create a LogEntryModel class based on the file data
Use Swagger to design an endpoint that will return the data - collection of log entries
Implement LogFileReader to read the data
Implement API Endpoint to serve the data