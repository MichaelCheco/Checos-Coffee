import gql from 'graphql-tag';
import { useQuery, useMutation } from 'react-apollo-hooks';
import Router from 'next/router';
import React, { useState } from 'react';
const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY($id: ID!) {
		item(id: $id) {
			id
			title
			description
			price
		}
	}
`;
const UPDATE_ITEM_MUTATION = gql`
	mutation UPDATE_ITEM_MUTATION(
		$id: ID!
		$title: String
		$description: String
		$price: Int
	) {
		updateItem(
			id: $id
			title: $title
			description: $description
			price: $price
		) {
			id
			title
			description
			price
		}
	}
`;

export default function UpdateItem(props) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);

	const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
		variables: { id: props.id },
	});
	const updateItem = useMutation(UPDATE_ITEM_MUTATION, {
		variables: { id: props.id, title, description, price },
	});
	const handleChange = (e, updater) => {
		const { type, value } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		updater(val);
	};
	return (
		<form
			onSubmit={async e => {
				e.preventDefault();
				const res = await updateItem();
				console.log(res);
				Router.push({
					pathname: '/item',
					query: { id: props.id },
				});
			}}>
			<fieldset>
				<label htmlFor="title">
					Title
					<input
						type="text"
						id="title"
						name="title"
						placeholder="title"
						required
						defaultValue={data.item.title}
						onChange={e => handleChange(e, setTitle)}
					/>
				</label>
				<label htmlFor="price">
					Price
					<input
						type="number"
						id="price"
						name="price"
						placeholder="price"
						required
						defaultValue={data.item.price}
						onChange={e => handleChange(e, setPrice)}
					/>
				</label>
				<label htmlFor="description">
					Description
					<input
						type="text"
						id="description"
						name="description"
						placeholder="description"
						required
						defaultValue={data.item.description}
						onChange={e => handleChange(e, setDescription)}
					/>
				</label>
				<button type="submit">Submit</button>
			</fieldset>
		</form>
	);
}
