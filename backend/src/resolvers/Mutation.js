const Mutation = {
	createItem: (parent, args, ctx, info) => {
		return ctx.prisma.createItem({
			...args,
		});
	},
};

module.exports = {
	Mutation,
};
