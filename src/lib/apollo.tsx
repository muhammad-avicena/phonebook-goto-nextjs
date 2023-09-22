import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://wpe-hiring.tokopedia.net/graphql',
    }),
    cache: new InMemoryCache(),
});

export default client;
