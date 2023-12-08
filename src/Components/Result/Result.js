import "./result.css";

const Result = () => {
  return (
    <div className="result-div">
        <h3 className="result-header">Your Result</h3>
        <div className="result-circle">
            <h1>76</h1>
            <h4>of 100</h4>
        </div>
        <div className="result-bottom-div">
            <h2>Great</h2>
            <p>
                You have scored higher than 65% of people that has taken the test
            </p>
        </div>
    </div>
  )
}


export default Result
