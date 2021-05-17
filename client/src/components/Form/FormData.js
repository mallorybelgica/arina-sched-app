import React, { useState } from "react";
import { useFormik } from "formik";
import StepOneDetails from "./StepOneDetails";
import StepTwoDetails from "./StepTwoDetails";

const FormData = ({ openModal }) => {
  const [step, setStep] = useState(1);
  const [classType, setClassType] = useState({ classType: "" });
  const [classTypeChosen, setClassTypeChosen] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleClick = (value) => {
    setClassType(value);
    setClassTypeChosen(true);
  };

  const formik = useFormik({
    initialValues: {
      className: "",
      dateTime: "",
      frequency: "None",
      duration: "",
      price: "0.00",
      classDesc: "",
      whiteboard: "",
      classType,
    },
    onSubmit: (values) => {
      values["classType"] = classType;
      if (step === 1) {
        nextStep();
      } else if (step === 2) {
        console.log(values);
      }
    },
  });

  switch (step) {
    case 1:
      return (
        <StepOneDetails
          openModal={openModal}
          nextStep={nextStep}
          handleClick={handleClick}
          classTypeChosen={classTypeChosen}
          classType={classType}
          formik={formik}
        />
      );
    case 2:
      return (
        <StepTwoDetails
          nextStep={nextStep}
          prevStep={prevStep}
          classType={classType}
          formik={formik}
        />
      );
  }
};

export default FormData;
