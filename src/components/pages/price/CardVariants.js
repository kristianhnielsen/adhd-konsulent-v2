import {StyledPrimeCard, StyledStandardCard} from "../../styles/Card.styled";
import {Card} from "./Card";

const animations = {
	hidden: {
		y: -100,
		opacity: 0,
	},
	dropdown: {
		y: 0,
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
			variants={animations}
			initial="hidden"
			animate="dropdown"
			whileHover="hover"
		>
			<Card {...props} />
		</StyledStandardCard>
	);
};

export const PrimeCard = (props) => {
	return (
		<StyledPrimeCard
			variants={animations}
			initial="hidden"
			animate="dropdown"
			whileHover="hover"
		>
			<Card {...props} />
		</StyledPrimeCard>
	);
};
