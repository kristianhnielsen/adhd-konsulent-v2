import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	margin-bottom: 3rem;

	@media (min-width: 700px) {
		flex-direction: row;

		& section {
			max-width: 50%;
		}
	}
`;
