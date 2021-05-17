import React from "react";
import { Formik } from "formik";
import styled from "styled-components";

const StepOneDetails = ({
  classType,
  classTypeChosen,
  handleClick,
  openModal,
  formik,
}) => {
  return (
    <Wrapper>
      <Formik>
        <form>
          <CloseButton onClick={openModal}>
            ← Back to Class Management
          </CloseButton>
          <FormTitle>Create Detailed Class</FormTitle>
          <ClassTypeLabel>Class Type</ClassTypeLabel>
          <ClassTypeWrapper
            onClick={() => handleClick("virtualClass")}
            classType={classType === "virtualClass"}
          >
            <IconWrapper>
              <Icon src="wifi.png" alt="virtual class" />
            </IconWrapper>
            <ClassTypeDescWrapper>
              <ClassTypeName>Virtual Class</ClassTypeName>
              <ClassTypeDesc>Will be hosted online on ARINA live</ClassTypeDesc>
            </ClassTypeDescWrapper>
          </ClassTypeWrapper>
          <ClassTypeWrapper
            onClick={() => handleClick("inPersonClass")}
            classType={classType === "inPersonClass"}
          >
            <IconWrapper>
              <Icon src="bolt.png" alt="in person class" />
            </IconWrapper>
            <ClassTypeDescWrapper>
              <ClassTypeName>In Person Class</ClassTypeName>
              <ClassTypeDesc>Will be hosted in person</ClassTypeDesc>
            </ClassTypeDescWrapper>
          </ClassTypeWrapper>
          <ClassTypeWrapper
            onClick={() => handleClick("hybridClass")}
            classType={classType === "hybridClass"}
          >
            <IconWrapper>
              <Icon src="hybrid.png" alt="hybrid class" />
            </IconWrapper>
            <ClassTypeDescWrapper>
              <ClassTypeName>Hybrid Class</ClassTypeName>
              <ClassTypeDesc>
                Will be hosted both virtually and in person simultaneously
              </ClassTypeDesc>
            </ClassTypeDescWrapper>
          </ClassTypeWrapper>
          <FormWrapper>
            <FormLabel htmlFor="className" classTypeChosen={classTypeChosen}>
              Class Name
            </FormLabel>
            <ClassNameInput
              id="className"
              name="className"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.className}
              disabled={!classTypeChosen}
            />
            <FieldWrapper>
              <FormLabel htmlFor="dateTime" classTypeChosen={classTypeChosen}>
                Start Date & Time
              </FormLabel>
              <Input
                id="dateTime"
                name="dateTime"
                type="datetime-local"
                onChange={formik.handleChange}
                value={formik.values.dateTime}
                disabled={!classTypeChosen}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="frequency" classTypeChosen={classTypeChosen}>
                Repeat
              </FormLabel>
              <Select
                id="frequency"
                name="frequency"
                onChange={formik.handleChange}
                value={formik.values.frequency}
                disabled={!classTypeChosen}
              >
                <option id="none" name="none">
                  None
                </option>
                <option id="daily" name="daily">
                  Daily
                </option>
                <option id="weekly" name="weekly">
                  Weekly
                </option>
                <option id="monthly" name="monthly">
                  Monthly
                </option>
              </Select>
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="duration" classTypeChosen={classTypeChosen}>
                Duration
              </FormLabel>
              <Input
                id="duration"
                name="duration"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.duration}
                disabled={!classTypeChosen}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="price" classTypeChosen={classTypeChosen}>
                Price
              </FormLabel>
              <Input
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.price}
                disabled={!classTypeChosen}
              />
            </FieldWrapper>
            <Step classTypeChosen={classTypeChosen}>Step 1 of 2</Step>
            <NextStep
              type="submit"
              onClick={formik.handleSubmit}
              classTypeChosen={classTypeChosen}
              disabled={!classTypeChosen}
            >
              Next Step
            </NextStep>
          </FormWrapper>
        </form>
      </Formik>
    </Wrapper>
  );
};

export default StepOneDetails;

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

const FormTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 18px;
  font-weight: 500;
`;

const CloseButton = styled.button`
  padding-top: 18px;
  background-color: #fff;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  color: #7e5d54;
`;

const ClassTypeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px #dad2cb solid;
  padding: 11.95px;
  margin-bottom: 18px;
  border-radius: 3px;
  ${({ classType }) =>
    classType && `background-color: rgba(218, 210, 203, 0.15)`};
`;

const ClassTypeDescWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
`;

const ClassTypeLabel = styled.p`
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  color: rgb(0, 0, 0, 0.65);
`;

const ClassTypeName = styled.p`
  width: 100%;
  margin-top: 0;
  margin-bottom: 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
`;

const ClassTypeDesc = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
`;

const IconWrapper = styled.div`
  text-align: center;
  width: 40.92px;
  height: 40.92px;
  margin-right: 15px;
  border-radius: 100%;
  background-color: rgb(219, 210, 203, 0.15);
`;

const Icon = styled.img`
  vertical-align: middle;
  margin-top: 25%;
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
  width: 215px;
  margin-bottom: 18px;
`;

const FormLabel = styled.label`
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  color: ${(props) =>
    !props.classTypeChosen ? "rgb(0,0,0,0.15)" : "rgb(0,0,0,0.65)"};
`;

const ClassNameInput = styled.input`
  width: 100%;
  padding: 0;
  margin: 0;
  height: 35px;
  border: 1px #dad2cb solid;
  border-radius: 3px;
  margin-bottom: 18px;
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  border: 1px #dad2cb solid;
  border-radius: 3px;
`;

const Select = styled.select`
  width: 100%;
  height: 35px;
  border: 1px #dad2cb solid;
  border-radius: 3px;
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
  color: ${(props) =>
    !props.classTypeChosen ? "rgb(0,0,0,0.15)" : "rgb(0,0,0,0.35)"};
`;

const NextStep = styled.button`
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
  background-color: ${(props) =>
    !props.classTypeChosen ? "rgb(0,0,0,0.5)" : "rgb(0, 0, 0)"};
`;
