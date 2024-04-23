// pages/Scorecard.js

import React,{  useState,useEffect } from "react";
import "./Userstat.css";
import TabButtons from "./TabButtons";
import TabContent from "./TabContent";
import styled from "styled-components";


export const PointsTable = styled.div`
	border-radius: 4px;
	background: #0097A7;
	padding: 5px 22px;
	color: #ffffff;
	outline: none;
	border: none;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	/* Second Nav */
	margin-left: 10px;
	/*&:hover {
		transition: all 0.2s ease-in-out;
		background: #B2DFDB;
		color: #808080;
	}*/
`;


const Userstat = ({eid}) => {

	
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

     function toggle() {
		//setIsOpened(wasOpened => !wasOpened);
	  }

	const [activeTab, setActiveTab] = useState(0);	
	return (
		<div>
		{isLoading ? "Click a match to see the score" :
			<>
            <div className="main__container">
				<table width="100%" border="1">
                    <tr><td>CricketManiac</td>
                    <td>Total score: 2000<br/>
                    Last match: 150</td>
                    <td>Ranking:
                        Global: 133<br/>
                        NOVA : 6<br/>
                        Bram:1 </td></tr>
                </table>
                
				
			</div>
            <br/>
            <div className="main__container">
            
            <div className="tab__header1">
                
                <li className="tab__button">
                    Batsman <br/>(1-3)<br/> <span class="dotgreen">2</span>
                </li>
                <li className="tab__button">
                    WicketKeeper <br/>(1-2) <br/><span class="dotred">0</span>
                </li>
                <li className="tab__button">
                    All Rounder<br/> (3-5) <br/><span class="dotgreen">5</span>
                </li>
                <li className="tab__button">
                    Bowler<br/> (2-4) <br/><span class="dotred">1</span>
                </li>
                
            </div>
            <div className="tab__container "> 
                <div  className="tab__content">
                <PointsTable onClick={toggle}>Select Teams</PointsTable>
                <table border="1">
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Points</th>
                        <th>&nbsp;</th>
                  
                        <tr>
                            <td><b>aab  ccc</b></td>
                            <td>90k</td>
                            <td>345</td>
                            <td><span class="dotgreen">+</span></td>   
                        </tr> 
                         
                        <tr>
                            <td><b>aab  ccc</b></td>
                            <td>90k</td>
                            <td>345</td>
                            <td><span class="dotgreen">+</span></td>   
                        </tr> 
                        <tr>
                            <td><b>aab  ccc</b></td>
                            <td>90k</td>
                            <td>345</td>
                            <td><span class="dotgreen">+</span></td>   
                        </tr>                        
                     </table>

                </div>

            </div>
            
        </div>
        </>
		}
	</div>
	);
	
};

export default Userstat;

