import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import Item from './Item';

const ALL_ITEMS_QUERY = gql`
	{
		items {
			id
			title
			description
			price
		}
	}
`;

export default function Items() {
	const { data, loading, error } = useQuery(ALL_ITEMS_QUERY, {
		suspend: false,
	});
	if (loading) {
		return <span>Loading ...</span>;
	}
	if (error) {
		return `Error! ${error.message}`;
	}
	console.log(data);
	return (
		<ul>
			{data.items.map(item => (
				<Item item={item} key={item.id} />
			))}
		</ul>
	);
}
export { ALL_ITEMS_QUERY };
