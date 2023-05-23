import React from "react";
import { Link } from "react-router-dom";

function ExamCard({ exam }) {
  return exam.map((data, index) => (
    <div className=" examItem" key={index}>
      <Link to="/exam/RANDOMUUID/before-start">
        <img src={`/images/${data.image}`} className="w-full" />
        <div className="text-center">{data.title}</div>
      </Link>
    </div>
  ));
}

export default ExamCard;
