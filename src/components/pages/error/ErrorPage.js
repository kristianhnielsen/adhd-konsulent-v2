import React from "react";
import styled from "styled-components";
import ErrorImg from "../../assets/svg/404";
import {Link} from "react-router-dom";

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10vh 10vw;

	& svg {
		margin-bottom: 2rem;
	}

	& p {
		text-align: center;
		max-width: 30ch;
		color: rgb(68, 68, 68);
	}

	& a {
		color: ${(props) => props.theme.primary};
		font-size: 1rem;
		font-weight: 600;
		transition: transform 0.3s ease-in-out;
	}

	& a:hover {
		transform: scale(1.2);
	}
`;

export default function ErrorPage() {
	return (
		<Container>
			<ErrorImg width={"60%"} height={"auto"}></ErrorImg>
			<h2>Beklager!</h2>
			<p>Siden du leder efter, blev desværre ikke fundet.</p>
			<Link to="/">Gå tilbage forsiden</Link>
		</Container>
	);
}
