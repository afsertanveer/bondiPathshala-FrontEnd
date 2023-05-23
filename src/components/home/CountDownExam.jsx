import React from "react";
import { Link } from "react-router-dom";
import Countdown, { zeroPad } from "react-countdown";
import imgOne from "../../assets/img/img1.png";
import FlipCountdown from "@rumess/react-flip-countdown";
// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="flex space-x-6 md:space-x-4">
        <div className="">
          <div className="lg:text-3xl md:text-sm flex space-x-3 md:space-x-1">
            <div className="timer_design">{zeroPad(hours).split("")[0]}</div>
            <div className="timer_design">{zeroPad(hours).split("")[1]}</div>
          </div>
          <div className="text-center">Hours</div>
        </div>
        <div className="">
          <div className="lg:text-3xl md:text-sm flex space-x-3 max-md:space-x-1">
            <div className="timer_design">{zeroPad(minutes).split("")[0]}</div>
            <div className="timer_design">{zeroPad(minutes).split("")[1]}</div>
          </div>
          <div className="text-center">Minutes</div>
        </div>
        <div className="">
          <div className="lg:text-3xl md:text-sm flex space-x-3 max-md:space-x-1">
            <div className="timer_design">{zeroPad(seconds).split("")[0]}</div>
            <div className="timer_design">{zeroPad(seconds).split("")[1]}</div>
          </div>
          <div className="text-center">Seconds</div>
        </div>
      </div>
    );
  }
};
function CountDownExam({ title, img, date }) {
  return (
    <div>
      {/* exam button  */}
      <div className="mb-4">
        <Link to="/exam/RANDOMUUID/before-start" className="block">
          <img className="w-full" src={imgOne} />
        </Link>
      </div>
      {/* count down */}
      <div className="">
        {/* <Countdown date={Date.now() + date} renderer={renderer} /> */}
        <FlipCountdown
          theme="dark"
          hideYear
          hideMonth
          hideDay
          titlePosition="bottom"
          endAtZero
          dayTitle="Days"
          hourTitle="Hours"
          minuteTitle="Minutes"
          secondTitle="Seconds"
          endAt={"2023-6-1 01:26:58"} // Date/Time
        />
      </div>
    </div>
  );
}

export default CountDownExam;
