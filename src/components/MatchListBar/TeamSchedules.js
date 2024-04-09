import React,{ useRef, useState, useEffect } from "react";
import Photos from "./images.json";
import "./TeamPoint.css";

const TeamSchedules = ({scd, ccd}) => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const unsplashed = "https://source.unsplash.com/200x200/";
  const [team, setTeam] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
  console.log("scd = " + scd + ", ccd = " + ccd);
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
            console.log( data);
            setTeam(data);
            setIsLoading(false);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

  return (
    <>
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
      <div>

      {team.map((item) => (
						
							
            <div class="img-container">{item.teamName1} - {item.teamName2}</div>
							
						
						
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
      
      
    </>
  );
};
export default TeamSchedules;
