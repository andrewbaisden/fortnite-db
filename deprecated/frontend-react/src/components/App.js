import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from '../index';
import FortniteWeapons from './FortniteWeapons';
class App extends Component {
    render() {
        return(
            <ApolloProvider client={client}>
                <FortniteWeapons />
            </ApolloProvider>
            
        )
    }
}

export default App;