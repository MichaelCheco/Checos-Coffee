import Link from 'next/link';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
const Card = styled.div`
	border: 1px solid black;
`;
const Img = styled.img`
	height: auto;
	width: 25%;
`;
const Item = props => {
	const { item } = props;
	return (
		<ItemStyles>
			<Img src={item.image} alt={item.title} />
			<Link
				href={{
					pathname: '/item',
					query: { id: item.id },
				}}>
				<a>{item.title}</a>
			</Link>
			<p>{formatMoney(item.price)}</p>
		</ItemStyles>
	);
};
const ItemStyles = styled.div`
	background: white;
	border: 1px solid ${props => props.theme.offWhite};
	box-shadow: ${props => props.theme.bs};
	position: relative;
	grid-gap: 20px;
	display: flex;
	flex-direction: column;
	img {
		width: 100%;
		height: 300px;
		object-fit: cover;
	}
	a {
		font-size: 1.7rem;
		line-height: 2;
		font-weight: 300;
		flex-grow: 1;
		padding: 0 3rem;
		font-size: 1.5rem;
		text-align: center;
	}
	p {
		font-size: 1.7rem;
		line-height: 2;
		font-weight: 300;
		flex-grow: 1;
		padding: 0 3rem;
		font-size: 1.5rem;
		text-align: center;
	}
	.buttonList {
		display: grid;
		width: 100%;
		border-top: 1px solid ${props => props.theme.lightgrey};
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		grid-gap: 1px;
		background: ${props => props.theme.lightgrey};
		& > * {
			background: white;
			border: 0;
			font-size: 1.4rem;
			padding: 1rem;
		}
	}
`;
export default Item;
