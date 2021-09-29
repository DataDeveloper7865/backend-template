BackEnd Template for Express Server using MongoDB as persistence

This Backend Application shows the common routes for all REST operations on a resource

See the Insomnia Request Collection to run and test the server

CREDIT TO: BezKoder - https://www.bezkoder.com/node-express-mongodb-crud-rest-api/#Update_an_object

DELETE ALL ITEMS - DELETE - http://localhost:8080/api/items/
DELETE AN ITEM - DELETE - http://localhost:8080/api/items/{INSERT_ID_HERE}
UPDATE AN ITEM - PUT - http://localhost:8080/api/items/{INSERT_ID_HERE} - With JSON Request Body
FIND AN ITEM - GET - http://localhost:8080/api/items/{INSERT_ID_HERE}
FIND ALL PUBLISHED ITEMS - GET - http://localhost:8080/api/items/published
FIND ALL ITEMS - GET - http://localhost:8080/api/items/
ADD AN ITEM - POST - http://localhost:8080/api/items/ - With JSON Request Body

<h1> Quick Start </h1>

Pre - check
<h3>1. Ensure MongoDB is downloaded on local machine</h3>
<p>Found Here: https://www.mongodb.com/try/download/community </p>
<h3>2. Ensure Node.js is downloaded on local machine</h3>
<p>Found Here: https://www.mongodb.com/try/download/community  </p>

Post - Check
<h3>1.  Clone This Repo </h3>
<h3>2.  cd into backend-template/ </h3>
<h3>3.  Run 'npm i' to download all dependencies </h3>
<h3>4.  Run 'npm start' to run the server </h3>
<h3>5.  Use insomnia request collection to ensure </h3>