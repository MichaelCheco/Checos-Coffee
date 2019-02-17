const Query = {
	items: async (parent, args, ctx, info) => {
		const where = args.filter
			? {
					OR: [
						{ description_contains: args.filter },
						{ title_contains: args.filter },
					],
			  }
			: {};
		const items = await ctx.prisma.items({
			where,
			skip: args.skip,
			first: args.first,
		});
		const count = await ctx.prisma
			.itemsConnection({
				where,
				skip: args.skip,
			})
			.aggregate()
			.count();
		return {
			items,
			count,
		};
	},
	item: (parent, { id }, ctx, info) => {
		return ctx.prisma.item({ id });
	},
};

module.exports = {
	Query,
};
