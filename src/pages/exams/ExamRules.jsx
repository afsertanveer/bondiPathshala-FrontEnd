import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../components/common/BackButton";
import backIcon from "../../assets/img/leftArrow.png";
import ExamInfos from "../../components/common/ExamInfos";
import { examRules } from "../../data";
const LogoTopCenter = lazy(() => import("../../components/LogoTopCenter"));
const ExamRules = () => {
  return (
    <div className="px-28 md:px-4">
      <div className="container mx-auto pt-8 py-24">
        <Suspense fallback={null}>
          <LogoTopCenter />
        </Suspense>
        {/* exam content */}
        <div className="grid grid-cols-6  mt-4">
          <div className="col-start-2 md:col-start-1 col-span-4 md:col-span-6  ">
            {/* exam infos */}
            <ExamInfos
              name="PH 11 (232)"
              course="Physics 1"
              subject="Physics"
            />
            {/* user input box */}
            <div className="border border-color-six mt-4 px-32 md:px-6 py-8  md:py-6 rounded-md">
              {/* exam rules */}
              <div className="border border-color-four px-6 py-5 rounded-md">
                <div className="text-center text-xl text-color-one mb-4">
                  <span className="uppercase block font-bold">
                    Rules And Regulations
                  </span>
                  <span className="uppercase font-bold">(Exam Day)</span>
                </div>
                <ul>
                  {examRules.map((rule, index) => (
                    <li
                      className="list-inside list-disc -indent-6 pl-6 font-bold"
                      key={index}
                    >
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
              {/* start exam button */}
              <Link
                to="/exam/RANDOMUUID/ongoing"
                className="block text-center bg-color-one text-white rounded-md py-4 mt-6 mb-4"
              >
                Start Exam
              </Link>
              <BackButton
                title="Back to exam page"
                url="/exams"
                icon={backIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamRules;
