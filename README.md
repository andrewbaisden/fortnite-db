# Fortnite db

A Fortnite database app for checking weapons and items.

![Fortnite DB App](https://res.cloudinary.com/d74fh3kw/image/upload/v1582569356/fortniteDB_usn5b1.png 'Fortnite DB App')

## Installation and Setup

Download/Clone this repo to your local machine. Navigate to the root folders and install the dependencies.

cd backend-graphql `npm install`

cd backend-rest `npm install`

cd frontend-react `npm install`

### Running the App

There are three servers two for backend and one for the frontend.

#### Get the GraphQL API working

cd frontend-react and open the index.js file

```javascript
export const client = new ApolloClient({
	// Online Version delete code below if its not working
	uri: `${gqlOnline}`

	// Local Version uncomment and use the local GraphQL server
	// uri: "http://localhost:8000"
});
```

cd backend-rest `npm run servers`

The React App is running locally on port 3000 this is the url you need to use to see the app running [http://localhost:3000/](http://localhost:3000/)

### Backend Server Routes

The REST server is running locally on port 5000 [http://localhost:5000/](http://localhost:5000/)

The GraphQL server is running locally on port 8000 [http://localhost:8000/](http://localhost:8000/)
