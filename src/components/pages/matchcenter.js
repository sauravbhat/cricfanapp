// pages/annual.js

import React from "react";
import Expenses from "./Expenses"
import Card from "./Card"
import './matchcenter.css';
import Live from "./Live";
import Scorecard from "./Scorecard";
import Userstat from "./Userstat";
import CircleOfFire from "./CircleOfFire";

const MatchCenter = ({eid,updateEid,loggedUser}) => {
	
	return (
		<>
		<div
			style={{
				display: "flex",
				justifyContent: "centre",
				alignItems: "centre",
				height: "60vh",
			}}
		>
			
			<Card className="matchcenter">
				<Scorecard eid = {eid}/>

				
			</Card>
			
			<Card className="matchcenter">
				<Userstat eid={eid}/>
			</Card>
			<Card className="matchcenter">
				<CircleOfFire eid={eid}/>
				
			</Card>
			
		</div>
		
	</>
	);
};

export default MatchCenter;
