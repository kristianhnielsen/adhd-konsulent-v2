import Headline from "../../shared/headline/Headline";
import styled from "styled-components";

const LinkContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 1rem;
	& a {
		color: ${(props) => props.theme.primary};
		text-decoration: underline;
	}
`;

export default function ReadMore() {
	return (
		<footer>
			<Headline text="læs mere" />
			<LinkContainer>
				<a
					href="https://www.svsh.dk/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Skolen ved Sorte Hest
				</a>

				<a
					href="https://adhd.dk/"
					target="_blank"
					rel="noopener noreferrer"
				>
					ADHD.dk
				</a>

				<a
					href="https://drrossgreene.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Dr. Ross Greene
				</a>

				<a
					href="https://eng.hejlskov.se/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Bo Hjelskov Elvén
				</a>
			</LinkContainer>
		</footer>
	);
}
