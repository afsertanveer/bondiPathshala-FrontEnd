// import { Suspense, lazy } from 'react';

import Layout from "./pages/layouts/Layout";
import HeaderLessLayout from "./pages/layouts/HeaderLessLayout";

import Home from "./pages/Home";
import History from "./pages/History";
import MissedExams from "./pages/MissedExams";
import AllExams from "./pages/AllExams";

import BeforeStart from './pages/exams/BeforeStart';
import ExamRules from './pages/exams/ExamRules';
import ExamSolution from './pages/exams/ExamSolution';
import OngoingExam from './pages/exams/OngoingExam';

import Login from "./pages/auth/Login";

export const pages = [
  {
    element: Layout,
    children: [
      {
        path: "/",
        element: Home,
      },
      {
        path: "/history",
        element: History,
      },
      {
        path: "/missed-exams",
        element: MissedExams,
      },
      {
        path:"exam-list/:type/all",
        element: AllExams,
      },
      {
        path:"exam-histories",
        element: AllExams,
      },
      {
        path:"/exam/:exam_code/before-start",
        element: BeforeStart,
      },
      {
        path:"/exam/:exam_code/rules",
        element: ExamRules,
      }
    ],
  },
  {
    element: HeaderLessLayout,
    children: [
      {
        element: Login,
        path: "/login",
      },
      {
        path:"/exam/:exam_code/ongoing",
        element: OngoingExam,
      },
      {
        path:"/exam/:exam_code/solution",
        element: ExamSolution,
      }
    ],
  },
];