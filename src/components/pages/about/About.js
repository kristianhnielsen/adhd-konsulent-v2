import { Helmet } from "react-helmet";
import Headline from "../../shared/headline/Headline";
import EducationList from "./EducationList";
import ProfilePhoto from "./ProfilePhoto";
import { Container } from "../../styles/About.styled";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Om | ADHD og Autisme Konsulent</title>
        <meta
          name="description"
          content="Om ADHD og autisme eksperten Lasse Nielsen"
        />
        <script
          defer
          data-domain="adhd-konsulent.dk"
          src="https://plausible.io/js/script.js"
        ></script>
      </Helmet>
      <Headline text="om" />
      <Container>
        <section>
          <p>
            Jeg har mere end 20 års erfaring som familiebehandler og konsulent i
            opgaver i familier der omhandler børn med ADHD/ADD og
            autismespektrumforstyrrelser. Her har Lasse udviklet flere metoder
            der kan medvirke til at nedbringe mange af de udfordringer der er
            forbundet med at have et barn med ADHD eller Autisme.
          </p>
          <EducationList />
        </section>
        <ProfilePhoto />
      </Container>
    </>
  );
};

export default About;
