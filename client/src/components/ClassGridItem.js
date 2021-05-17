import React from "react";
import styled from "styled-components";

const ClassGridItem = ({ userClass }) => {
  return (
    <Wrapper>
      <NextClass>Your Next Class</NextClass>
      <ImageWrapper>
        <Image src={userClass.instructorImage} />
      </ImageWrapper>
      <ClassWrapper>
        <Workout>{userClass.workout}</Workout>
        <Instructor>
          With <InstructorName href="#"> {userClass.instructor}</InstructorName>
        </Instructor>
        <Time>{userClass.time}</Time>
      </ClassWrapper>
      <DetailsWrapper>
        <DurationAttendance>
          <Icon src="time.png" />
          {userClass.duration}
        </DurationAttendance>
        <DurationAttendance>
          <Icon src="people.png" /> {userClass.attendance} People Registered
        </DurationAttendance>
      </DetailsWrapper>
      <Description>{userClass.description}</Description>
      <Start href="#">Start Class →</Start>
    </Wrapper>
  );
};

export default ClassGridItem;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 18px;
  background-color: white;
  border: 1px solid #dbbcae;
  box-shadow: 6px 6px 21px rgba(0, 0, 0, 0.05);
`;

const ClassWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`;

const NextClass = styled.p`
  margin-top: 0;
  width: 100%;
  font-family: "Playfair Display", serif;
  font-size: 18px;
  font-weight: lighter;
`;

const ImageWrapper = styled.div`
  width: 20%;
`;
const Image = styled.img`
  object-fit: cover;
  height: 72px;
  width: 72px;
  border-radius: 100%;
`;

const Workout = styled.h1`
  width: 100%;
  margin: 0;
  font-family: "Playfair Display", serif;
  font-weight: 500;
  font-size: 22px;
`;

const Instructor = styled.p`
  margin: 0;
  margin-bottom: 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
`;

const InstructorName = styled.a`
  color: #7e5d54;
`;

const Time = styled.p`
  width: 100%;
  margin: 0;
  margin-bottom: 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
`;

const DetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const DurationAttendance = styled.span`
  padding-right: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  color: #7e5d54;
`;

const Icon = styled.img`
  padding: 0px 5px;
  width: 20px;
  height: 15px;
`;

const Description = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  line-height: 1.25rem;
  color: #666666;
  margin-bottom: 75px;
`;

const Start = styled.a`
  width: 100%;
  text-align: right;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  color: #7e5d54;
`;
