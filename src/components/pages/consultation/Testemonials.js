import React from "react";
import {useState} from "react";
import styled from "styled-components";
import {nanoid} from "nanoid";

const QuoteContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 2rem auto;
	gap: 2rem;

	& h2,
	p {
		margin: 0;
	}

	& section {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	@media (min-width: 700px) {
		& section {
			flex-direction: row;
		}
	}
`;

const Quote = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	& svg {
		width: 20px;
		height: auto;
		fill: "#000";
		&:last-child {
			align-self: flex-end;
			transform: rotate(180deg);
			z-index: -1; // unknown reason for end quote is on top of mobile menu element
		}
	}

	& p {
		font-style: italic;
		padding: 0 20px;
		&:nth-last-child(2) {
			margin-top: 1.3rem;
			align-self: flex-end;
		}
	}

	@media (min-width: 700px) {
		max-width: 25%;
	}
`;

export default function Testemonials() {
	const [quotesList, setQuotesList] = useState([
		{
			quote: "Vi havde aldrig troet at der fandtes en som Lasse der kunne redde vores familie og ægteskab samtidigt",
			author: "Familien T.",
		},
		{
			quote: `Alle familier med ADHD og autisme burde have "deres egen Lasse", han har reddet vores familie og ægteskab`,
			author: "Familien N.",
		},
		{
			quote: "Jeg kunne ønske at havde et billede hængende af Lasse, så kunne jeg bare kigge op på ham og forestille mig hvad han ville svare, så kunne vi hurtigt komme videre",
			author: "Familien O.",
		},
	]);

	return (
		<QuoteContainer>
			<h2>Hvad andre siger:</h2>
			<section>
				{quotesList.map((quote) => (
					<Quote key={nanoid()}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							aria-label="quotation mark"
						>
							<path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z" />
						</svg>
						<p>{quote.quote}</p>
						<p>- {quote.author}</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							aria-label="quotation mark"
						>
							<path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z" />
						</svg>
					</Quote>
				))}
			</section>
		</QuoteContainer>
	);
}
