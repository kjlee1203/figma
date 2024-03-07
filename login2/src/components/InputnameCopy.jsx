import { useState } from "react";
import "./InputnameCopy.css";

const InputnameCopy = ({
    eMAILADRRESS,
    johnDoeExampleComPlacehol,
}) =>{
    const [isInputFocused, setIsInputFocused] = useState(false);

    
    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

   

    return(
        <div className={`inputname-copy-2 ${isInputFocused ? 'highlighted' : ''}`} >
            
            <div className="email-adrress">{eMAILADRRESS}</div>
            <input
                className="john-doe-example-com"
                placeholder={johnDoeExampleComPlacehol}
                type="text"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </div>
    )
  }

export default InputnameCopy;