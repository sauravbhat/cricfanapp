// components/Navbar/index.js

import React, { useState, useEffect } from 'react';



const Participatingteams = ({scd, ccd}) => {

	const [team, setTeam] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
	console.log(scd);
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
			
			</tr></table>
			
	</div>
	);
};

export default Participatingteams;
