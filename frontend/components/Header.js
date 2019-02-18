import Link from 'next/link';
import styled from 'styled-components';
const NavStyles = styled.div`
	display: grid;
	width: 80%;
	margin: 0 auto;
	height: 90px;
	grid-template-columns: auto 1fr;
`;
const Links = styled.div`
	grid-column: 2;
	display: grid;
	/* border: 1px solid red; */
	grid-template-columns: repeat(auto-fit, minmax(auto, 90px));
	align-content: center;
	justify-content: center;
	a {
		font-size: 1.4rem;
		font-family: 'Raleway', sans-serif;
		white-space: nowrap;
		text-align: center;
		font-weight: bold;
	}
`;
const Img = styled.img`
	width: 100%;
	height: auto;
`;
// const H2 = styled.h2`
// 	font-family: 'Raleway', sans-serif;
// 	border: 1px solid red;
// `;

const Header = () => {
	return (
		<NavStyles>
			<Img src="static/real.png" />
			<Links>
				<Link href="/">
					<a>HOME</a>
				</Link>
				<Link href="/shop">
					<a>ABOUT US</a>
				</Link>
				<Link href="/shop">
					<a>SHOP</a>
				</Link>
				<Link href="/shop">
					<a>ACCOUNT</a>
				</Link>
				<Link href="/shop">
					<a>CART</a>
				</Link>
				<Link href="/sell">
					<a>CONTACT</a>
				</Link>
				<Link href="/shop">
					<a>BLOG</a>
				</Link>
			</Links>
			{/* <H2>SEARCH</H2> */}
		</NavStyles>
	);
};
export default Header;
