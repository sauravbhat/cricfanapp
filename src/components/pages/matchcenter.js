// pages/annual.js

import React from "react";
import Expenses from "./Expenses"
import Card from "./Card"
import './matchcenter.css';
import Live from "./Live";
import Scorecard from "./Scorecard";
import Userstat from "./Userstat";

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
				<Userstat eid={eid}/>
			</Card>
			<Card className="matchcenter">
				player circle
			</Card>
			
		</div>
		
	</>
	);
};

export default MatchCenter;
