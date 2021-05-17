import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ClassGridItem from "./ClassGridItem";

const ClassGrid = () => {
  const [userClasses, setUserClasses] = useState([]);

  useEffect(() => {
    fetch("/classes")
      .then((res) => res.json())
      .then((json) => setUserClasses(json.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Wrapper>
      {userClasses &&
        userClasses.map((userClass) => (
          <ClassGridItem key={userClass.id} userClass={userClass} />
        ))}
    </Wrapper>
  );
};

export default ClassGrid;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(331px, 1fr));
  grid-gap: 24px;
`;
