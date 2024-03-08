import { useState } from "react";
import InputnameCopy from "./InputnameCopy";
import "./StartTrialButton.css";

function StartTrialButton() {
  // useState for checkbox. Default value is true.
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  // useState for recognizing the user input
  // 1, 2, 3 for the first name, email, and password
  const [inputValue1, setInputValue1] = useState('');
  const handleInputValue1 = (event) => {
        setInputValue1(event.target.value);
      };

  const [inputValue2, setInputValue2] = useState('');
  const handleInputValue2 = (event) => {
        setInputValue2(event.target.value);
      };

  const [inputValue3, setInputValue3] = useState('');
  const handleInputValue3 = (event) => {
        setInputValue3(event.target.value);
      };

  // for storing the user input when the button is clicked
  const [submittedData1, setSubmittedData1] = useState('')
  const [submittedData2, setSubmittedData2] = useState('')
  const [submittedData3, setSubmittedData3] = useState('')
  const handleSubmit = () => {
    setSubmittedData1(inputValue1);
    setSubmittedData2(inputValue2);
    setSubmittedData3(inputValue3);
    alert(' first name: '+ inputValue1 + '\n email: ' + inputValue2
         + '\n password: ' + inputValue3);
  };


  return (
    <form className="start-trial-button">

      {/* titles */}
      <b className="login-title">Sign up to FBA Quant</b>
      <div className="quick-and-simple">{`Quick & Simple way to Automate your investment`}</div>
      
      {/* textboxes for email and password */}
      <div className="password-input">
      <InputnameCopy
          eMAILADRRESS="FIRST NAME"
          johnDoeExampleComPlacehol="John"
          type = "text"
          value={inputValue1}
          onChange={handleInputValue1}
        />
        <InputnameCopy
          eMAILADRRESS="EMAIL ADRRESS"
          johnDoeExampleComPlacehol="johndoe@example.com"
          type = "text"
          value={inputValue2}
          onChange={handleInputValue2}
        />
        
        {/* set type=password to hide the input */}
        <InputnameCopy
          eMAILADRRESS="PASSWORD"
          johnDoeExampleComPlacehol="**********"
          type = "password"
          value={inputValue3}
          onChange={handleInputValue3}
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
          <div className="terms">
            I agree to the Terms of Service and Privacy Policy.
          </div>
        </div>
      </div>
      
        
      {/* create account button */}
      <button className="btn-prytemplate-2" onClick={handleSubmit}>
        <div className="btn-prytemplate-2-child" />
        <div className="proceed-button">CREATE AN ACCOUNT</div>
      </button>

      <div className="or-use">OR</div>
      <a className="terms1" href="https://www.fbaquant.com/">
        Already a Member? Log in Now
      </a>
    </form>
  )
}

export default StartTrialButton
