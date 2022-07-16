import React from "react";
import Headline from "../../shared/headline/Headline";
import NameCard from "./NameCard";
import PhoneCard from "./PhoneCard";
import EmailCard from "./EmailCard";
import {Helmet} from "react-helmet";
import {Container} from "../../styles/Contact.styled";
const ProfilePicture = React.lazy(() => import("./ProfilePicture"));

export default function Contact() {
	return (
		<>
			<Helmet>
				<title>Kontakt | ADHD og Autisme Konsulent</title>
				<meta
					name="description"
					content="Kontakt og bestil tid ved ADHD og autisme specialist Lasse Nielsen"
				/>
			</Helmet>
			<Headline text="Kontakt" />
			<Container>
				<section>
					<NameCard />
					<PhoneCard />
					<EmailCard />
				</section>
				<ProfilePicture />
			</Container>
		</>
	);
}
