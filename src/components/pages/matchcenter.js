// pages/annual.js

import React from "react";
import Expenses from "./Expenses"
import Card from "./Card"
import './matchcenter.css';
import Live from "./Live";
import Scorecard from "./Scorecard";

const MatchCenter = ({eid,updateEid}) => {
	
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
				mystat
			</Card>
			<Card className="matchcenter">
				player circle
			</Card>
			
		</div>
		
	</>
	);
};

export default MatchCenter;
