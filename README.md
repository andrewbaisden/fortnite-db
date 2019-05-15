# Fortnite db

A Fortnite database app, for checking weapons and items.

![alt text](https://fortnite-db-backend-rest.herokuapp.com/static/assets/fortniteDB.png 'Fortnite DB App')

## Installation and Setup

Download/Clone this repo to your local machine. Navigate to the root folders and install the dependencies.

cd backend-graphql `npm install`

cd backend-rest `npm install`

cd frontend-javascript `npm install`

cd frontend-react `npm install`

### Running the App

There are four servers, two for backend and two for the frontend. You only need the REST and GraphQL server, for the backend to work. And either the Javascript, or React frontend server as they are the same.

The only difference between the frontend versions, is the framework. One built in Vanilla JS, and the other in React. All the servers are running on different ports, so you can see the App in Vanilla JS and React at the same time if you want to.

#### REST API

cd backend-rest `npm run start`

The backend server is running locally, on port 5000 [http://localhost:5000/](http://localhost:5000/)

#### GraphQL API

cd backend-graphql `npm run dev`

The backend server is running locally, on port 8000 [http://localhost:8000/](http://localhost:8000/)

#### React App

cd frontend-react `npm run start`

The App is running locally, on port 3000 [http://localhost:3000/](http://localhost:3000/)

### Production

The Fortnite db App is online on these platforms.

[Netlify - Fortnite db App](https://fortnite-db-frontend-react.netlify.com/)

[Zeit Now - Fortnite db App](https://build-ekz91xsmk.now.sh/)
