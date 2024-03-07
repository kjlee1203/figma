import { useState } from "react";
import InputnameCopy from "./InputnameCopy";
import "./StartTrialButton.css";

function StartTrialButton() {
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  return (
    <form className="start-trial-button">
      <b className="start-your-14-day">Log in to FBA Quant</b>
      <div className="already-a-member">{`Quick & Simple way to Automate your investment`}</div>
      
      <div className="password-input">
        <InputnameCopy
          eMAILADRRESS="EMAIL ADRRESS"
          johnDoeExampleComPlacehol="johndoe@example.com"
        />
        <InputnameCopy
          eMAILADRRESS="PASSWORD"
          johnDoeExampleComPlacehol="**********"
          propBorder="1px solid var(--color-gainsboro)"
          propPadding="var(--padding-xs) var(--padding-14xl) var(--padding-3xs) var(--padding-mid)"
          propBorder1="1px solid var(--color-gainsboro)"
        />
      </div>

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

      <button className="btn-prytemplate-2">
        <div className="btn-prytemplate-2-child" />
        <div className="create-an-account">PROCEED</div>
      </button>

      <div className="or-use">OR</div>
      <div className="terms1">No account yet? Register now</div>
    </form>
  )
}

export default StartTrialButton
