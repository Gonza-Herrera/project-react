import React from "react";

const Dropdown = ({ title, onChangeValue, value, object }) => {
  return (
    <div className="dropdown">
      <span>{title}</span>
      <br></br>
      <select
        value={value}
        onChange={(event) => onChangeValue(event.target.value)}
      >
        {object &&
          object.map((data) => (
            <option key={data.id}>{data.description}</option>
          ))}
      </select>
    </div>
  );
};

export default Dropdown;
