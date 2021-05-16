import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <Logo src=".././logo.png" alt="logo" />
      <div>
        <Button>
          <img src=".././home.png" alt="home" />
        </Button>
        <Button>
          <img src=".././analytics.png" alt="analytics" />
        </Button>
      </div>
      <div>
        <Button>
          <img src=".././settings.png" alt="settings" />
        </Button>
        <Button>
          <img src=".././faqs.png" alt="faqs" />
        </Button>
      </div>
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
  width: 27.07px;
  height: 54.46px;
`;

const Button = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: rgb(255, 255, 255, 0.15);
  border: none;
`;
