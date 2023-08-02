import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const container = document.getElementById('app');

const BASE_URL = process.env.REACT_APP_BASE_URL;
const gqlOnline = '';

export const client = new ApolloClient({
  // Online Version delete code below if its not working
  // uri: `${gqlOnline}`,
  // Local Version uncomment and use the local GraphQL server
  uri: 'http://localhost:8081/',
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
    `,
  })
  .then((result) => console.log(result));

const root = createRoot(container);
root.render(<App tab="home" />);
