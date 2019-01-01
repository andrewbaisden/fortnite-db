import '@babel/polyfill/noConflict';
import { GraphQLServer } from 'graphql-yoga';
import db from './db';
import Query from './resolvers/Query';

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
    },
    context: {
        db
    }
})

const options = {
    port: process.env.PORT || 8000
}

server.start(options, ({port}) => {
    console.log(`Server running on port ${port}`)
})