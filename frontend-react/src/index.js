import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const gqlOnline = 'https://fortnite-db-backend-graphql.herokuapp.com/';

export const client = new ApolloClient({
	// Online Version delete code below if its not working
	uri: `${gqlOnline}`

	// Local Version uncomment and use the local GraphQL server
	// uri: "http://localhost:8000"
});

client
	.query({
		query: gql`
			query {
				fortniteweaponsfilterweaponitemrarity(query: "Legendary") {
					id
					name
					information {
						damage
					}
				}
			}
		`
	})
	.then(result => console.log(result));

ReactDOM.render(<App />, document.querySelector('#root'));
