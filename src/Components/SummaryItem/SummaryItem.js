import "./summaryItem.css"

const SummaryItem = ({ itemObject }) => {

  console.log(itemObject["colorClass"])
  return (
    <div className="summary-item">
        <div className={`summary-text ${itemObject["colorClass"]}`}>
            <img src={itemObject["logo"]} />
            <span>{itemObject["text"]}</span>
        </div>
        <div className="summary-score">
            <span className="amount-score">{`${itemObject["score"]}`}</span>
            <span className="total-score">&nbsp;/ 100</span>
        </div>
    </div>
  )
}

export default SummaryItem
