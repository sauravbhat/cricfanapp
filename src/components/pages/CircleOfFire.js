// pages/Scorecard.js

import React, { useState, useEffect } from "react";
import "./CircleOfFire.css";

import styled from "styled-components";




const CircleOfFire = ({ eid }) => {


    console.log(eid)
    const [isLoading, setIsLoading] = useState(false);
    


    //const [sortedField, setSortedField] = React.useState(null);


    return (
        <div>
            {isLoading ? "Click a match to see the score" :
                <>
                    <div className="main__container">
                    <table width="100%" border="1">
                            <tr><td>Transfers Remainign:100 </td>
                                <td>winner Predictor: <br />
                                    CSK some buton MI </td>
                                </tr>
                                <tr><td>nitro: </td>
                                <td>2x highest score </td>
                                <td>  something else </td>
                                </tr>    
                        </table>
                    </div>
                    <br />
                    <div className="main__container">

                        <div className="circleouter">
                          <div class="selPlayerKeeper">
                           
                           <div className="coftd"> 
                           <img src="https://cricfan.s3.amazonaws.com/ipl/CSKoutline.png" width="55%" height="55%"/> 
                           <br/> Dhoni </div>
                          </div>
                          <div  class="selPlayerbat">
                            <div className="coftd"> <img src="https://cricfan.s3.amazonaws.com/ipl/RCBoutline.png" width="55%" height="55%"/>
                             <br/> Kohli </div>
                            <div className="coftd"> <img src="https://cricfan.s3.amazonaws.com/ipl/KKRoutline.png" width="55%" height="55%"/>
                             <br/> Naraine <img src="https://cricfan.s3.amazonaws.com/ipl/airplane.png" width="20px" height="20px"/> </div>
                            <div className="coftd"> <img src="https://cricfan.s3.amazonaws.com/ipl/LSGoutline.png" width="55%" height="55%"/>
                             <br/> Kohli </div>
                            <div className="coftd"> <img src="https://cricfan.s3.amazonaws.com/ipl/DCoutline.png" width="55%" height="55%"/>
                             <br/> Kohli </div>
                          </div>
                          <div  class="selPlayerar">
                            <div className="coftd"> <img src="https://cricfan.s3.amazonaws.com/ipl/GToutline.png" width="55%" height="55%"/>
                             <br/> Kohli </div>
                            <div className="coftd"> <img src="https://cricfan.s3.amazonaws.com/ipl/RRoutline.png" width="55%" height="55%"/>
                             <br/> Kohli </div>
                            <div className="coftd"> <img src="https://cricfan.s3.amazonaws.com/ipl/MIoutline.png" width="55%" height="55%"/>
                             <br/> Kohli </div>
                            <div className="coftd"> <img src="https://cricfan.s3.amazonaws.com/ipl/PBKSoutline.png" width="55%" height="55%"/>
                             <br/> Kohlinjjjj  <img src="https://cricfan.s3.amazonaws.com/ipl/airplane.png" width="20px" height="20px"/></div>
                            <div className="coftd"> <img src="https://cricfan.s3.amazonaws.com/ipl/SRHoutline.png" width="55%" height="55%"/>
                             <br/> Kohli </div>
                          </div>
                          <div  class="selPlayerball">
                          <div className="coftd"> <img src="https://cricfan.s3.amazonaws.com/ipl/CSKoutline.png" width="55%" height="55%"/>
                           <br/> Kohli </div>
                          <div className="coftd"> <img src="https://cricfan.s3.amazonaws.com/ipl/RCBoutline.png" width="55%" height="55%"/>
                           <br/> Kohli </div>
                          <div className="coftd"> <img src="https://cricfan.s3.amazonaws.com/ipl/CSKoutline.png" width="55%" height="55%"/>
                           <br/> Kohli </div>
                          <div className="coftd"> <img src="https://cricfan.s3.amazonaws.com/ipl/CSKoutline.png" width="55%" height="55%"/>
                           <br/> Kohli </div>
                          </div>
                        </div>
                        

                    </div>
                </>
            }
        </div>
    );

};

export default CircleOfFire;

