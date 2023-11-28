## Command palette API:

This is a very simple api with a single function that allows you to get data from a database.
It uses a NoSQL database (in this case MongoDB) to make it as small as possible.

The possible endpoints are:
- /api/ - This is the main endpoint, it returns all the data in the database based on the search term you give it.