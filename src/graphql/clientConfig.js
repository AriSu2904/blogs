import {ApolloClient, InMemoryCache, HttpLink, from} from "@apollo/client";
import {onError} from "@apollo/client/link/error";

const errorLink = onError(({graphqlError, networkError}) => {
    if (graphqlError) {
        graphqlError.map(({message, location, path}) => {
            alert(`GraphQL error: ${message}`);
        })
    }
});

const link = from([
    errorLink,
    new HttpLink({uri: "http://localhost:3000/graphql"}),
]);

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});