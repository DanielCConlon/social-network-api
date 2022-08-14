# social-network-api

github url: https://github.com/DanielCConlon/social-network-api

## Table-of-Contents

- [User Story](#user-story)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Requirements](#requirements)

## [User Story](#table-of-contents)

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## [Description](#description)

Build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM

## [Installation](#table-of-contents)

Youa re going to need to run npm init. Then you will need to run npm install express mongoose. This will get you all the packages you need in order to run this API.

## [Usage](#table-of-contents)

- Clone the repo into
- Open the command line
- Run npm init
- Run npm install express mongoose
- Run npm start tp start the application
- use the CRUD routes to use the social network api

## [Requirements](#table-of-contents)

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
