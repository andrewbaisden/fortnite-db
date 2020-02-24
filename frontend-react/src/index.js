import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const client = new ApolloClient({
	uri: `${BASE_URL}`
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
