import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
import React, { useState } from 'react';
const CREATE_ITEM_MUTATION = gql`
	mutation createItemMutation(
		$title: String
		$description: String
		$price: Int
		$image: String
		$largeImage: String
	) {
		createItem(
			title: $title
			description: $description
			price: $price
			image: $image
			largeImage: $largeImage
		) {
			id
		}
	}
`;

const CreateItem = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [image, setImage] = useState('');
	const [largeImage, setLargeImage] = useState('');

	const handleChange = (e, updater) => {
		const { type, value } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		updater(val);
	};
	const uploadFile = async e => {
		const files = e.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'sickfits');
		const res = await fetch(
			'https://api.cloudinary.com/v1_1/dpjplili1/image/upload',
			{
				method: 'POST',
				body: data,
			}
		);
		const file = await res.json();
		console.log(file, 'FILE');
		setImage(file.secure_url);
		setLargeImage(file.eager[0].secure_url);
	};
	const newItem = useMutation(CREATE_ITEM_MUTATION, {
		variables: { title, description, price, image, largeImage },
	});
	return (
		<form
			onSubmit={async e => {
				e.preventDefault();
				const res = await newItem();
			}}>
			<fieldset>
				<label htmlFor="image">
					Image
					<input
						type="file"
						id="file"
						name="file"
						placeholder="image"
						required
						onChange={uploadFile}
					/>
					{image && <img width="200" src={image} alt="Upload Preview" />}
				</label>
				<label htmlFor="title">
					Title
					<input
						type="text"
						id="title"
						name="title"
						placeholder="title"
						required
						value={title}
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
						value={price}
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
						value={description}
						onChange={e => handleChange(e, setDescription)}
					/>
				</label>
				<button type="submit">Submit</button>
			</fieldset>
		</form>
	);
};

export default CreateItem;
