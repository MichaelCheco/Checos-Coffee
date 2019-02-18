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
	// signup: async (parent, args, ctx, info) => {
	// 	args.email = args.email.toLowerCase()
	// 	const password = await bcrypt.hash(args.password, 10)
	// 	const user =
	// }
};

module.exports = {
	Mutation,
};
