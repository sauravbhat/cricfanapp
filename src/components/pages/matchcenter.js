// pages/annual.js

import React,  { useState, useEffect } from "react";
import Expenses from "./Expenses"
import Card from "./Card"
import './matchcenter.css';
import Live from "./Live";
import Scorecard from "./Scorecard";
import Userstat from "./Userstat";

const MatchCenter = ({eid,updateEid,loggedUser, scd, ccd}) => {
	
	const [selPlayerDetails, setselPlayerDetails] = useState([]);
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
			
			<Card className="matchcenterLive">
				<Userstat eid={eid} scd={scd} ccd={ccd} loggedUser={loggedUser} 
				selPlayerDetails={selPlayerDetails} setselPlayerDetails={setselPlayerDetails}
				/>
			</Card>
			
			
		</div>
		
	</>
	);
};

export default MatchCenter;
