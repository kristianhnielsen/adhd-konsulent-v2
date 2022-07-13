import {Link} from "react-router-dom";

export const Card = (props) => {
	return (
		<>
			<section>
				<p>{props.title}</p>
				{props.sessions && (
					<p>
						{props.sessions > 1
							? `${props.sessions} sessioner`
							: `${props.sessions} session`}
					</p>
				)}
				<p>{props.price}</p>
			</section>

			<Link to="/kontakt">BESTIL</Link>
		</>
	);
};
