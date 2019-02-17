const Mutation = {
	createItem: (parent, args, ctx, info) => {
		return ctx.prisma.createItem({
			...args,
		});
	},
	updateItem: (parent, args, ctx, info) => {
		const updates = { ...args };
		delete updates.id;
		return ctx.prisma.updateItem({
			where: { id: args.id },
			data: updates,
		});
	},
	deleteItem: (parent, { id }, ctx, info) => {
		return ctx.prisma.deleteItem({ id });
	},
};

module.exports = {
	Mutation,
};
