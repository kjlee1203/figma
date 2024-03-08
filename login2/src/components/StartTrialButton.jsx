import { useState } from "react";
import InputnameCopy from "./InputnameCopy";
import "./StartTrialButton.css";
import { Link } from 'react-router-dom';

function StartTrialButton() {
  // useState for checkbox. Default value is true.
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  // useState for recognizing the user input
  const [inputValue1, setInputValue1] = useState('');
  const handleInputValue1 = (event) => {
        setInputValue1(event.target.value);
      };

  const [inputValue2, setInputValue2] = useState('');
  const handleInputValue2 = (event) => {
        setInputValue2(event.target.value);
      };

  // for storing the user input when the button is clicked
  const [submittedData1, setSubmittedData1] = useState('')
  const [submittedData2, setSubmittedData2] = useState('')
  const handleSubmit = () => {
    setSubmittedData1(inputValue1);
    setSubmittedData2(inputValue2);
    alert(' email: '+ inputValue1 + '\n password: ' + inputValue2);
  };


  return (
    <form className="start-trial-button">

      {/* titles */}
      <b className="login-title">Log in to FBA Quant</b>
      <div className="quick-and-simple">{`Quick & Simple way to Automate your investment`}</div>
      
      {/* textboxes for email and password */}
      <div className="password-input">
        <InputnameCopy
          eMAILADRRESS="EMAIL ADRRESS"
          johnDoeExampleComPlacehol="johndoe@example.com"
          type = "text"
          value={inputValue1}
          onChange={handleInputValue1}
        />
        
        {/* set type=password to hide the input */}
        <InputnameCopy
          eMAILADRRESS="PASSWORD"
          johnDoeExampleComPlacehol="**********"
          type = "password"
          value={inputValue2}
          onChange={handleInputValue2}
        />
      </div>

      {/* checkbox */}
      <div className="checkbox-with-new-shape">
        <div className="terms-text">
          <input
            className="checkbox"
            checked={checkboxChecked}
            type="checkbox"
            onChange={(event) => setCheckboxChecked(event.target.checked)}
          />
          <div className="terms">Remember Me</div>
        </div>
      </div>
      
        
      {/* proceed button */}
      <button className="btn-prytemplate-2" onClick={handleSubmit}>
        <div className="btn-prytemplate-2-child" />
        <div className="proceed-button">PROCEED</div>
      </button>

      <div className="or-use">OR</div>
      <Link className="terms1" to="/signup">No account yet? Register now</Link>
      <Link  to="/dashboard">Dashboard</Link>
    </form>
  )
}

export default StartTrialButton
