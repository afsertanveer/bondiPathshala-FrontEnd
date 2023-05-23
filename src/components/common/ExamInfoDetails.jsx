import React from "react";

function ExamInfoDetails({ examInfos }) {
  return (
    <div className="bg-color-seven px-8 md:px-4 py-8 md:py-4">
      <div className="grid grid-rows-3 md:grid-rows-none grid-flow-col md:grid-flow-row gap-4">
        {Object.keys(examInfos).map((examInfo, index) => (
          <div>
            <span>{examInfo}:</span>
            <span>{examInfos[examInfo]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExamInfoDetails;
