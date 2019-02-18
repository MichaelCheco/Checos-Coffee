import styled from 'styled-components';
const Img = styled.img`
	height: 750px;
	width: 100%;
	background-size: cover;
	margin-top: 2rem;
	object-fit: cover;
`;
const Wrapper = styled.div`
	border: 2px solid gray;
	position: absolute;
	background: whitesmoke;
	top: 23%;
	left: 25%;
	width: 55%;
	opacity: 0.7;
	height: auto;
	transform: skew(-6deg);
	padding: 1%;
	z-index: 2;
	h1 {
		text-align: center;
		font-size: 5.4rem;
	}
	p {
		font-weight: 600;
		line-height: 2;
		font-size: 2rem;
	}
	@media (max-width: 500px) {
		width: 80%;
		height: 350px;
		top: 45%;
		left: 9%;
		transform: none;
		h1 {
			font-size: 2.5rem;
		}
		p {
			font-size: 1.6rem;
		}
	}
`;
const Home = () => {
	return (
		<>
			<Wrapper>
				<h1>Your Neighborhood Cafe</h1>
				<p>
					Born from the desire to deliver unequaled quality, Checo's Coffee was
					started with one thing and one thing in mind: Presenting nothing but
					the finest ingredients, processes, and technology to our customers.
					There are more cafes around than we care to count, but none do what we
					do.
				</p>
			</Wrapper>
			<Img src="static/ad.jpg" />
		</>
	);
};
export default Home;
