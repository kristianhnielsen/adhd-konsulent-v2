import styled from "styled-components";
import {motion} from "framer-motion";

const StyledCard = styled(motion.div)`
	display: flex;
	flex-direction: column;
	min-height: 200px;
	box-shadow: 0 4px 4px rgb(70, 70, 70);
	padding: 1rem 0 2rem 0;

	& section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding: 0.5rem;
		gap: 1rem;

		& p {
			line-height: 1;
			font-size: 1.4rem;
			margin: 0;
			font-style: italic;
			&:nth-child(1) {
				font-size: 2.1rem;
				font-style: normal;
				font-weight: 900;
			}
		}
	}
	& a {
		align-self: center;
		padding: 15px 50px;
		cursor: pointer;
		border: 2px solid black;
		border-radius: 30px;
		font-weight: 700;
		letter-spacing: 1px;
	}

	@media (min-width: 1000px) {
		& a {
			margin: 1rem;
		}
		flex-direction: row;
		width: 45%;
		justify-content: space-around;
	}
`;

export const StyledStandardCard = styled(StyledCard)`
	background-color: ${(props) => props.theme.background};

	& section p {
		&:nth-child(1) {
			color: ${(props) => props.theme.text.headline};
		}
		color: ${(props) => props.theme.primary};
	}
	& a {
		background-color: ${(props) => props.theme.primary};
		border-color: ${(props) => props.theme.primary};
		color: ${(props) => props.theme.background};
	}
`;

export const StyledPrimeCard = styled(StyledCard)`
	background-color: ${(props) => props.theme.primary};

	& section p {
		color: ${(props) => props.theme.background};
	}
	& a {
		background-color: ${(props) => props.theme.background};
		border-color: ${(props) => props.theme.background};
		color: ${(props) => props.theme.primary};
	}
`;
