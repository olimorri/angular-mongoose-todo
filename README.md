Key Points:

## Backend - get and post

## Dependencies to download:
- Body parser
- koa
- koa-router
- koa-static
- mongoose

## index.js (main)

Go through the file, making sure to initialise all the dependancies we need.

Set a port and call the app.use middleware we need

Listen to the port, connect to the db and set the correct db name. Console log to check that everthing is up and running correctly.

## router.js

Initialise Router, then define router as a new Router and import any controller we need (we might need ot do this later).

Outline router logic (will ned to be completed after the controllers have been sorted)

Export router.

## create models folder

## newModel.js

Initialise mongoose and create schema - give schema a lowercase name.

Create an instance of mongoose.model with an uppercase version of the name as the const and the dbName and schemaName as args.

Export created const.

## new-controller.js

Import newModel

export functions that we want to use in the routing logic.

Remember that with koa we use ctx as the args and check if functions need to be async await - especially if referencing a database.

## router.js

Import necessary functions from the controllers file and doublecheck.

## postman - use this to check everything is ok

## Angular - connection to backend + get and post

