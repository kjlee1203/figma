import logoImg from "./assets/fba_logo.png";
import bgImg from "./assets/bg.png";
import StartTrialButton from  "./components/StartTrialButton.jsx";
import './Template5Signup.css'
import { Link } from 'react-router-dom';

function Template5Signup() {
  return (
    <div className="template-5login">
      
      {/*This section is for the logo and the background*/}
      <section className="logo-and-bg">
        
        <img className="background-image" alt="bg.png" src={bgImg} />

        <div className="logo">
          <img className="logo-icon" loading="lazy" alt="logo.svg" src={logoImg} />
          <h3 className="fba-quant">FBA Quant</h3>
        </div>
      </section>

      {/*login form*/}
      <div className="checkbox-frame">
        <StartTrialButton />
      </div>
    </div>
  )
}

export default Template5Signup
