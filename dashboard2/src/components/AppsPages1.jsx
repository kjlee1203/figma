import "./AppsPages1.css";

const AppsPages1 = () => {
  return (
    <div className="apps-pages">
      <div className="list1">
        <img className="smart-home-icon" alt="smarthome.svg" src="/smarthome.svg" />
        <div className="dashboard1">Dashboard</div>
        <div className="badge1">
          <div className="div1">3</div>
        </div>
        <img className="chevron-down-icon" alt="chevrondown.svg" src="/chevrondown.svg" />
      </div>
      <div className="list2">
        <div className="card-parent">
          <img className="card-icon" alt="" src="/card.svg" />
          <img className="deta-table-icon" alt="" src="/card.svg" />
          <img className="market-indices-container" alt="" src="/card.svg" />
        </div>
        <div className="watchlist">Watchlist</div>
        <img className="chevron-right-icon1" alt="" src="/chevronright.svg" />
      </div>
      <div className="list3">
        <div className="transaction-icon">
          <img className="vector-icon" alt="" src="/vector-3.svg" />
          <img className="vector-icon1" alt="" src="/vector-4.svg" />
        </div>
        <div className="transaction">Transaction</div>
        <img className="chevron-right-icon2" alt="" src="/chevronright.svg" />
      </div>
      <div className="list4">
        <div className="layer-25">
          <img className="vector-icon2" alt="" src="/vector-5.svg" />
          <img className="vector-icon3" alt="" src="/vector-6.svg" />
        </div>
        <div className="withdrawl">Withdrawl</div>
        <img className="chevron-right-icon3" alt="" src="/chevronright.svg" />
      </div>
    </div>
  );
};

export default AppsPages1;
