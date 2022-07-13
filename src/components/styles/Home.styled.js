import {Link} from "react-router-dom";
import styled from "styled-components";
import {motion} from "framer-motion";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	@media (min-width: 700px) {
		flex-direction: row;
	}
`;

export const Content = styled.main`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	max-width: 500px;

	& h1 {
		font-weight: 900;
		font-size: 2.5rem;
		line-height: 1;
		margin-bottom: 0;
	}

	& p {
		line-height: 1.5;
		font-weight: normal;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;

export const Button = styled(motion(Link))`
	all: unset;
	padding: 15px;
	align-self: center;
	border-radius: 30px;
	font-size: 1rem;
	text-align: center;
	font-weight: 600;
	cursor: pointer;
	border: solid 2px;
`;

export const CTAButton = styled(Button)`
	color: ${(props) => props.theme.button.cta.text};
	border: solid 2px ${(props) => props.theme.button.cta.border};
	background-color: ${(props) => props.theme.button.cta.background};
`;
export const InfoButton = styled(Button)`
	color: ${(props) => props.theme.button.info.text};
	border-color: ${(props) => props.theme.button.info.border};
	background-color: ${(props) => props.theme.button.info.background};
`;

export const Image = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
`;
