// pages/Scorecard.js

import React, { useState, useEffect } from "react";
import "./Userstat.css";

import TabButtonsPlayerSelection from "./TabButtonsPlayerSelection";
import TabContentPlayerSelection from "./TabContentPlayerSelection"



const Userstat = ({ eid }) => {


    console.log(eid)
    const [isLoading, setIsLoading] = useState(true);
    const [scores, setScores] = useState([]);
    useEffect(() => {
        console.log("useeffect called")
        setIsLoading(false);
        /*if (eid != null) {
            fetch('https://736z1k1omk.execute-api.us-east-1.amazonaws.com/dev/', {
                method: 'POST',
                origin: "*",
                headers: {

                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    eid: eid
                })
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (data != '') {
                        setScores(data);
                        setIsLoading(false);
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }*/
    }, [eid]);

    // sorting logic start /////////////////////////////
    const userDetails ={
        "nickname":"cricmaniac",
        "totalScore" : "2000",
        "lastMatch":"150",
        "globalRank":"100",
        "privateLeagues":[
            {"plname":"nova", "rank":"6","id":"2001"},
            {"plname":"Bram", "rank":"1","id":"198098"}
        ],
        "totalPlayerSelected":10,
        "totalPlayerAllowed":11,
        "playerSelect":[
            {"playtype":"Batsman","min":"1","max":"3","selection":"2",
                "players":[
                    { "fullName": "Shakib Al Hasan", "isOverSeas": "true","team": "CSK","cost": "345", "points": "678", "type": "Batsman","pid":"456" },
                    { "fullName": "Virat Kohli", "isOverSeas": "false","team": "RCB","cost": "245", "points": "900", "type": "Batsman","pid":"457" },
                    { "fullName": "Azmatullah Omarzai", "isOverSeas": "true","team": "MI","cost": "764", "points": "234", "type": "Batsman","pid":"458" }
                ]
            },
            {"playtype":"WicketKeeper","min":"1","max":"2","selection":"0",
            "players":[
                { "fullName": "defs", "isOverSeas": "false","team": "CSK","cost": "345", "points": "678", "type": "Batsman","pid":"123" },
                { "fullName": "bgts", "isOverSeas": "false","team": "RCB","cost": "245", "points": "900", "type": "Batsman","pid":"213" },
                { "fullName": "kjus", "isOverSeas": "true","team": "MI","cost": "764", "points": "234", "type": "Batsman","pid":"321" }
            ]},
            {"playtype":"All Rounder","min":"1","max":"5","selection":"2",
            "players":[
                { "fullName": "cseg", "isOverSeas": "true","team": "CSK","cost": "345", "points": "678", "type": "Batsman","pid":"100" },
                { "fullName": "ureg", "isOverSeas": "false","team": "RCB","cost": "245", "points": "900", "type": "Batsman","pid":"200" },
                { "fullName": "mjkg", "isOverSeas": "true","team": "MI","cost": "764", "points": "234", "type": "Batsman","pid":"300" }
            ]},
            {"playtype":"Bowler","min":"2","max":"4","selection":"1",
            "players":[
                { "fullName": "bdfwlo", "isOverSeas": "false","team": "CSK","cost": "345", "points": "678", "type": "Batsman","pid":"111" },
                { "fullName": "jjvflof", "isOverSeas": "true","team": "RCB","cost": "245", "points": "900", "type": "Batsman","pid":"222" },
                { "fullName": "jfjfjk", "isOverSeas": "true","team": "MI","cost": "764", "points": "234", "type": "Batsman","pid":"333" }
            ]}

        ],
        
    }
   
   

    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            {isLoading ? "Loading..." :
                <>
                    <div className="main__container">
                        <table width="100%" border="1">
                            <tr><td>CricketManiac</td>
                                <td>Total score: {userDetails.totalScore}<br />
                                    Last match: {userDetails.lastMatch}</td>
                                <td>Ranking:
                                    Global: {userDetails.globalRank}<br />
                                    {userDetails.privateLeagues.map(pl => (
                                        <span>{pl.plname}:{pl.rank}
                                        <br/></span>
                                           
                                           
                                        
                                    ))}
                                  </td>
                                  </tr> 
                        </table>


                    </div>
                    <br />
                    <div className="main__container">


                        <TabButtonsPlayerSelection  
                            userDetails={userDetails} activeTab={activeTab}
                            setActiveTab={setActiveTab}/>

                        
                        <TabContentPlayerSelection  
                            userDetails={userDetails} activeTab={activeTab}/>
                        


                    </div>
                </>
            }
        </div>
    );

};

export default Userstat;


