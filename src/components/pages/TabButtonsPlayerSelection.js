export default function TabButtonsPlayerSelection({ userDetails, activeTab, setActiveTab}) {
    
    return (
      <div className="tab__header1">
        { 
            userDetails.playerSelect.map((item, index) => (
          <li
            // Adding an active class where the current index matches the currently active tab
          className={`${index === activeTab && "active"} tab__button`}
            key={item.playtype}
            onClick={() => setActiveTab(index)}>
                 {item.playtype} <br />({item.min} -{item.max})<br /> 
                 {
                    item.selection > item.max || item.selection <item.min &&
                    <span className="dotred">{item.selection}</span>
                    
                 }
                 {
                    item.selection <= item.max && item.selection >= item.min &&
                    <span className="dotgreen">{item.selection}</span>
                    
                 }
                 
             
          </li>
        ))}
      </div>
    );
  }