import React, { useState, useEffect } from "react";
import AgeGroupContext from "./AgeGroupContext";

const AgeGroupProvider = ({ children }) => {
  const storedChoice = localStorage.getItem("ageGroupChoice");
  const [ageGroup, setAgeGroup] = useState(storedChoice || "youthful");

  const updateAgeGroup = (choice) => {
    localStorage.setItem("ageGroupChoice", choice);
    setAgeGroup(choice);
  };

  return (
    <AgeGroupContext.Provider value={{ ageGroup, updateAgeGroup }}>
      {children}
    </AgeGroupContext.Provider>
  );
};

export default AgeGroupProvider;
