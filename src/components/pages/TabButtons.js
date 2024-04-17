export default function TabButtons({ scoreData, activeTab, setActiveTab}) {
    return (
      <div className="tab__header">
        { 
            scoreData.scorePlayers.map((item, index) => (
          <li
            // Adding an active class where the current index matches the currently active tab
          className={`${index === activeTab && "active"} tab__button`}
            key={item.teamName}
            onClick={() => setActiveTab(index)}>
            {item.teamName} {item.run}/{item.wickets} {item.overs} Overs
          </li>
        ))}
      </div>
    );
  }