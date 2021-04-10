import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri:"https://graphqlzero.almansi.me/api",
    cache:new InMemoryCache(),
});

// @ts-ignore
export default client