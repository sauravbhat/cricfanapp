// components/Navbar/index.js

import React, { useState, useEffect } from 'react';
import {
	PointsTable
} from "./LeaguebarElements";
import "./TeamPoint.css"

const Participatingteams = ({scd, ccd}) => {

	const [team, setTeam] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isOpened, setIsOpened] = useState(false);
	function toggle() {
		setIsOpened(wasOpened => !wasOpened);
	  }
	  const columns = ["Team","TeamRank","Played","Win","Draw","Lost","NetRunRate","Points"];
	  const Header = ({ columns }) => {
		return (
		  <thead>
			<tr>
			  {columns.map((column) => (
				<th key={column} className='users-table-cell'>{column}</th>
			  ))}
			</tr>
		  </thead>
		);
	  };

	//console.log(scd);
    useEffect(() => {
      fetch('https://dxgkmmu9l4.execute-api.us-east-1.amazonaws.com/dev', {
		method: 'POST',
		origin: "*",
		headers: {  
		  
		  'Accept': 'application/json',
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({
		  Scd: scd,
		  ccd: ccd,
		})})
         .then((response) => response.json())
         .then((data) => {
            console.log( data);
            setTeam(data);
            setIsLoading(false);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

	return (
		<div>
			<table border="0"><tr>
		{isLoading ? "loading" :
		//create the images
				
		team.map((item) => (
			<td><img src={item.teamLogo} width="70" height="60" alt={item.TEAM_NAME}/></td>
				
		  ))
	}
			
				<td>
					<PointsTable onClick={toggle}>Points Table</PointsTable>
				</td>
			</tr>
			</table>

			{isOpened && (
				<div class="floattable">
					<table>
						<tr>
							<th>Team</th>
							<th>TeamRank</th>
							<th>Played</th>
							<th>Win</th>
							<th>Draw</th>
							<th>Lost</th>
							<th>NetRunRate</th>
							<th>Points</th>
						</tr>
					{team.map((item) => (
						<tr class="abtr">
							<td><img src={item.teamLogo} width="20" height="20" alt={item.TEAM_NAME}/>{item.TEAM_NAME}</td>
							<td>{item.TeamRank}</td>
							<td>{item.Played}</td>
							<td>{item.Win}</td>
							<td>{item.Draw}</td>
							<td>{item.Lost}</td>
							<td>{item.NetRunRate}</td>
							<td>{item.Points}</td>
						</tr>
						
					))}
					
					</table>
				</div>
			)}
			
			
	</div>
	);
};

export default Participatingteams;
