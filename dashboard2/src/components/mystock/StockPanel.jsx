import { useMemo } from "react";
import "./StockPanel.css";

const StockPanel = ({
  nvidia1,
  nvidia,
  nVDA,
  amPmIndicator,
  lineFrameLineMFrameY,
  group3,
  propBackgroundColor,
  propPadding,
  propPadding1,
  propWidth,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
}) => {
  const incomeExpensesStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBackgroundColor, propPadding]);

  const frameIconStyle = useMemo(() => {
    return {
      padding: propPadding1,
      width: propWidth,
    };
  }, [propPadding1, propWidth]);

  const nvidiaStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const nVDAStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const amPmIndicatorStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const currentValueStyle = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const lineFrameLineStyle = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  return (
    <div className="income-expenses" style={incomeExpensesStyle}>
      <div className="monthly-budget">
        <div className="frame-icon" style={frameIconStyle}>
          <img className="nvidia-1-icon" loading="lazy" alt="" src={nvidia1} />
          <div className="nvidia" style={nvidiaStyle}>
            {nvidia}
          </div>
        </div>
        <div className="d-line-m-line">
          <div className="nvda" style={nVDAStyle}>
            {nVDA}
          </div>
          <div className="am-pm-indicator" style={amPmIndicatorStyle}>
            {amPmIndicator}
          </div>
        </div>
      </div>
      <div className="frame-header-footer">
        <div className="deta-table-row">
          <div className="current-value" style={currentValueStyle}>
            Current Value
          </div>
          <div className="line-frame-line" style={lineFrameLineStyle}>
            {lineFrameLineMFrameY}
          </div>
        </div>
        <img
          className="frame-header-footer-child"
          loading="lazy"
          alt=""
          src={group3}
        />
      </div>
    </div>
  );
};

export default StockPanel;
