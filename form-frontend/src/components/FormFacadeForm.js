// src/components/FormFacadeForm.js
import React, { useState } from 'react';
import FormfacadeEmbed from "@formfacade/embed-react";

const FormFacadeForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log('Form submitted');
    // You can perform any action you want upon form submission here
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      {!isSubmitted ? (
        <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/109751696142101004214/form/1FAIpQLScJLqmiLtvZDkCtaN6ckCFocaWfjjCpV9zoQTAe1aOU3w5wzg/classic.js/?div=ff-compose"
          onSubmitForm={handleSubmit}
        />
      ) : (
        <div>
          <h2>Form submitted successfully!</h2>
          <button onClick={handleReset}>Submit Again</button>
        </div>
      )}
    </>
  );
};

export default FormFacadeForm;
