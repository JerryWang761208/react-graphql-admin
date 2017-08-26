import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import typeDefs from './Schema/index';
import resolvers from './Resolvers/index';

import Cat from './Database/index';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,

});

const PORT = 3000;
const app = express();


//FIXES CORS ERROR
const whitelist = [
  'http://localhost:3001',
];
const corsOptions = {
  origin: function(origin, callback){
      let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context:{ Cat } }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql'}));
app.listen(PORT);