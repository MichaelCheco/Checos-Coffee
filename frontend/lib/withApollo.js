import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { GRAPHQL_URL } from '../configs';

export default withApollo(
	({ ctx, headers, initialState }) =>
		new ApolloClient({
			uri: GRAPHQL_URL,
			cache: new InMemoryCache().restore(initialState || {}),
			request: operation => {
				operation.setContext({
					fetchOptions: {
						credentials: 'include',
					},
					headers,
				});
			},
		})
);
