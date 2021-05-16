import React, { useState } from "react";
import { useFormik, Form, Field } from "formik";
import styled from "styled-components";

const StepOneDetails = ({
  classType,
  formData,
  handleChange,
  handleClick,
  nextStep,
  openModal,
}) => {
  const next = (ev) => {
    ev.preventDefault();
    nextStep();
  };

  const formik = useFormik({
    initialValues: { ...formData, classType },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Wrapper>
      <form>
        <button onClick={openModal}>Back to Class Management</button>
        <h1>Create Detailed Class</h1>
        <p>Class Type</p>
        <div>
          <div
            active={classType === "virtualClass"}
            onClick={() => handleClick("virtualClass")}
          >
            <p>Virtual Class</p>
            <p>Will be hosted online on ARINA live</p>
          </div>
          <div
            active={classType === "inPersonClass"}
            onClick={() => handleClick("inPersonClass")}
          >
            <p>In Person Class</p>
            <p>Will be hosted in person</p>
          </div>
          <div
            active={classType === "hybridClass"}
            onClick={() => handleClick("hybridClass")}
          >
            <p>Hybrid Class</p>
            <p>Will be hosted both virtually and in person simultaneously</p>
          </div>
        </div>
        <label htmlFor="className">Class Name</label>
        <input
          id="className"
          name="className"
          type="text"
          onChange={handleChange}
          value={formData.className}
        />
        <label htmlFor="dateTime">Start Date & Time</label>
        <input
          id="dateTime"
          name="dateTime"
          type="datetime-local"
          onChange={handleChange}
          value={formData.dateTime}
        />
        <label htmlFor="frequency">Repeat</label>
        <select
          id="frequency"
          name="frequency"
          onChange={handleChange}
          value={formData.frequency}
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
        </select>
        <label htmlFor="duration">Duration</label>
        <input
          id="duration"
          name="duration"
          type="number"
          onChange={handleChange}
          value={formData.duration}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={handleChange}
          value={formData.price}
        />
        <button onClick={next}>Next Step</button>
      </form>
    </Wrapper>
  );
};

export default StepOneDetails;

const Wrapper = styled.div`
  position: absolute;
  background-color: #fff;
  width: 35%;
  height: 100vh;
  right: 0;
  top: 0;
`;

// return (
//     <Wrapper>
//       <button onClick={openModal}>Back to Class Management</button>
//       <h1>Create Detailed Class</h1>
//       <p>Class Type</p>
//       <label htmlFor="virtualClass">
//         <input
//           id="virtualClass"
//           name="classType"
//           type="radio"
//           onChange={handleChange}
//           value="virtualClass"
//         />
//         Virtual Class<span>Will be hosted online on ARINA live</span>
//       </label>

//       <label htmlFor="inPersonClass">
//         <input
//           id="inPersonClass"
//           name="classType"
//           type="radio"
//           onChange={handleChange}
//           value="inPersonClass"
//         />
//         In Person Class<span>Will be hosted in person</span>
//       </label>

//       <label htmlFor="hybridClass">
//         <input
//           id="hybridClass"
//           name="classType"
//           type="radio"
//           onChange={handleChange}
//           value="hybridClass"
//         />
//         Hybrid Class
//         <span>Will be hosted both virtually and in person simultaneously</span>
//       </label>

//       <label htmlFor="className">Class Name</label>
//       <input
//         id="className"
//         name="className"
//         type="text"
//         onChange={handleChange}
//         value={formData.className}
//       />
//       <label htmlFor="dateTime">Start Date & Time</label>
//       <input
//         id="dateTime"
//         name="dateTime"
//         type="datetime-local"
//         onChange={handleChange}
//         value={formData.dateTime}
//       />
//       <label htmlFor="frequency">Repeat</label>
//       <select
//         id="frequency"
//         name="frequency"
//         onChange={handleChange}
//         value={formData.frequency}
//       >
//         <option id="none" name="none">
//           None
//         </option>
//         <option id="daily" name="daily">
//           Daily
//         </option>
//         <option id="weekly" name="weekly">
//           Weekly
//         </option>
//         <option id="monthly" name="monthly">
//           Monthly
//         </option>
//       </select>
//       <label htmlFor="duration">Duration</label>
//       <input
//         id="duration"
//         name="duration"
//         type="number"
//         onChange={handleChange}
//         value={formData.duration}
//       />
//       <label htmlFor="price">Duration</label>
//       <input
//         id="price"
//         name="price"
//         type="number"
//         onChange={handleChange}
//         value={formData.price}
//       />
//       <button onClick={next}>Next Step</button>
//     </Wrapper>
//   );
