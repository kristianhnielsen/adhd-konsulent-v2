import styled from "styled-components";

export const Container = styled.div`
	margin-bottom: 3rem;
`;

export const Content = styled.main`
	@media (min-width: 700px) {
		display: flex;

		& section {
			max-width: 50%;
		}
	}
`;

export const Image = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	& svg {
		max-width: 100%;
	}
`;

export const MidHeader = styled.p`
	font-size: 1.8rem;
	font-weight: 700;
	color: ${(props) => props.theme.text.headline};
`;
