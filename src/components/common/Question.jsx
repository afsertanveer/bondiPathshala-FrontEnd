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
        <li className="mb-2">
          <div className="form-control">
            <label className=" cursor-pointer flex items-center space-x-3">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
              />
              <span className="label-text"> A. {question.options.A}</span>
            </label>
          </div>
        </li>
        <li className="mb-2">
          <div className="form-control">
            <label className=" cursor-pointer flex items-center space-x-3">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
              />
              <span className="label-text">B. {question.options.B}</span>
            </label>
          </div>
        </li>
        <li className="mb-2">
          <div className="form-control">
            <label className=" cursor-pointer flex items-center space-x-3">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
              />
              <span className="label-text">C. {question.options.C}</span>
            </label>
          </div>
        </li>
        <li className="mb-2">
          <div className="form-control">
            <label className=" cursor-pointer flex items-center space-x-3">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
              />
              <span className="label-text">D. {question.options.D}</span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Question;
