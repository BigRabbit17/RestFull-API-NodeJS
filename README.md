# RestFull-API-NodeJS-MongoDB

`NodeAPI` is REST API server implementation built on top `Node.js` and `Express.js` with `Mongoose.js` for `MongoDB` integration.

This is updated code that follows [RESTful API With Node.js + MongoDB](https://aleksandrov.ws/2013/09/12/restful-api-with-nodejs-plus-mongodb) article.

## Running project

## Manual

You need to have [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com) installed.

### Node setup on macOS

```sh
# Update Homebrew before installing all dependencies
brew update

# Install Node (+npm) with Homebrew
brew install node

# Install npm dependencies in project folder
npm install
```

### MongoDB setup on macOS

```sh
# Install MongoDB with Homebrew
brew install mongodb

# Create directory for MongoDB data
mkdir -p ./data/mongo

# Run MongoDB daemon process with path to data directory
mongod --dbpath ./data/mongo
```

### Run server

```sh
npm start
# alias for
node bin/www
```


### Run server

```sh
node app.js
```
### Endpoints
**{get} /courses** : This will fetch all the courses from MongoDB with a rate limiter.  <br />

**{post} /courses** : This endpoint will allow user to add courses. Request should be made with respect tp proper Json contract.<br />
```sh
# contract example
{
  "name": "Machine Learning",
  "tags": ["AI","ML"],
  "author": "peter",
  "ispublished": false,
}
```
**{put} /courses** : This endpoint will allow user to update courses. Request should be made with respect tp proper Json contract.<br />
**{delete} /courses** : This will allow user to delete  courses from MongoDB  <br />

## Modules used

Some of non-standard modules used:

* [express](https://www.npmjs.com/package/express)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [joi](https://www.npmjs.com/package/joi)
* [config](https://www.npmjs.com/package/config)
* [morgan](https://www.npmjs.com/package/morgan)
* [helmet](https://www.npmjs.com/package/helmet)

## Current TODO
* Integration of authorization
