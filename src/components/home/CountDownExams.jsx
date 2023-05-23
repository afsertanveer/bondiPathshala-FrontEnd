import React from "react";
import CountDownExam from "./CountDownExam";

function CountDownExams() {
  return (
    <div>
      <CountDownExam title="physics" img="physics2.png" date={200000000} />
      <CountDownExam title="chemistry" img="chemistry.png" date={500000000} />
    </div>
  );
}

export default CountDownExams;
