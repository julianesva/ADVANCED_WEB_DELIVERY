import React, { useState} from 'react';

const CreditcardValidation = () => {
  const [inputValue, setInputValue] = useState(""); // Store user input
  const [numbers, setNumbers] = useState([]); // Store the list of numbers
  const [errorMessage, setErrorMessage] = useState("");
  const [finalNumber, setFinalNumber] = useState(""); //Handling number for validator
  const [finalResult, setFinalResult] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setInputValue(value);
    if (value.length <= 16) {
      if(value.length < 16){
        setErrorMessage("Add a valid quantity of credit card numbers. Correct quantity = 16 :)");
      }
      else if(value.length === 16){
        setErrorMessage("Valid quantity of Credit Card numbers, you can proceed with validation :)");
      }
      
    }
    else{
      setErrorMessage("You have reached the max limit of 16 digits!");
    }
  };
  
  const CreditCard_Validator = () => {
    const numbersarray = inputValue.split("").map(Number); 
    setNumbers(numbersarray);
    let total = 0;
    for(let i = numbers.length - 1 ; i >= 0 ; i--){
      if(i !== 15){
        if(i % 2 === 0){
          let handle_number = numbers[i] * 2;
          if(handle_number > 9){
            handle_number = handle_number - 9;
          }
          total += handle_number;
        }
        else{
          total += numbers[i];
        }
      }
      else{
        total += numbers[i];
      }
    }
    setFinalNumber(total);
    if(finalNumber % 10 === 0){
      setFinalResult("Valid Credit Card Number!")
    }
    else{
      setFinalResult("I'm sorry, Invalid Credit Card Number!")
    }
  };

    return (
        <div>
          <h1>Credit Card Validator</h1>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter a number"
            className="border p-2 rounded w-full"
          />
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>} {/* Show error message */}
          <button onClick={CreditCard_Validator}>Verify</button>
          <p>{finalResult}</p>
        </div>
      );
    }

export default CreditcardValidation;


