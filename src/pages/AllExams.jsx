import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { examList } from "../data";
import ExamList from "../components/ExamList";
import backIcon from "../assets/img/leftArrow.png";
import BackButton from "../components/common/BackButton";
const types = {
  daily: 0,
  weekly: 1,
  monthly: 2,
};
const title = {
  daily: "All Subjects(Daily Exam)",
  weekly: "All Subjects(Weekly Exam)",
  monthly: "All Subjects(Monthly Exam)",
};
function AllExams() {
  const params = useParams();
  const [list, setList] = useState(null);
  useEffect(() => {
    setList(examList[types[params.type]]);
  }, params.type);
  return (
    list && (
      <div className="px-28 md:px-4">
        <div className="bgdotted container mx-auto my-16 md:my-10">
          <ExamList title={title[params.type]} exam={list} hideViewAll={true} />
        </div>
        <div className="mb-4">
          <BackButton title="Back to Home Page" icon={backIcon} />
        </div>
      </div>
    )
  );
}

export default AllExams;
