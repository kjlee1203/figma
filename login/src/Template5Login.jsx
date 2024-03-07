import StartTrialButton from  "./components/StartTrialButton";
import "./Template5Login.css";

const Template5Login = () => {
  return (
    <div className="template-5login">
      <section className="rectangle-parent">
        <img className="rectangle-icon" alt="" src="/rectangle.svg" />
        <div className="logo">
          <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
          <h3 className="fba-quant">FBA Quant</h3>
        </div>
      </section>
      <div className="checkbox-frame">
	  <StartTrialButton />
      </div>
    </div>
  );
};

export default Template5Login;
