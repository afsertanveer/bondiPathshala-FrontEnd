import React from "react";
import img from "../../assets/img/physics.png";
function Question({ question }) {
  return (
    <div className="mb-6">
      <div className="mb-2">
        {question.sl}.{" "}
        <span>{question.type == "text" && question.question}</span>
        {question.type == "image" && (
          <div>
            <img src={img} />
          </div>
        )}
      </div>
      <ul>
        <li className="mb-2 ">
          <div className="form-control text-color-one">
            <label className=" cursor-pointer flex items-center space-x-3 ">
              <span className="label-text text-color-eleven">
                {" "}
                A. {question.options.A}
              </span>{" "}
              <span>[60%]</span>
            </label>
          </div>
        </li>
        <li className="mb-2">
          <div className="form-control text-color-one">
            <label className=" cursor-pointer flex items-center space-x-3">
              <span className="label-text">B. {question.options.B}</span>
              <span>[20%]</span>
            </label>
          </div>
        </li>
        <li className="mb-2">
          <div className="form-control text-color-one">
            <label className=" cursor-pointer flex items-center space-x-3">
              <span className="label-text">C. {question.options.C}</span>
              <span>[15%]</span>
            </label>
          </div>
        </li>
        <li className="mb-2">
          <div className="form-control text-color-one">
            <label className=" cursor-pointer flex items-center space-x-3">
              <span className="label-text">D. {question.options.D}</span>
              <span>[05%]</span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Question;
