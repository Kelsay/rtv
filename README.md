## Running Back End:
Add logreader.io as alias for localhost
Add LogBackEnd to the IIS 

## Building Front End app:
Navigate to the project and type
npm install
npm build

## Running Front End app:
Production: Add it to IIS with /dist folder as root
Devel: navigate to the project and use 'npm start' to run WebpackDevServer 


## Steps
Analyse the provided log file and create a LogEntryModel class based on the file data
Use Swagger to design an endpoint that will return the data - collection of log entries
Implement LogFileReader to read the data
Implement API Endpoint to serve the data

The most challenging parte here was the structure of the file. It looks like it is separated by spaces, but there are also special cases with fields containing spaces, enclosed in "" or []
I've chosen to break them down using regular expressions.