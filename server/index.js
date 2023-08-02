const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use(cors());

// Item img Routes
app.use('/static', express.static(path.join(__dirname, 'src/')));

app.get('/', (req, res) => {
  res.send(`GraphQL endpoint at http://localhost:${port}/graphql`);
});

app.use(
  '/graphql',

  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);
