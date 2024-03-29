import Headline from "../../shared/headline/Headline";
import {
  Container,
  Image,
  Content,
  MidHeader,
} from "../../styles/Consultation.styled";
import { Helmet } from "react-helmet";
import FathersEmbrace from "../../assets/svg/FatherEmbrace";
import ReadMore from "./ReadMore";
import Testemonials from "./Testemonials";

export default function Consultation() {
  return (
    <>
      <Helmet>
        <title>Rådgivning | ADHD og Autisme Konsulent</title>
        <meta
          name="description"
          content="Lær mere om redskaber og håndtering af hverdagen med ADHD og autisme, samt priser for rådgivning"
        />
        <script
          defer
          data-domain="adhd-konsulent.dk"
          src="https://plausible.io/js/script.js"
        ></script>
      </Helmet>
      <Container>
        <Headline text="Rådgivning" />
        <Content>
          <section>
            <p>
              Få en bedre forståelse og indsigt i ADHD/autisme, til at mindske
              konflikter i hverdagen
            </p>
            <p>Lær at forstå og styrke dit barns selvtillid og selværd</p>
            <p>Lær at hjælpe dit barn med at regulere deres følelser</p>
            <p>Forstå dit barns adfærd og reaktionsmønstre</p>
            <p>Lær at forebygge og håndtere konflikter</p>
            <MidHeader>
              Jeg tilrettelægger <u>altid</u> forløbet sammen med jer og jeres
              familie.
            </MidHeader>
          </section>

          <Image>
            <FathersEmbrace width={"80%"} height={"100%"} />
          </Image>
        </Content>
        <Testemonials />
        <ReadMore />
      </Container>
    </>
  );
}
