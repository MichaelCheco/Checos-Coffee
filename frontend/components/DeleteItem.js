import { useMutation, useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { ALL_ITEMS_QUERY } from './Items';
// const ALL_ITEMS_QUERY = gql`
// 	{
// 		items {
// 			id
// 			title
// 			description
// 			price
// 		}
// 	}
// `;
const DELETE_ITEM_MUTATION = gql`
	mutation DELETE_ITEM_MUTATION($id: ID!) {
		deleteItem(id: $id) {
			id
		}
	}
`;
export default function DeleteItem(props) {
	const deleteItem = useMutation(DELETE_ITEM_MUTATION, {
		variables: { id: props.id },
		update,
	});
	const update = (cache, payload) => {
		const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
		data.items = data.items.filter(
			item => item.id !== payload.data.deleteItem.id
		);
		cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
	};
	return (
		<button
			onClick={() => {
				if (confirm('Are you sure you want to delete this?')) {
					deleteItem().catch(err => {
						alert(err.message);
					});
				}
			}}>
			{props.children}
		</button>
	);
}
