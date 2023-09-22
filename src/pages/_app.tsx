import { ApolloProvider } from '@apollo/client';
import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { globalStyles } from '@/shared/styles';
import client from '../lib/apollo';

interface MyAppProps extends AppProps {
    Component: NextComponentType<NextPageContext, {}>;
}

function MyApp({ Component, pageProps }: MyAppProps) {
    return (
        <ApolloProvider client={client}>
            {globalStyles}
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;
