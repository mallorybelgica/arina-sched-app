import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <Logo src=".././logo.png" alt="logo" />
      <FirstSection>
        <Button>
          <NavLink to="/">
            <img src=".././home.png" alt="home" />
          </NavLink>
        </Button>
        <Button>
          <NavLink to="/analytics">
            <img src=".././analytics.png" alt="analytics" />
          </NavLink>
        </Button>
      </FirstSection>
      <SecondSection>
        <Button>
          <NavLink to="/account">
            <img src=".././settings.png" alt="settings" />
          </NavLink>
        </Button>
        <Button>
          <NavLink to="/faqs">
            <img src=".././faqs.png" alt="faqs" />
          </NavLink>
        </Button>
      </SecondSection>
      <Button>
        <img src=".././exit.png" alt="exit" />
      </Button>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 65px;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #020b30;
`;

const Logo = styled.img`
  padding-top: 10px;
  width: 27.07px;
  height: 54.46px;
`;

const FirstSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  border-top: 1px solid rgb(255, 255, 255, 0.5);
  padding-top: 5px;
  height: 35%;
`;

const SecondSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  border-bottom: 1px solid rgb(255, 255, 255, 0.5);
  padding-bottom: 5px;
  height: 35%;
`;

const Button = styled.button`
  width: 45px;
  height: 45px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 100%;
  background-color: rgb(255, 255, 255, 0.15);
  border: none;

  &:active {
    background-color: rgb(255, 255, 255, 0.45);
  }
`;
