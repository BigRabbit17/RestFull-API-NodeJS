const fetch = require('node-fetch');
const chai = require('chai');
const assert= chai.assert
const myBody ={
    "name": "Machine Learning",
    "tags": ["AI","ML"],
    "author": "peter",
    "ispublished": false
  }
const url = 'http://localhost:3000/api/courses/'
async function userAction(URL)
{
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(myBody),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); 
    assert.equal(myJson.name,myBody.name)
    assert.equal(myJson.author,myBody.author)
  }

  userAction(url)
  