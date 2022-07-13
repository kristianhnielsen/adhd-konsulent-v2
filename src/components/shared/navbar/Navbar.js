import React, {useState} from "react";
import {useTheme} from "styled-components";
import {Header, NavLink, NavMenu} from "../../styles/Navbar.styled";
import HamburgerMenu from "./Hamburger";
import Logo from "./Logo";

export default function Navbar() {
	const [isOpen, setOpen] = useState(false);
	const theme = useTheme();

	const menuAnimations = {
		openAnimation: {
			x: 0,
		},
		closeAnimation: {
			x: "-100%",
		},
	};

	const linkAnimations = {
		initial: {
			scale: 1,
		},
		hover: {
			scale: 1.3,
			textDecoration: "underline",
			textDecorationColor: theme.primary,
		},
	};

	return (
		<Header>
			<Logo isOpen={isOpen} />
			<HamburgerMenu isOpen={isOpen} setOpen={setOpen} />
			<NavMenu
				initial={false}
				animate={isOpen ? "openAnimation" : "closeAnimation"}
				variants={menuAnimations}
			>
				<NavLink
					to="/"
					onClick={() => setOpen(false)}
					whileHover="hover"
					variants={linkAnimations}
				>
					HJEM
				</NavLink>
				<NavLink
					to="/radgivning"
					onClick={() => setOpen(false)}
					whileHover="hover"
					variants={linkAnimations}
				>
					RÅDGIVNING
				</NavLink>
				<NavLink
					to="/pris"
					onClick={() => setOpen(false)}
					whileHover="hover"
					variants={linkAnimations}
				>
					PRIS
				</NavLink>
				<NavLink
					to="/om"
					onClick={() => setOpen(false)}
					whileHover="hover"
					variants={linkAnimations}
				>
					OM
				</NavLink>
				<NavLink
					to="/kontakt"
					onClick={() => setOpen(false)}
					whileHover="hover"
					variants={linkAnimations}
				>
					KONTAKT
				</NavLink>
			</NavMenu>
		</Header>
	);
}
