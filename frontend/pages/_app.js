import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import withApollo from '../lib/withApollo';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		// this exposes the query to the user
		pageProps.query = ctx.query;
		return { pageProps };
	}
	render() {
		const { Component, pageProps, apollo } = this.props;

		return (
			<Container>
				<ApolloProvider client={apollo}>
					<ApolloHooksProvider client={apollo}>
						<Component {...pageProps} />
					</ApolloHooksProvider>
				</ApolloProvider>
			</Container>
		);
	}
}

export default withApollo(MyApp);
