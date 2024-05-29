// pages/Scorecard.js

import React, { useState, useEffect } from "react";
import "./CircleOfFire.css";

import styled from "styled-components";




const CircleOfFire = ({ userDetails }) => {

    const selPlayers = userDetails.selectedPlayer ;
    let selwk=null;
    //if(selPlayers.playtype=="WicketKeeper"){

    //}

    //const [sortedField, setSortedField] = React.useState(null);


    return (
     
                        <div className="circleouter">
                            {selPlayers.map(player => (
                                
                                  player.playtype=="WicketKeeper" &&
                                  <div class="selPlayerKeeper">

                            {player.players && player.players.map(psel => (
                                       <div className="coftd"> 
                                       <img src={psel.teamLogo} width="55%" height="55%"/> 
                                       {psel.lastName} </div>
                            ))}      
                                        </div>   
                                
                                  ))  

                                

                            }
                            {selPlayers.map(player => (
                                
                                player.playtype=="Batsman" &&
                                <div class="selPlayerbat">

                          {player.players && player.players.map(psel => (
                                      <div className="coftd"> 
                                      <img src={psel.teamLogo} width="55%" height="55%"/> 
                                      {psel.lastName} </div>
                          ))}      
                                      </div>   
                              
                                ))  

                              

                          }

                        {selPlayers.map(player => (
                                
                                player.playtype=="AllRounder" &&
                                <div class="selPlayerar">

                          {player.players && player.players.map(psel => (
                                     <div className="coftd"> 
                                     <img src={psel.teamLogo} width="55%" height="55%"/> 
                                     {psel.lastName} </div>
                          ))}      
                                      </div>   
                              
                                ))  

                              

                          }

                        {selPlayers.map(player => (
                                
                                player.playtype=="Bowler" &&
                                <div class="selPlayerball">

                          {player.players && player.players.map(psel => (
                                     <div className="coftd"> 
                                     <img src={psel.teamLogo} width="55%" height="55%"/> 
                                     {psel.lastName} </div>
                          ))}      
                                      </div>   
                              
                                ))  

                              

                          }


                           </div>
                         
                         


    );
    
};

export default CircleOfFire;

