import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from '../index';
import Fortnite from './Fortnite';

class App extends Component {
    render() {
        return(
            <ApolloProvider client={client}>
                <Fortnite />
            </ApolloProvider>
            
        )
    }
}

export default App;