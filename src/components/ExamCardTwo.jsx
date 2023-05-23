import React from "react";
import { Link } from "react-router-dom";
import imgOne from "../assets/img/img1.png";
function ExamCardTwo({ exam }) {
  return (
    <>
      <Link to="/exam/RANDOMUUID/before-start">
        <img className="w-full" src={imgOne} />
      </Link>
      <div className="bg-white  pt-4 rounded-b-lg">
        <span className="block bg-color-six text-color-one mb-4 rounded-md text-center py-3">
          Running
        </span>
        <Link className="block bg-white text-color-one mb-1 rounded-md text-center py-3 border border-color-one">
          View Exam Details
        </Link>
      </div>
    </>
  );
}

export default ExamCardTwo;
