import React from "react";
//transitionAnswer ? "Correct!" : "Incorrect";

const transitionScreen = ({ transitionAnswer }) => {
  return (
    <>
      <div className="transition-container">
        <div className="transition">
          {console.log(transitionAnswer)}
          <h2>{transitionAnswer ? "Correct!" : "Incorrect"}</h2>
        </div>
      </div>
    </>
  );
};

export default transitionScreen;
