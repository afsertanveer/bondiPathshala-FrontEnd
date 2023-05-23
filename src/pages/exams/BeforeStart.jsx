import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../components/common/BackButton";
import backIcon from "../../assets/img/leftArrow.png";
import ExamInfos from "../../components/common/ExamInfos";
const LogoTopCenter = lazy(() => import("../../components/LogoTopCenter"));
const BeforeStart = () => {
  return (
    <div className="px-28 md:px-4">
      <div className="container mx-auto pt-8 pb-24">
        <Suspense fallback={null}>
          <LogoTopCenter />
        </Suspense>
        {/* exam content */}
        <div className="grid grid-cols-6 gap-2 mt-4">
          <div className="col-start-2 md:col-start-1 col-span-4 md:col-span-6 ">
            {/* exam infos */}
            <ExamInfos
              name="PH 11 (232)"
              course="Physics 1"
              subject="Physics"
            />
            {/* user input box */}
            <div className="border border-color-six mt-4 px-12 md:px-4 py-8 mb-4 md:py-4 rounded-md">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="text-black">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input border border-border-color-5"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="text-black">Institution Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter institution name"
                  className="input border border-border-color-5"
                />
              </div>
              <div className="form-control mb-4 ">
                <label className="label">
                  <span className="text-black">Mobile Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  className="input border border-border-color-5"
                />
              </div>

              {/* start exam button */}
              <Link
                to="/exam/RANDOMUUID/rules"
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

export default BeforeStart;
