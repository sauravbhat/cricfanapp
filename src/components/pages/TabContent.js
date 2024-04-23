export default function TabContent({ scoreData, activeTab}) {
    console.log(scoreData)
    const scores = scoreData.scorePlayers[activeTab];
    

    return (
        <div className="tab__container ">   
           
       
               
                  <div  className="tab__content">
                    <p>Batting</p>
                    <table border="1">
                        <th>full Name</th>
                        <th>Run</th>
                        <th>ballfaced</th>
                        <th>four</th>
                        <th>Six</th>
                        <th>srrate</th>
                     {scores.bat.map(bats => {
                         return (
                            
                               <tr>
                                    <td class="batstyle"><b>{bats.fullName}</b><br/>{bats.fulltext}</td>
                                    <td>{bats.run}</td>
                                    <td>{bats.ballfaced}</td>
                                    <td>{bats.four}</td>
                                    <td>{bats.six}</td>
                                    <td>{bats.srrate}</td>
                                   
                                </tr> 
                               
                                                                     
                         )
                     })}
                     </table>
                     <p>Bowling</p>
                     <table border="1">
                        <th>full Name</th>
                        <th>Overs</th>
                        <th>maiden</th>
                        <th>Run</th>
                        <th>wickets</th>
                        <th>RR</th>
                        <th>noball</th>
                        <th>wideball</th>
                        
                     {scores.bowl.map(balls => {
                         return (
                            
                               <tr>
                                    <td>{balls.fullName}</td>
                                    <td>{balls.totalover}</td>
                                    <td>{balls.maiden}</td>
                                    <td>{balls.rungiven}</td>
                                    <td>{balls.wicket}</td>
                                    <td>{balls.runperover}</td>
                                    <td>{balls.noball}</td>
                                    <td>{balls.wideball}</td>
                                </tr> 
                               
                                                                     
                         )
                     })}
                     </table>
                 </div>
                
               
          
       </div>
       );
  }