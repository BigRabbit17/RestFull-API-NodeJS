# RestFull-API-NodeJS-MongoDB

[![CI Status](https://travis-ci.org/ranit-geek/RestFull-API-NodeJS.svg)](https://travis-ci.org/ranit-geek/RestFull-API-NodeJS)
[![Dependency Status](https://david-dm.org/ranit-geek/RestFull-API-NodeJS.svg)](https://david-dm.org/ranit-geek/RestFull-API-NodeJS)


REST API server implementation built on top `Node.js` and `Express.js` with `Mongoose.js` for `MongoDB` integration.

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
node app.js
```
### Run server with docker
```sh
# Make sure you clone the repo and docker compose is installed in the machine
# By default the port is 3000
docker-compose up
```

### Endpoints
**{get} http://localhost:3000/api/courses/** : This will fetch all the courses from MongoDB with a rate limiter.  <br />

**{post} http://localhost:3000/api/courses/** : This endpoint will allow user to add courses. Request should be made with respect tp proper Json contract.<br />
```sh
# contract example
{
  "name": "Machine Learning",
  "tags": ["AI","ML"],
  "author": "peter",
  "ispublished": false,
}
```
**{put} http://localhost:3000/api/courses/{id}** : This endpoint will allow user to update courses. Request should be made with respect tp proper Json contract.<br />
**{delete} http://localhost:3000/api/courses/** : This will allow user to delete  courses from MongoDB  <br />

## Modules used

Some of non-standard modules used:

* [express](https://www.npmjs.com/package/express)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [joi](https://www.npmjs.com/package/joi)
* [config](https://www.npmjs.com/package/config)
* [morgan](https://www.npmjs.com/package/morgan)
* [helmet](https://www.npmjs.com/package/helmet)
* [chai](https://www.npmjs.com/package/chai)

## Current TODO
* Integration of authorization
