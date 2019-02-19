const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('../utils');
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
	signup: async (parent, args, ctx, info) => {
		args.email = args.email.toLowerCase();
		const password = await bcrypt.hash(args.password, 10);
		const user = await ctx.prisma.createUser({
			...args,
			password,
		});
		const token = jwt.sign({ userId: user.id }, APP_SECRET);
		return { token, user };
	},
	signin: async (parent, args, ctx, info) => {
		const user = await ctx.prisma.user({ email: args.email });
		if (!user) {
			throw new Error('No User Found');
		}
		const validUser = await bcrypt.compare(args.password, user.password);
		if (!validUser) {
			throw new Error('Invalid Credentials');
		}
		const token = jwt.sign({ userId: user.id }, APP_SECRET);
		return { token, user };
	},
};

module.exports = {
	Mutation,
};
