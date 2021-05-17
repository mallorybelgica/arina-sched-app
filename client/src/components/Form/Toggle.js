import React from "react";
import styled from "styled-components";

const Toggle = () => {
  return (
    <Wrapper>
      <ClassTemplate>Create Class Template</ClassTemplate>
      <ToggleSwitch>
        <Slider></Slider>
      </ToggleSwitch>
    </Wrapper>
  );
};

export default Toggle;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
`;

const ClassTemplate = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  color: rgb(0, 0, 0, 0.65);
`;

const ToggleSwitch = styled.div`
  display: flex;
  justify-content: flex-end;
  border: 1px #dad2cb solid;
  border-radius: 100px;
  width: 27px;
  height: 14px;
`;

const Slider = styled.div`
  border-radius: 100%;
  margin: 2px;
  height: 10.22px;
  width: 10.22px;
  background-color: #dad2cb;
`;
