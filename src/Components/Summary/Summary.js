import "./summary.css"
import reactionLogo from "../../assets/images/icon-reaction.svg"
import verbalLogo from "../../assets/images/icon-verbal.svg"
import visualLogo from "../../assets/images/icon-visual.svg"
import memoryLogo from "../../assets/images/icon-memory.svg"

import SummaryItem from "../SummaryItem/SummaryItem"

const statsArray = [
  {
    logo:reactionLogo,
    text:"Reaction",
    score:80,
    colorClass:"red-stat"
  },
  {
    logo:memoryLogo,
    text:"Memory",
    score:92,
    colorClass:"yellow-stat"
  },
  {
    logo:verbalLogo,
    text:"verbal",
    score:61,
    colorClass:"green-stat"
  },
  {
    logo:visualLogo,
    text:"Visual",
    score:72,
    colorClass:"blue-stat"
  },
]

const Summary = () => {
  return (
    <div className="summary-div">
      <h3>Summary</h3>
      <div className="summary-stats-div">
        {statsArray.map((item,id) => <SummaryItem key={`summary-${id}`} itemObject={item} />)}
      </div>
      <button className="summary-button">Continue</button>
    </div>
  )
}


export default Summary