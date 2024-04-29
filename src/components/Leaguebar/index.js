// components/Navbar/index.js

import React from "react";
import {
	Nav,
	Bars,
	NavBtn,
	NavBtnLink,
} from "./LeaguebarElements";
import "@aws-amplify/ui-react/styles.css";
import Participatingteams from "./Participatingteams"

const Navbar = ({leagueConfig, loggedUser}) => {
	console.log("configgg ========= ");
	console.log(leagueConfig);

	if(leagueConfig!= null){
		//get teams amd store them somewhere. render the page with multiple button
		//console.log(leagueConfig.Leagues[1].ccd);
		let LeagueList = leagueConfig.Leagues;
		console.log(LeagueList.length);
		for (let index = 0; index < LeagueList.length; index++) {
			let element = LeagueList[index];
			console.log(element.ccd);
			let scd = element.scd;
			let ccd = element.ccd;
			let Default = element.Default;
			let Display = element.Display;
			let runsthrough = element.runsthrough;
			if(Default == "true"){
				return (
					<>
						<Nav>
			
							<Bars />
							<NavBtn>
								<NavBtnLink >
									{Display} 
								</NavBtnLink>
							</NavBtn>
							
							<div>
							
							<Participatingteams scd={scd} ccd={ccd}/>
							</div>
							
							
						</Nav>
					</>
				);
			}
			
		}

	}
	else {
	return (
		<>
			<Nav>

				<Bars />
					
				   
				
			</Nav>
		</>
	);}
};

export default Navbar;
