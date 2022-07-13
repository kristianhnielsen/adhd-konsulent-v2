import React from "react";
import styled from "styled-components";
import Photo from "../../assets/img/headshot-tall.png";

const StyledPicture = styled.div`
	display: flex;
	justify-content: center;

	& img {
		width: 50%;
		border-radius: 3px;
		box-shadow: 2px 2px 5px black;
	}
`;

export default function ProfilePicture() {
	return (
		<StyledPicture>
			<img src={Photo} alt="Lasse Nielsen" loading="lazy" />
		</StyledPicture>
	);
}
