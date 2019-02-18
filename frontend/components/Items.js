import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import Item from './Item';
import styled from 'styled-components';

const Img = styled.img`
	height: 350px;
	width: 100%;
	object-fit: cover;
`;
const H1 = styled.h1`
	position: absolute;
	font-size: 5.4rem;
	left: 47%;
	font-family: 'Raleway';
	top: 15%;
`;
const Wrapper = styled.div`
	display: grid;
	width: 80%;
	margin: 0 auto;
	grid-gap: 15px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const ALL_ITEMS_QUERY = gql`
	{
		items {
			items {
				id
				title
				description
				price
				image
				largeImage
			}
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
		<>
			<H1>Shop</H1>
			<Img src="static/ad.jpg" />
			<Wrapper>
				{data.items.items.map(item => (
					<Item item={item} key={item.id} />
				))}
			</Wrapper>
		</>
	);
}
export { ALL_ITEMS_QUERY };
