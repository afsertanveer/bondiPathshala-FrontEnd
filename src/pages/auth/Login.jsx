import { Suspense, lazy, useEffect, useState } from 'react';
import axios from "../../utils/axios";
import login from '../../assets/img/icons/login.svg';

const LogoTopCenter = lazy(() => import("../../components/LogoTopCenter"));
const Toast = lazy(() => import("../../components/common/Toast"));

var debounce = 0;
const Login = () => {
  const [regNo, setRegno] = useState(null);
  const [courseId, setCourseId] = useState(null);
  const [courses, setCourses] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log(window.location.pathname);
    // localStorage.removeItem("STDNTTKN");
    // localStorage.removeItem("STDNTID");
    // localStorage.removeItem("FORCOURSE");
  }, []);
  useEffect(() => {
    if (regNo && regNo.length > 3) {
      clearTimeout(debounce);
      debounce = setTimeout(async () => {
        await axios.get('/api/coursevsstudent/getcoursebyreg?regNo=' + regNo)
          .then(({ data }) => {
            if (data) {
              setError(null);
              setCourses(data.courses);
            } else {
              setCourses(null);
              setError({ message: 'No course found for the student', cssClass: 'error' });
            }
          }).catch(err => {
            console.log(err);
            setCourses(null);
            setError({ message: 'No course found for the student', cssClass: 'error' });
          })
      }, 800);
    }
  }, [regNo]);


  async function doLogin() {
    if (!regNo || !courseId) {
      return;
    } else {
      await axios.post('/api/student/login', { regNo, courseId })
        .then(({ data }) => {
          if (data.token) {
            localStorage.setItem("STDNTTKN", data.token);
            localStorage.setItem("STDNTID", data.studentIdStr);
            localStorage.setItem("FORCOURSE", data.courseIdStr);
            window.location.href = "/";
          }
        });
    }
  }

  return (
    <div className="container-web mx-auto min-h-without-footer items-center pt-[118px]">
      <Suspense fallback={null}>
        <LogoTopCenter />
      </Suspense>
      <Suspense fallback={null}>
        <Toast {...error} />
      </Suspense>
      <div className="flex flex-row flex-wrap md:flex-nowrap px-48">
        <div className="basis-1/2 mx-auto">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Registration No.</span>
            </label>
            <input type="text" placeholder="Enter Registration No." className="input input-bordered w-full rounded-sm" onChange={(event) => setRegno(event.target.value)} />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Select Course</span>
            </label>
            <select className="select input input-bordered w-full rounded-sm" onChange={(e) => setCourseId(e.target.value)} defaultValue="">
              <option value="">Select your preferred course</option>
              {
                (courses && courses.length > 0) && courses.map((course, index) => (<option key={index} value={course._id}>{course.name}</option>))

              }
            </select>
          </div>
          <button className="relative btn btn-block btn-hover border-0 rounded-md mt-8 mb-2 btn-theme text-white" onClick={doLogin}>
            <div className="iconGroup">
              <span className='absolute login_arrow'>
                <img src={login} alt="login.svg" />
              </span>
            </div>
            Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login;
