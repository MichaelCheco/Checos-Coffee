const Query = {
	items: (parent, args, ctx, info) => {
		return ctx.prisma.items({
			skip: args.skip,
			first: args.first,
		});
	},
	item: (parent, { id }, ctx, info) => {
		return ctx.prisma.item({ id });
	},
};

module.exports = {
	Query,
};
