import Link from 'next/link';
import Router from 'next/router';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import DeleteItem from './DeleteItem';
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
	return (
		<div>
			<h3>{data.item.title}</h3>
			<Link
				href={{
					pathname: '/update',
					query: { id: props.id },
				}}>
				<button>Update Item</button>
			</Link>
			<DeleteItem id={props.id}>Delete This Item</DeleteItem>
		</div>
	);
};

export default SingleItem;
