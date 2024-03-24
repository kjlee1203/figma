import "./TotalBalanceGraph.css";
import aa from "./aa.png";

const TotalBalanceGraph = () => {
  return (
    <div className="card-inner">
      <div className="heading-parent">
        <h3 className="heading">Your Total Balance</h3>
        <div className="heading1">$ 1234.56</div>
        
        <iframe src="/my_stock.html" width="100%" height="400" frameBorder="0"></iframe>
        
        {/*  <iframe src="https://plotly.com/~chris/1638.embed" width="100%" height="400" frameBorder="0"></iframe>    */}
        

      </div>
    </div>
  );
};

export default TotalBalanceGraph;
