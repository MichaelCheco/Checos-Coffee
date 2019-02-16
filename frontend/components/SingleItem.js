import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY($id: ID!) {
		item(id: $id) {
			id
			title
			description
			image
			price
		}
	}
`;

const SingleItem = props => {
	const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
		variables: { id: props.id },
	});
	if (loading) {
		return <span>Loading ...</span>;
	}
	if (error) {
		return `Error! ${error.message}`;
	}
	return <h3>{data.item.title}</h3>;
};

export default SingleItem;
