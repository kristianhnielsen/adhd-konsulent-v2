import styled from "styled-components";
import Profile from "../../assets/img/headshot-square.jpeg";

const StyledProfilePhoto = styled.section`
	display: flex;
	justify-content: center;
	& img {
		border-radius: 50%;
		width: 60%;
		box-shadow: 0 2px 5px black;
	}
`;

export default function ProfilePhoto() {
	return (
		<StyledProfilePhoto>
			<img src={Profile} alt="Lasse Nielsen profile" loading="lazy" />
		</StyledProfilePhoto>
	);
}
