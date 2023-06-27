import { Container } from "../../styles/Price.styled";
import { PrimeCard, StandardCard } from "./CardVariants";
import { Helmet } from "react-helmet";

export default function Price() {
  return (
    <>
      <Helmet>
        <title>Pris | ADHD og Autisme Konsulent</title>
        <meta name="description" content="Priser for rådgivning" />
        <script
          defer
          data-domain="adhd-konsulent.dk"
          src="https://plausible.io/js/script.js"
        ></script>
      </Helmet>
      <Container>
        <PrimeCard title="Afklarende Samtale" price="GRATIS" />

        <StandardCard title="Familie Pakke" price="6.000 kr" sessions={10} />
        <StandardCard title="Forældre Pakke" price="3.000 kr" sessions={5} />
        <StandardCard title="Forældre Rådgivning" price="695 kr" sessions={1} />
      </Container>
    </>
  );
}
