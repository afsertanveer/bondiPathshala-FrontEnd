import React from "react";
import { Link } from "react-router-dom";
import ExamCard from "./ExamCard";

function ExamList({ title, exam, hideViewAll = false }) {
  return (
    <div className="bg-white relative rounded-xl border border-border-color px-5 py-8 lg:mb-10 mb-24">
      <h1 className="text-3xl px-2.5 absolute bg-white -top-5 text-title-color ">
        {title}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-8 md:gap-2 px-8 md:px-4">
        <ExamCard exam={exam.data} />

        {!hideViewAll && (
          <>
            <Link className="btn-view-all btn-theme" to={`${exam.slug}`}>
              <span className="block text-base">View</span>
              <span className="block text-base">All</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default ExamList;
