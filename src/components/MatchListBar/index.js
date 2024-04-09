// components/Navbar/index.js

import React from "react";
import {
	Nav,
	Bars,
	NavBtn,
	NavBtnLink,
} from "./MatchListElements";
import "@aws-amplify/ui-react/styles.css";
import TeamSchedules from "./TeamSchedules";

const MatchListBar = ({leagueConfig}) => {
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
							
							
							<div>	
								<TeamSchedules scd={scd} ccd={ccd}/>
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

export default MatchListBar;
