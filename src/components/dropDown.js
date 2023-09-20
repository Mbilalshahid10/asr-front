import React, { useState } from "react";

const Dropdown = ({ language, setLanguage, languageOptions }) => {

  const handleSelectChange = (event) => {
    setLanguage(event.target.value);
  };

  const getOptions = () => {
    return languageOptions?.map((option)=><option value={option.code}>{option.language}</option>)
  }

  return (
    <div>
      <select
        className="dropdown"
        value={language}
        onChange={handleSelectChange}
      >
        {getOptions()}
      </select>
    </div>
  );
};

export default Dropdown;
