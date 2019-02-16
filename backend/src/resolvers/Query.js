const Query = {
	items: (parent, args, ctx, info) => {
		return ctx.prisma.items();
	},
};

module.exports = {
	Query,
};
