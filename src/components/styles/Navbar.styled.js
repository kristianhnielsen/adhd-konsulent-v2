import {Link} from "react-router-dom";
import styled from "styled-components";
import {motion} from "framer-motion";

export const Header = styled.header`
	border-bottom: solid 5px ${({theme}) => theme.primary};
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 4;
	margin-bottom: 1rem;
	@media (min-width: 700px) {
	}
`;

export const NavMenu = styled(motion.nav)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding-top: 8rem;
	align-items: center;
	gap: 3rem;
	width: 100%;
	height: 150%;
	background-color: ${(props) => props.theme.primary};
	position: absolute;
	top: 0;
	left: 0;

	@media (min-width: 700px) {
		flex-direction: row;
		position: static;
		transform: translate(0%, 0%) !important;
		background-color: ${(props) => props.theme.background};
		padding: 0;
		gap: 1.5rem;
		width: auto;
	}
`;

export const NavLink = styled(motion(Link))`
	color: ${(props) => props.theme.background};
	font-size: 2rem;

	@media (min-width: 700px) {
		color: ${(props) => props.theme.text.headline};
		font-size: 1rem;
	}
`;
