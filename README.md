## Command palette API:

### Description:
This is a very simple api with a single function that allows you to get data from a database.
It uses a NoSQL database (in this case MongoDB) to make it as small as possible.

### How to use:
The possible endpoints are:
- /api/ - This is the main (and in fact the only) endpoint, it returns all the data in the database based on the search term you pass along.

### Time spent:
Total time: 2 hours
- 0.5 hours for the setup of the database and the api.
- 0.5 hours for the setup of typescript in the project.
- 1 hour for the setup of the endpoints and the connection to the database.

### Issues encountered:
- I spent nearly half an hour trying to figure out how text indexes can be implemented in MongoDB. I found out that you can't call the Model's relation and createIndex (Results.createIndex()), but you have to take it's collection and call createIndex on that (Results.collection.createIndex()). This is because the Model's relation is a mongoose object, and createIndex is a function of the MongoDB driver.

The documentation only shows the option to call db.collection.createIndex(), but not the option to call Model.collection.createIndex(). This is because the documentation is for the MongoDB driver, and not for mongoose. I found the solution on stackoverflow.

### Hosting:
I decided to host the api on Vercel, because of it's ease of use as well as the possibility to easily deploy this as a serverless function despite it useing nodeJS/Express. The api can be found on https://command-palette-api.herokuapp.com/api/

### Improvements / scalability:
- Add more endpoints to allow for more complex queries and filtering.
- Make use of a structured database (on e.g. Planetscale) to structure the data better. in case of scalability.
