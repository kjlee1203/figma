import { useState } from "react";
import InputnameCopy from "./InputnameCopy";
import "./StartTrialButton.css";
import { Link } from 'react-router-dom';
import api from '../api';
import { useNavigate  } from 'react-router-dom';

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
  const [error, setError] = useState(null);
  const navigateTo = useNavigate();
  const handleSubmit = async () => {
    setSubmittedData1(inputValue1);
    setSubmittedData2(inputValue2);
    event.preventDefault();
    // alert(' email: '+ inputValue1 + '\n password: ' + inputValue2);

    // try {
    //   const response = await api.post('/auth/token/', {
    //     username : inputValue1,
    //     password: inputValue2
    //   });

    try {
      console.log('Submitting data to API:', submittedData1, submittedData2);
      const response = await fetch('http://localhost:8000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
        },
          body: JSON.stringify({
            username: submittedData1,
            password: submittedData2
        }),
      });    
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || 'Login failed');
      } 
      const data = await response.json();
      console.log('Login successful:', data);
      // Handle successful login (e.g., store token in local storage, redirect user)

      // history.push('/dashboard');
      navigateTo('/dashboard');
    } catch (error) {
        console.error('Login error:', error);
        setError(error.message || 'Login failed');
    }

    //   console.log('Response from API:', response.data);
    //   // Handle the response from the API if needed
    // } catch (error) {
    //   console.error('Error sending data to API:', error);
    //   // Handle the error if needed
    // }

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
      <Link  to="/test">Test</Link>
    </form>
  )
}

export default StartTrialButton
