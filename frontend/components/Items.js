import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

const ALL_ITEMS_QUERY = gql`
	{
		items {
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
				<h3>{item.title}</h3>
			))}
		</ul>
	);
}
