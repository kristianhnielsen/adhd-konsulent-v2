import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	margin-bottom: 3rem;

	& section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
	}

	@media (min-width: 700px) {
		align-items: flex-start;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 3rem;

		& section {
			align-items: flex-start;
		}
	}
`;

export const ContactItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;

	& svg {
		height: 40px;
		width: 40px;
		fill: black;
	}
	& p {
		font-weight: 700;
		color: ${(props) => props.theme.text.paragraph};
		margin: auto 0;
	}
	@media (min-width: 700px) {
		flex-direction: row;
	}
`;
