// pages/annual.js

import React from "react";
import Expenses from "./Expenses"
import Card from "./Card"
import './matchcenter.css';
import Live from "./Live";

const MatchCenter = () => {
	
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
				scorecard
				
			</Card>
			
			<Card className="matchcenter">
				mystat
			</Card>
			<Card className="matchcenter">
				player circle
			</Card>
			
		</div>
		<div style={{
				display: "flex",
				justifyContent: "centre",
				alignItems: "centre",
				height: "50vh",
			}}>
		
		<Card className="matchcenter">
			scorecard
			
		</Card>
		
		<Card className="matchcenter">
			mystat
		</Card>
		<Card className="matchcenter">
			selection
		</Card>
		
	</div>
	</>
	);
};

export default MatchCenter;
