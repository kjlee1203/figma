import { useMemo } from "react";
import "./InputnameCopy.css";

const InputnameCopy = ({
  eMAILADRRESS,
  johnDoeExampleComPlacehol,
  propBorder,
  propPadding,
  propBorder1,
}) => {
  const inputnameCopy2Style = useMemo(() => {
    return {
      border: propBorder,
      padding: propPadding,
    };
  }, [propBorder, propPadding]);

  const rectangleStyle = useMemo(() => {
    return {
      border: propBorder1,
    };
  }, [propBorder1]);

  return (
    <div className="inputname-copy-2" style={inputnameCopy2Style}>
      <div className="rectangle" style={rectangleStyle} />
      <div className="email-adrress">{eMAILADRRESS}</div>
      <input
        className="john-doe-example-com"
        placeholder={johnDoeExampleComPlacehol}
        type="text"
      />
    </div>
  );
};

export default InputnameCopy;
