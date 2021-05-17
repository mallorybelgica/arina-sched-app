import React, { useState } from "react";
import styled from "styled-components";
import FormData from "./Form/FormData";

const ModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Button onClick={openModal}>+</Button>
      {isOpen === true ? <FormData openModal={openModal} /> : ""}
    </>
  );
};

export default ModalButton;

const Button = styled.button`
  position: absolute;
  right: 28px;
  bottom: 28px;
  height: 72px;
  width: 72px;
  border-radius: 100%;
  border: none;
  background-color: #020b30;
  color: #fff;
  font-size: 2.5rem;
`;
