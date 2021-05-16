import React from "react";
import styled from "styled-components";

const StepTwoDetails = ({ prevStep, formData, classType, handleChange }) => {
  const back = (ev) => {
    ev.preventDefault();
    prevStep();
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    formData = { ...formData, classType };
    console.log(formData);
  };

  return (
    <Wrapper>
      <button onClick={back}>Back to Step 1</button>
      <h1>Create Detailed Class</h1>
      <label htmlFor="classDesc">Class Description</label>
      <textarea
        id="classDesc"
        name="classDesc"
        type="text"
        onChange={handleChange}
        value={formData.classDesc}
      />
      <label htmlFor="whiteboard">Whiteboard</label>
      <textarea
        id="whiteboard"
        name="whiteboard"
        type="text"
        onChange={handleChange}
        value={formData.whiteboard}
      />
      <button onClick={handleSubmit}>Create Class</button>
    </Wrapper>
  );
};

export default StepTwoDetails;

const Wrapper = styled.div`
  position: absolute;
  background-color: #fff;
  width: 35%;
  height: 100vh;
  right: 0;
  top: 0;
`;
