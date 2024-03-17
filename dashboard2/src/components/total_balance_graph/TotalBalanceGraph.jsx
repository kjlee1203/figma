import "./TotalBalanceGraph.css";
import aa from "./aa.png";

const TotalBalanceGraph = () => {
  return (
    <div className="card-inner">
      <div className="heading-parent">
        <h3 className="heading">Your Total Balance</h3>
        <div className="heading1">$ 1234.56</div>
        
        <iframe src="/file.html" width="100%" height="400" frameBorder="0"></iframe>
        
        <iframe src="https://plotly.com/~chris/1638.embed" width="100%" height="400" frameBorder="0"></iframe>
        
        <img src="./aa.png" width='300px'/>
        <img src={aa} width='300px'/>
        
        
        
        
        <div className="frame-parent1">
          <div className="frame-wrapper">
            <div className="amount-parent">
              <div className="amount">$4000</div>
              <div className="amount1">$3000</div>
              <div className="amount2">$2000</div>
              <div className="amount3">$1000</div>
              <div className="amount4">0</div>
            </div>
          </div>
          <div className="frame-parent2">
            <div className="frame-parent3">
              <div className="frame-wrapper1">
                <div className="frame-parent4">
                  <div className="frame-parent5">
                    <div className="investment-indicators-wrapper">
                      <div className="investment-indicators" />
                    </div>
                    <div className="income">Income</div>
                  </div>
                  <div className="frame-parent6">
                    <div className="ellipse-wrapper">
                      <div className="frame-inner" />
                    </div>
                    <div className="expenses">Expenses</div>
                  </div>
                </div>
              </div>
              <div className="date">
                <div className="date-child" />
                <div className="monthly">Monthly</div>
                <img
                  className="iconarrow-square-down"
                  alt=""
                  src="/iconarrowsquaredown.svg"
                />
              </div>
            </div>
            <div className="group-frame">
              <div className="card-frame">
                <div className="line-parent">
                  <div className="line" />
                  <div className="line1" />
                  <div className="line2" />
                  <div className="line3" />
                  <div className="line4" />
                  <img className="frame-child1" alt="" src="/vector-5.svg" />
                  <img className="frame-child2" alt="" src="/vector-6.svg" />
                  <div className="line-div" />
                  <img
                    className="tooltip-button-icon"
                    loading="lazy"
                    alt=""
                    src="/tooltip-button.svg"
                  />
                  <div className="tooltip">
                    <div className="wrapper-group-14">
                      <img
                        className="wrapper-group-14-child"
                        loading="lazy"
                        alt=""
                        src="/group-14@2x.png"
                      />
                    </div>
                    <div className="value">$224.00</div>
                    <div className="value1">Income</div>
                  </div>
                </div>
                <div className="months">
                  <div className="text">Jan</div>
                  <div className="text1">Feb</div>
                  <div className="text2">Mar</div>
                  <div className="text3">Apr</div>
                  <div className="text4">May</div>
                  <div className="text5">Jun</div>
                  <div className="text6">Jul</div>
                  <div className="text7">Aug</div>
                  <div className="text8">Sep</div>
                  <div className="text9">Oct</div>
                  <div className="text10">Nov</div>
                  <div className="text11">Dec</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalBalanceGraph;
