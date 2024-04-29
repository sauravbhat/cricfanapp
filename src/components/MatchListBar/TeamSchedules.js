import React,{ useRef, useState, useEffect } from "react";
import Photos from "./images.json";
import "./TeamPoint.css";
import MatchCenter from "../pages/matchcenter"
import {
	Nav,
	Bars,
	NavBtn,
	NavBtnLink,
} from "./MatchListElements";

const TeamSchedules = ({scd, ccd,loggedUser}) => {
  const [eid, updateEid] = useState([])
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const unsplashed = "https://source.unsplash.com/200x200/";
  const [team, setTeam] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
  //console.log("scd = " + scd + ", ccd = " + ccd);
  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };
    useEffect(() => {
      fetch('https://o5mzb819rl.execute-api.us-east-1.amazonaws.com/dev/getListLeagueMatches', {
		method: 'POST',
		origin: "*",
		headers: {  
		  
		  'Accept': 'application/json',
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({
		  scd: scd,
		  ccd: ccd,
		})})
         .then((response) => response.json())
         .then((data) => {
            //console.log( data);
            setTeam(data);
            setIsLoading(false);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
   let eid1=''
   const sayHello = (eidparam) => {
    //alert("Hello!" + eidparam);
    eid1=eidparam;
    updateEid(eid1);

  };

  return (
    <>
    <Nav>
        
        <Bars />
    {isLoading ? "loading" :
      
     
      
      <div class="button-contianer">
      
        
      
      <button
        onClick={() => {
          handleHorizantalScroll(elementRef.current, 25, 100, -10);
        }}
        disabled={arrowDisable}
      >
        &lt;
      </button>
     
      <div class="img-container" ref={elementRef}>
      {team.map((item) => (
								
            
                <div class ="rcorners2" onClick={() => {
                  sayHello(item.eid);
                }}>
                  {item.ErnInf} - {item.matchStatus}<br/>
                  {item.teamName1} vs {item.teamName2}<br/>
                  {item.estimatedstartDate} <br/>
                   
                </div>

						
					))}
          </div>
      
      
      <button
        onClick={() => {
          handleHorizantalScroll(elementRef.current, 25, 100, 10);
        }}
      >
        &gt;
      </button>
      </div>

      
    }
    
    </Nav>
      <MatchCenter eid={eid} updateEid={updateEid} loggedUser={loggedUser}/>
      
    </>
  );
};
export default TeamSchedules;
