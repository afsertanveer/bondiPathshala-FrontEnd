import { Suspense, lazy } from "react";

import { questionSet } from "../../data";
import ExamInfoDetails from "../../components/common/ExamInfoDetails";
import QuestionWithSolution from "../../components/common/QuestionWithSolution";
const LogoTopCenter = lazy(() => import("../../components/LogoTopCenter"));
const examInfos = {
  "Exam Name & Code": " PH 11 (232)",
  "Course: ": "XR",
  Subject: "PR",
  "Total Question ": 30,
  "Marks Per Question ": 2,
  "Total Marks": 60,
  "Negative Marks": "25%",
  "Exam Type": "MCQ",
};
const ExamSolution = () => {
  return (
    <div className="px-28 md:px-4">
      <div className="container mx-auto">
        <Suspense fallback={null}>
          <LogoTopCenter />
        </Suspense>
        {/* examInoDetails */}
        <div className="mb-8">
          <ExamInfoDetails examInfos={examInfos} />

          <div className="border border-color-4 px-6 md:px-2 py-6 md:py-4 mt-4">
            {questionSet.map((question, index) => (
              <QuestionWithSolution question={question} />
            ))}
            {/* Explanation: */}
            <div>
              <span className="block font-bold mb-2">Explanation:</span>
              <div className="border border-color-five px-8 md:px-4 py-4">
                The Royal Bengal Tiger is the national animal of Bangladesh. Its
                populations have been estimated at 440 in Bangladesh. Tigers in
                Bangladesh are now relegated to the forests of the Sundarbans
                and the Chittagong Hill Tracts. The tiger replaces the lion as
                king of the beasts in cultures of eastern Asia representing
                royalty, fearlessness and wrath.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSolution;
