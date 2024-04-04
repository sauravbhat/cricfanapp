// pages/annual.js

import React from "react";
import Expenses from "./Expenses"
import Card from "./Card"
import './matchcenter.css';
import Live from "./Live";

const MatchCenter = () => {
	const expenses = [
		{
		  id: 'e1',
		  title: 'Toilet Paper',
		  amount: '92.12',
		  date: new Date(2023, 10, 11),
		},
		{
		  id: 'e12',
		  title: 'Towel Paper',
		  amount: '12.12',
		  date: new Date(2023, 10, 11),
		},
		{
		  id: 'e13',
		  title: 'face pack ',
		  amount: '100.12',
		  date: new Date(2023, 10, 11),
		},
		{
		  id: 'e14',
		  title: 'toothpaste ',
		  amount: '7.10',
		  date: new Date(2023, 10, 16),
		},
	  ]
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "centre",
				alignItems: "centre",
				height: "100vh",
			}}
		>
			<Card className="matchcenter">
				Upcoming
				<Expenses items={expenses}/>
			</Card>
			<Card className="matchcenterLive">
				Live
				<Live/>
			</Card>
			
			<Card className="matchcenter">
				Recent
			</Card>
			
		</div>
	);
};

export default MatchCenter;
