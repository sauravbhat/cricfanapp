// pages/Scorecard.js

import React,{  useState,useEffect } from "react";
import "./Scorecard.css";
import TabButtons from "./TabButtons";
import TabContent from "./TabContent";

const Scorecard = ({eid}) => {

	
	console.log(eid)
	const [isLoading, setIsLoading] = useState(true);
	const [scores, setScores] = useState([]);
	useEffect(() => {
		console.log(eid)
		if(eid != null){
		fetch('https://736z1k1omk.execute-api.us-east-1.amazonaws.com/dev/', {
		  method: 'POST',
		  origin: "*",
		  headers: {  
			
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			eid: eid
		  })})
		   .then((response) => response.json())
		   .then((data) => {
			  console.log( data);
			  if(data!=''){
				setScores(data);
				setIsLoading(false);
			  }
		   })
		   .catch((err) => {
			  console.log(err.message);
		   });
		}
	 }, [eid]);

	
	const [activeTab, setActiveTab] = useState(0);	
	return (
		<div>
		{isLoading ? "Click a match to see the score" :
			<div className="main__container">
				
				<TabButtons	
					scoreData={scores} activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<TabContent	
					scoreData={scores} activeTab={activeTab}
				/>
				
			</div>
		}
	</div>
	);
	
};

export default Scorecard;

