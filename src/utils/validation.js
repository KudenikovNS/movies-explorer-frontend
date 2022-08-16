import React from "react";

export const useValidation = (valid) => {
  const [isInvalid, setIsInvalid] = React.useState(valid);
  const [errorMessage, setErrorMessage] = React.useState("");

  const onChange = (evt) => {
    if (!evt.target.validity.valid) {
      setIsInvalid(true);
      setErrorMessage(evt.target.validationMessage);
    } else {
      setIsInvalid(false);
      setErrorMessage("");
    }
  };

  return {
    isInvalid,
    errorMessage,
    onChange,
  };
};

/* 
isWrong = isInvalid
setIsWrong = setIsInvalid
*/
