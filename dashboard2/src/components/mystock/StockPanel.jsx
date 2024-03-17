import { useMemo } from "react";
import "./StockPanel.css";

const StockPanel = ({
  companyIcon,
  companyName,
  ticker,
  priceChange,
  stockPrice,
  miniGraph,
  panelColor,
  propPadding="var(--padding-base) var(--padding-xs)",
  propPadding1="unset",
  propWidth="120px", ///// width of div including company logo and name
  companyNameColor='#2c2c2c',
  tickerColor='#2c2c2c',
  priceChangeColor,
  currentValueColor='#838383',
  stockPriceColor="#2c2c2c",
}) => {
  const incomeExpensesStyle = useMemo(() => {
    return {
      backgroundColor: panelColor,
      padding: propPadding,
    };
  }, [panelColor, propPadding]);

  const frameIconStyle = useMemo(() => {
    return {
      padding: propPadding1,
      width: propWidth,
    };
  }, [propPadding1, propWidth]);

  const companyNameStyle = useMemo(() => {
    return {
      color: companyNameColor,

    };
  }, [companyNameColor]);

  const tickerStyle = useMemo(() => {
    return {
      color: tickerColor,
    };
  }, [tickerColor]);

  const priceChangeStyle = useMemo(() => {
    return {
      color: priceChangeColor,
    };
  }, [priceChangeColor]);

  const currentValueStyle = useMemo(() => {
    return {
      color: currentValueColor,
    };
  }, [currentValueColor]);

  const stockPriceStyle = useMemo(() => {
    return {
      color: stockPriceColor,
    };
  }, [stockPriceColor]);

  return (
    <div className="income-expenses" style={incomeExpensesStyle}>
      <div className="monthly-budget">
        <div className="frame-icon" style={frameIconStyle}>
          <img className="nvidia-1-icon" loading="lazy" alt="" src={companyIcon} />
          <div className="nvidia" style={companyNameStyle}>
            {companyName}
          </div>
        </div>
        <div className="d-line-m-line">
          <div className="nvda" style={tickerStyle}>
            {ticker}
          </div>
          <div className="am-pm-indicator" style={priceChangeStyle}>
            {priceChange}
          </div>
        </div>
      </div>
      <div className="frame-header-footer">
        <div className="deta-table-row">
          <div className="current-value" style={currentValueStyle}>
            Current Value
          </div>
          <div className="line-frame-line" style={stockPriceStyle}>
            {stockPrice}
          </div>
        </div>
        <img
          className="frame-header-footer-child"
          loading="lazy"
          alt=""
          src={miniGraph}
        />
      </div>
    </div>
  );
};

export default StockPanel;
