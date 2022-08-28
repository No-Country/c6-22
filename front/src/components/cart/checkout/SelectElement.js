import React from "react";

export const SelectElement = ({ handleChange, yearsInit }) => {
  const values = [];
  let name = "";

  if (yearsInit) {
    name = "expiration_years";

    for (let i = yearsInit; values.length <= 10; i++) {
      values.push(i);
    }
  } else {
    name = "expiration_month";

    for (let i = 1; values.length < 12; i++) {
      values.push(i);
    }
  }
  return (
    <select
      className="form-select"
      name={name}
      id={name}
      onChange={handleChange}
    >
      {values.map((value) => {
        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
};
