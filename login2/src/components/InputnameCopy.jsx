import { useState } from "react";
import "./InputnameCopy.css";

const InputnameCopy = ({
    eMAILADRRESS,
    johnDoeExampleComPlacehol,
    type
}) =>{
    // useState for highlighting the input box
    const [isInputFocused, setIsInputFocused] = useState(false);
    
    const handleInputFocus = () => {
        setIsInputFocused(true);
    };
    const handleInputBlur = () => {
        setIsInputFocused(false);
    };
   

    return(
        
        <div className={`inputname-copy-2 ${isInputFocused ? 'highlighted' : ''}`} >
        {/* add 'highlighted' to class name if isInputFocused is true */}

            {/* show the name of the box (EMAIL ADRRESS or PASSWORD) */}
            <div className="email-adrress">{eMAILADRRESS}</div>
            
            {/* the actual input box */}
            <input
                className="john-doe-example-com"
                placeholder={johnDoeExampleComPlacehol}
                type={type}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </div>
    )
  }

export default InputnameCopy;