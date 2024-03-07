import logoImg from "./assets/fba_logo.png";
import bgImg from "./assets/bg.png";
import StartTrialButton from  "./components/StartTrialButton.jsx";
import './Template5Login.css'

function Template5Login() {
  return (
    <div className="template-5login">
      <section className="rectangle-parent">
        <img className="rectangle-icon" alt="rectangle.svg" src={bgImg} />

        <div className="logo">
          <img className="logo-icon" loading="lazy" alt="logo.svg" src={logoImg} />
          <h3 className="fba-quant">FBA Quant</h3>
        </div>
      </section>
      <div className="checkbox-frame">
      <StartTrialButton />
      </div>
    </div>
  )
}

export default Template5Login
