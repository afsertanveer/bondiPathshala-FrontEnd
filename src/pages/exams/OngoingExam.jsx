import { Suspense, lazy } from "react";
import { questionSet } from "../../data";
import ExamInfoDetails from "../../components/common/ExamInfoDetails";
import CountDownTwo from "../../components/common/CountDownTwo";
import Question from "../../components/common/Question";
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
const OngoingExam = () => {
  return (
    <div className="px-28 md:px-4">
      <div className="container mx-auto">
        <Suspense fallback={null}>
          <LogoTopCenter />
        </Suspense>
        {/* examInoDetails */}
        <div className="mb-8">
          <ExamInfoDetails examInfos={examInfos} />
          <div className="bg-color-ten my-2">
            <CountDownTwo date={30000000} />
          </div>
          <div className="border border-color-4 px-6 py-6 mt-4">
            {questionSet.map((question, index) => (
              <Question question={question} />
            ))}
            {/* submit ans */}
            <div className="text-center my-4">
              <button className="bg-color-one text-white px-28 md:px-8 py-4 rounded-md ">
                Submit Answer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingExam;
