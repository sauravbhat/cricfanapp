// components/Navbar/index.js

import React from "react";
import logo from "./artifact/cricfan-high-resolution-logo.png"
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";
import "@aws-amplify/ui-react/styles.css";

import {
	withAuthenticator,
	Button,
	Heading,
	Image,
	View,
	Card,
  } from "@aws-amplify/ui-react";
const Navbar = ({signOut}) => {
	return (
		<>
			<Nav>

				<Bars />
				<NavMenu>
					<NavLink to="/matchcenter" >
						<img src={logo} width="60" height="60"/>
					</NavLink>
					<NavLink to="/about" >
						Match center
					</NavLink>
					<NavLink to="/events" activeStyle>
						Leagues
					</NavLink>
					<NavLink to="/annual" activeStyle>
						About
					</NavLink>
					<NavLink to="/team" activeStyle>
						Teams
					</NavLink>
					
					
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink onClick={signOut}>
						Sign Out 
					</NavBtnLink>
				</NavBtn>
				   
				
			</Nav>
		</>
	);
};

export default Navbar;
