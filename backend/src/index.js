const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const { resolvers } = require('./resolvers');
const server = new GraphQLServer({
	typeDefs: 'src/schema.graphql',
	resolvers,
	context: { prisma },
});

server.start(
	{
		cors: {
			origin: 'http://localhost:3000',
		},
	},
	() => console.log('server running on http://localhost:4000')
);
