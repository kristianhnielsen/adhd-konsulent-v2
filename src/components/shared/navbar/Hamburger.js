import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useTheme} from "styled-components";

const StyledHamburger = styled.button`
	all: unset;
	height: 45px;
	width: 45px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	z-index: 3;

	@media screen and (min-width: 700px) {
		display: none;
	}
`;

const StyledBar = styled(motion.div)`
	height: 4px;
	background-color: ${(props) => props.theme.text.headline};
	width: 90%;
	border-radius: 10px;
`;

export default function HamburgerMenu(props) {
	const theme = useTheme();

	const midBarVariants = {
		hidden: {opacity: 0},
		visible: {opacity: 1},
	};
	const topBarVariants = {
		cross: {
			rotate: 45,
			y: 12.5,
			width: "100%",
			backgroundColor: theme.background,
		},
		horizontal: {backgroundColor: theme.text.headline},
	};
	const bottomBarVariants = {
		cross: {
			rotate: -45,
			y: -12.5,
			width: "100%",
			backgroundColor: theme.background,
		},
		horizontal: {backgroundColor: theme.text.headline},
	};
	return (
		<>
			<StyledHamburger
				onClick={() => props.setOpen((prevState) => !prevState)}
			>
				<StyledBar
					variants={topBarVariants}
					animate={props.isOpen ? "cross" : "horizontal"}
				/>

				<StyledBar
					variants={midBarVariants}
					transition={{duration: 0.2}}
					animate={props.isOpen ? "hidden" : "visible"}
				/>

				<StyledBar
					variants={bottomBarVariants}
					animate={props.isOpen ? "cross" : "horizontal"}
				/>
			</StyledHamburger>
		</>
	);
}
