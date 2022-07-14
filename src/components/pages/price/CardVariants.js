import {StyledPrimeCard, StyledStandardCard} from "../../styles/Card.styled";
import {Card} from "./Card";

const cardAnimations = {
	viewport: {once: false, amount: 0.8},
	offscreen: {
		x: -100,
		opacity: 0,
	},
	onscreen: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			duration: 0.8,
			delay: 0.3,
			stiffness: 200,
		},
	},
	hover: {
		scale: 1.1,
	},
};
export const StandardCard = (props) => {
	return (
		<StyledStandardCard
			viewport={"viewport"}
			variants={cardAnimations}
			initial={"offscreen"}
			whileInView={"onscreen"}
			whileHover={"hover"}
		>
			<Card {...props} />
		</StyledStandardCard>
	);
};

export const PrimeCard = (props) => {
	return (
		<StyledPrimeCard
			viewport={"viewport"}
			variants={cardAnimations}
			initial={"offscreen"}
			whileInView={"onscreen"}
			whileHover={"hover"}
		>
			<Card {...props} />
		</StyledPrimeCard>
	);
};
