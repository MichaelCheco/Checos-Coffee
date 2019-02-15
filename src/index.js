const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Query {
    info: String!
  }
`;

const resolvers = {
	Query: {
		info: () => 'Hey',
	},
};

const server = new GraphQLServer({
	typeDefs,
	resolvers,
});

server.start(() => console.log('Server running on http://localhost:4000'));
