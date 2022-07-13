import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	margin-bottom: 3rem;

	@media (min-width: 700px) {
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
	}
`;
