import {Helmet} from "react-helmet";
import {
	ButtonContainer,
	Container,
	Content,
	CTAButton,
	Image,
	InfoButton,
} from "../../styles/Home.styled";
import {useTheme} from "styled-components";
const FamilyInHands = React.lazy(() =>
	import("../../assets/svg/FamilyInHands")
);

export default function Home() {
	const theme = useTheme();
	const ctaAnimations = {
		hover: {
			boxShadow: `0px 0px 12px ${theme.button.cta.hover.glow}`,
			color: theme.button.cta.hover.text,
			borderColor: theme.button.cta.hover.border,
			backgroundColor: theme.button.cta.hover.background,
			transition: {
				duration: 0.1,
			},
			scale: 1.2,
		},
		tap: {
			scale: 0.8,
			transition: {duration: 0.1},
		},
	};
	const infoAnimations = {
		hover: {
			boxShadow: `0px 0px 12px ${theme.button.info.hover.glow}`,
			color: theme.button.info.hover.text,
			borderColor: theme.button.info.hover.border,
			backgroundColor: theme.button.info.hover.background,
			transition: {
				duration: 0.1,
			},
			scale: 1.2,
		},
		tap: {
			scale: 0.8,
			transition: {duration: 0.1},
		},
	};

	return (
		<Container>
			<Helmet>
				<title>ADHD og Autisme Konsulent</title>
				<meta
					name="description"
					content="Redskaber og værktøjer til håndtering af hverdagen med ADHD og autisme i Syddanmark"
				/>
			</Helmet>
			<Content>
				<h1 className="primary-bottom-border">
					ADHD OG AUTISME KONSULENT
				</h1>
				<p>
					Mere end 20 års erfaring som familiebehandler og
					specialpædagogisk konsulent i familier med børn med ADHD /
					ADD og autismespektrumforstyrrelser
				</p>
				<ButtonContainer>
					<CTAButton
						to="/kontakt"
						variants={ctaAnimations}
						whileHover="hover"
						whileTap="tap"
					>
						Gratis afklarende samtale
					</CTAButton>
					<InfoButton
						to="/radgivning"
						variants={infoAnimations}
						whileHover="hover"
						whileTap="tap"
					>
						Mere information
					</InfoButton>
				</ButtonContainer>
			</Content>
			<Image>
				<FamilyInHands height={300} width={300} />
			</Image>
		</Container>
	);
}
