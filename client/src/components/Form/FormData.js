import React, { useState } from "react";
import StepOneDetails from "./StepOneDetails";
import StepTwoDetails from "./StepTwoDetails";

const FormData = ({ openModal }) => {
  const [step, setStep] = useState(1);
  const [classType, setClassType] = useState({ classType: "" });
  const [classTypeChosen, setClassTypeChosen] = useState(false);
  const [formData, setFormData] = useState({
    className: "",
    dateTime: "",
    frequency: "",
    duration: "",
    price: "",
    classDesc: "",
    whiteboard: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };
  const handleClick = (value) => {
    setClassType(value);
    setClassTypeChosen(true);
  };

  switch (step) {
    case 1:
      return (
        <StepOneDetails
          openModal={openModal}
          nextStep={nextStep}
          handleChange={handleChange}
          handleClick={handleClick}
          classTypeChosen={classTypeChosen}
          classType={classType}
          formData={formData}
        />
      );
    case 2:
      return (
        <StepTwoDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          classType={classType}
          formData={formData}
        />
      );
  }
};

export default FormData;
