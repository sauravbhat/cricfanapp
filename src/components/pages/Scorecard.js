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

	/*const scores = {
		teamName1: "Mumbai Indians",
        matchStatus: "Finished",
        teamName2: "Chennai Super Kings",
        statusabbr: "FT",
        matchCommentry: "Chennai Super Kings win by 20 runs",
        teamid2: "86337",
        ErnInf: "Match 29",
        teamid1: "86332",
		scorePlayers:[
			{
				teamName: "Chennai Super Kings",
				teamAbbr:"CHE",
				run: 120,
				wickets:10,
				overs:20,
				bat:[
					{
						ballfaced: "14",
						six: "0",
						teamName: "Chennai Super Kings",
						fulltext: "c Mohammad Nabi b Hardik Pandya",
						run: "17",
						four: "1",
						LpTx: "c [F] b [B]",
						fullName: "Daryl Mitchell",
						teamid: "86337",
						srrate: "121.43"
					},
					{
						ballfaced: "14",
						six: "0",
						teamName: "Chennai Super Kings",
						fulltext: "c Mohammad Nabi b Hardik Pandya",
						run: "17",
						four: "1",
						LpTx: "c [F] b [B]",
						fullName: "Ruturaj Gaikwad",
						teamid: "86337",
						srrate: "121.43"
					}
				],
				bowl:[
					{
						noball: "0",
						teamName: "Mumbai Indians",
						rungiven: "37",
						wicket: "0",
						runperover: "12.34",
						fullName: "Akash Madhwal",
						teamid: "86332",
						wideball: "0",
						maiden: "0",
						totalover: "3.0"
					},
					{	
						noball: "0",
						teamName: "Mumbai Indians",
						rungiven: "37",
						wicket: "0",
						runperover: "12.34",
						fullName: "Jasprit Bumrah",
						teamid: "86332",
						wideball: "0",
						maiden: "0",
						totalover: "3.0"
					}
					
				]

			},
			{
				teamName: "Mumbai Indians",
				teamAbbr:"CHE",
				run: 120,
				wickets:10,
				overs:20,
				bat:[
					{
						ballfaced: "14",
						six: "0",
						teamName: "Mumbai Indians",
						fulltext: "c Mohammad Nabi b Hardik Pandya",
						run: "17",
						four: "1",
						LpTx: "c [F] b [B]",
						fullName: "Rohit Mitchell",
						teamid: "86337",
						srrate: "121.43"
					},
					{
						ballfaced: "14",
						six: "0",
						teamName: "Mumbai Indians",
						fulltext: "c Mohammad Nabi b Hardik Pandya",
						run: "17",
						four: "1",
						LpTx: "c [F] b [B]",
						fullName: "Hardhik Gaikwad",
						teamid: "86337",
						srrate: "121.43"
					}
				],
				bowl:[
					{
						noball: "0",
						teamName: "Mumbai Indians",
						rungiven: "37",
						wicket: "0",
						runperover: "12.34",
						fullName: "Bhaan Madhwal",
						teamid: "86332",
						wideball: "0",
						maiden: "0",
						totalover: "3.0"
					},
					{	
						noball: "0",
						teamName: "Chennai Super Kings",
						rungiven: "37",
						wicket: "0",
						runperover: "12.34",
						fullName: "starc Bumrah",
						teamid: "86332",
						wideball: "0",
						maiden: "0",
						totalover: "3.0"
					}
					
				]

			}

		]}*/

	const [activeTab, setActiveTab] = useState(0);	
	return (
		<div>
		{isLoading ? "loading" :
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

