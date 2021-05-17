import React from "react";
import styled from "styled-components";
import { Formik } from "formik";

const StepTwoDetails = ({ prevStep, formik }) => {
  const back = (ev) => {
    ev.preventDefault();
    prevStep();
  };

  return (
    <Wrapper>
      <Formik>
        <form>
          <BackButton onClick={back}>← Back to Step 1</BackButton>
          <FormTitle>Create Detailed Class</FormTitle>
          <FormWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="classDesc">Class Description</FormLabel>
              <TextArea
                id="classDesc"
                name="classDesc"
                type="text"
                rows="5"
                cols="20"
                onChange={formik.handleChange}
                value={formik.values.classDesc}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="whiteboard">Whiteboard</FormLabel>
              <TextArea
                id="whiteboard"
                name="whiteboard"
                type="text"
                rows="5"
                cols="20"
                onChange={formik.handleChange}
                value={formik.values.whiteboard}
              />
            </FieldWrapper>
          </FormWrapper>
          <Step>Step 2 of 2</Step>
          <Submit type="submit" onClick={formik.handleSubmit}>
            Create Class
          </Submit>
        </form>
      </Formik>
    </Wrapper>
  );
};

export default StepTwoDetails;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  padding: 0px 18px;
  position: absolute;
  background-color: #fff;
  width: 450px;
  height: 100vh;
  right: 0;
  top: 0;
`;

const BackButton = styled.button`
  width: 100%;
  text-align: left;
  padding-top: 18px;
  background-color: #fff;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  color: #7e5d54;
`;

const FormTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 18px;
  font-weight: 500;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 450px;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 18px;
`;

const FormLabel = styled.label`
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  color: rgb(0, 0, 0, 0.65);
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0;
  margin: 0;
  border: 1px #dad2cb solid;
  border-radius: 3px;
  margin-bottom: 18px;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
`;

const Step = styled.p`
  position: absolute;
  width: 50%;
  bottom: 0;
  margin-left: -18px;
  margin-bottom: 30px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  color: rgb(0, 0, 0, 0.35);
`;

const Submit = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 18px;
  margin-bottom: 18px;
  width: 215px;
  height: 42.05px;
  border: none;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  background-color: #000;
`;
