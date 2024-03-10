import "./MainMenu.css";
import smarthomeImg from "../../../public/smarthome.svg";
import chevrondownImg from "../../../public/chevrondown.svg";
import cardImg from "../../../public/card.svg";
import chevronrightImg from "../../../public/chevronright.svg";
import vector3Img from "../../../public/vector-3.svg";
import vector4Img from "../../../public/vector-4.svg";

const MainMenu = () => {
  return (
    <div className="apps-pages">
      <div className="list1">
        <img className="smart-home-icon" alt="smarthome.svg" src={smarthomeImg} />
        <div className="dashboard1">Dashboard</div>
        <div className="badge1">
          <div className="div1">3</div>
        </div>
        <img className="chevron-down-icon" alt="chevrondown.svg" src={chevrondownImg} />
      </div>
      <div className="list2">
        <div className="card-parent">
          <img className="card-icon" alt="card.svg" src={cardImg} />
          <img className="deta-table-icon" alt="" src={cardImg} />
          <img className="market-indices-container" alt="" src={cardImg} />
        </div>
        <div className="watchlist">Watchlist</div>
        <img className="chevron-right-icon1" alt="" src={chevronrightImg} />
      </div>
      <div className="list3">
        <div className="transaction-icon">
          <img className="vector-icon" alt="" src={vector3Img} />
          <img className="vector-icon1" alt="" src={vector4Img} />
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

export default  MainMenu;
