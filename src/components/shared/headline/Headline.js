import styled from "styled-components";

const StyledHeadline = styled.h2`
	border-bottom: 10px solid ${(props) => props.theme.primary};
	font-size: 2rem;
	/* color: ${(props) => props.theme.primary}; */
`;

export default function Headline(props) {
	return <StyledHeadline>{props.text.toUpperCase()}</StyledHeadline>;
}
