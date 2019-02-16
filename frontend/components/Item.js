import Link from 'next/link';
const Item = props => {
	const { item } = props;
	return (
		<div>
			<Link
				href={{
					pathname: '/item',
					query: { id: item.id },
				}}>
				<a>{item.title}</a>
			</Link>
		</div>
	);
};
export default Item;
