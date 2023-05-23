import React, { useState, useEffect } from "react";

import { examList } from "../data";
import ExamList from "../components/ExamList";
import CountDownExam from "../components/home/CountDownExam";
import ExamCardTwo from "../components/ExamCardTwo";

import axios from "../utils/axios";
const Home = () => {

  const [TOKEN, setTOKEN] = useState(null);
  const [homePage, setHomePage] = useState({
    top: null, bottom: null
  });
  useEffect(() => {
    setTOKEN(localStorage.getItem("STDNTTKN"));
  });
  useEffect(() => {
    if (TOKEN) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + TOKEN;
      axios.get('/api/home/gethomepage?section=top')
        .then(({ data }) => {
          setHomePage({ top: data });
          axios.get('/api/home/gethomepage?section=bottom')
            .then(({ data }) => {
              setHomePage({ bottom: data });
            });
        });

    }
  }, [TOKEN]);

  return (
    <React.Fragment>
      <div className="bg-border-color-2 px-28 md:px-4">
        <div className="container mx-auto py-6">
          <div className="grid grid-cols-12 md:block gap-8">
            <div className="col-span-6 ">
              <div className="bg-white border border-border-color-3 px-6 pt-6 pb-4 rounded-lg mb-4">
                <CountDownExam
                  title="physics"
                  img="physics2.png"
                  date={200000000}
                />
              </div>
              <div className="bg-white border border-border-color-3 px-2 py-3 rounded-lg">
                <CountDownExam
                  title="physics"
                  img="physics2.png"
                  date={200000000}
                />
              </div>
            </div>
            <div className="col-span-6 ">
              <div className="grid gap-4 grid-cols-2">
                <div className="col-span-2 border border-border-color-3 bg-white rounded-lg px-5 py-5">
                  <ExamCardTwo />
                </div>
                <div className="col-span-2 border border-border-color-3 bg-white rounded-lg px-5 py-5">
                  <ExamCardTwo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bgdotted px-28 md:px-4">
        <div className="container mx-auto py-12">
          <div>
            <ExamList title="All Subjects(Daily Exam)" exam={examList[0]} />
            <ExamList title="All Subjects(Weekly Exam)" exam={examList[1]} />
            <ExamList title="All Subjects(Monthly Exam)" exam={examList[2]} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
