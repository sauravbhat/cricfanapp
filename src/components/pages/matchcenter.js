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
				height: "50vh",
			}}
		>
			
			<Card className="matchcenter">
				<Scorecard/>

				
			</Card>
			eid = {eid}
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
