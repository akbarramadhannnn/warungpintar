import { ApolloClient, InMemoryCache } from '@apollo/client';

const Client = new ApolloClient({
  uri: 'https://api.apito.io/secured/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer 7nCibTEox9ha7A7i9tugcn9LnRiAOD6AIqKQXrmTTIUx4azhrQjJOHq3K5tAcGCKbC4Vjk8RFrrRQOOaCsUN4UkRk3nx6JGcRNY5QSiVxKahP68Jtyj0VxNO6QmOL0jyFZEzq9Ot5TPBZZlxB1hW7qr4AavZ4wzZJtY`,
  },
});

export default Client;
