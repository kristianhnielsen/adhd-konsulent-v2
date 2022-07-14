import {Container} from "../../styles/Price.styled";
import {PrimeCard, StandardCard} from "./CardVariants";
import {Helmet} from "react-helmet";

export default function Price() {
	return (
		<>
			<Helmet>
				<title>Pris | ADHD og Autisme Konsulent</title>
				<meta name="description" content="Priser for rådgivning" />
			</Helmet>
			<Container>
				<PrimeCard title="Afklarende Samtale" price="GRATIS" />

				<StandardCard
					title="Familie Pakke"
					price="4.000 kr"
					sessions={10}
				/>
				<StandardCard
					title="Forældre Pakke"
					price="2.000 kr"
					sessions={5}
				/>
				<StandardCard
					title="Forældre Rådgivning"
					price="500 kr"
					sessions={1}
				/>
			</Container>
		</>
	);
}
