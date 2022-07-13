import React from "react";
import {Link} from "react-router-dom";
import {useTheme} from "styled-components";
import styled from "styled-components";

const StyledLogo = styled.div`
	max-width: 20ch;
	margin: 1rem 0;
	z-index: 2;
	& a {
		font-size: 0.8rem;
	}
`;

export default function Logo(props) {
	const theme = useTheme();
	return (
		<StyledLogo>
			<Link
				to="/"
				style={{
					color: props.isOpen
						? theme.background
						: theme.text.headline,
				}}
			>
				ADHD OG AUTISME KONSULENT
			</Link>
		</StyledLogo>
	);
}
