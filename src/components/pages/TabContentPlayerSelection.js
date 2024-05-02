
import React, { useState, useEffect } from "react";
import "./Userstat.css";
import styled from "styled-components";

export const PointsTable = styled.div`
	border-radius: 4px;
	background: #0097A7;
	padding: 6px;
	color: #ffffff;
    width:145px;
    height:30px;
	outline: none;
	border: none;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
    
	/* Second Nav */
	margin: 10px;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: #B2DFDB;
		color: #808080;
        cursor:hand;
	}
`;

export default function TabContentPlayerSelection({ userDetails, activeTab }) {


    const scores = userDetails.playerSelect[activeTab];
    //console.log(scores);

    // sorting logic end //////////////////////////////////////////  

    const useSortableData = (items, config = null) => {
        const [sortConfig, setSortConfig] = React.useState(config);

        const sortedItems = React.useMemo(() => {
            //console.log(sortConfig)
            //console.log(items)
            let sortableItems = [...items];
            if (sortConfig !== null) {
                sortableItems.sort((a, b) => {
                    if (a[sortConfig.key] < b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[sortConfig.key] > b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }
                    return 0;
                });
            }
            //console.log(sortableItems)
            return sortableItems;
        }, [items, sortConfig]);

        const requestSort = key => {
            console.log("request sort")
            let direction = 'ascending';
            if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
                direction = 'descending';
            }
            setSortConfig({ key, direction });
        }

        return { items: sortedItems, requestSort, sortConfig };
    }

    const { items, requestSort, sortConfig } = useSortableData(scores.players);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    function toggle() {
        //setIsOpened(wasOpened => !wasOpened);
    }

    return (
        <div className="tab__container ">
            <div className="tab__content">
                
                <table border="1">
                    <thead>
                        <tr>
                            <th><button type="button" onClick={() => requestSort('fullName')}
                                className={getClassNamesFor('fullName')} >
                                FullName
                            </button></th>
                            <th><button type="button" onClick={() => requestSort('teamName')}
                                className={getClassNamesFor('teamName')} >
                                Team
                            </button></th>
                            <th><button type="button" onClick={() => requestSort('cost')}
                                className={getClassNamesFor('cost')}  >
                                Cost</button></th>
                            <th><button type="button" onClick={() => requestSort('points')}
                                className={getClassNamesFor('points')} >
                                Points</button></th>
                            <th>{userDetails.totalPlayerSelected} Of {userDetails.totalPlayerAllowed}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(player => (
                            <tr key={player.pid}>
                                <td>{player.fullName}
                                    {
                                        player.isOverSeas == 'True' &&
                                        <img src="https://cricfan.s3.amazonaws.com/ipl/airplane.png" width="25px" height="20px" />

                                    }

                                </td>
                                <td>{player.teamName}</td>
                                <td>{player.cost}</td>
                                <td>{player.points}</td>

                                <td>
                                {parseInt(userDetails.totalPlayerSelected) < parseInt(userDetails.totalPlayerAllowed) &&
                                    <span class="dotgreen">+</span>
                                }
                                {parseInt(userDetails.totalPlayerSelected) >= parseInt(userDetails.totalPlayerAllowed) &&
                                    <span class="dotred"></span>
                                }
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>


            </div>



        </div>
    );
}