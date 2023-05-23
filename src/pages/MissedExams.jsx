import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/common/Pagination";
const data = [
  {
    sl: 1,
    date: "01 Apr, Sun",
    name: "Weekly Exam",
    type: "MCQ+Written",
    startTime: "9:00 AM",
    endTime: "10:00 AM",
  },
  {
    sl: 2,
    date: "22 Mar, Mon",
    name: "Daily Exam",
    type: "MCQ",
    startTime: "6:00 AM",
    endTime: "7:00 AM",
  },
  {
    sl: 3,
    date: "28 Mar, Tue",
    name: "Weekly Exam",
    type: "MCQ+Written",
    startTime: "9:00 AM",
    endTime: "9:30 AM",
  },
  {
    sl: 4,
    date: "28 Mar, Tue",
    name: "Weekly Exam",
    type: "Written",
    startTime: "9:00 AM",
    endTime: "10:00 AM",
  },
  {
    sl: 5,
    date: "18 Jan, Tue",
    name: "Monthly Exam",
    type: "Written",
    startTime: "04:00 PM",
    endTime: "05:00 PM",
  },
  {
    sl: 6,
    date: "12 Mar, Tue",
    name: "Weekly Exam",
    type: "MCQ",
    startTime: "9:00 AM",
    endTime: "10:00 AM",
  },
  {
    sl: 7,
    date: "21 Mar, Tue",
    name: "Weekly Exam",
    type: "MCQ+Written",
    startTime: "9:00 AM",
    endTime: "10:00 AM",
  },
];
const MissedExams = () => {
  const [pageCount, setPageCount] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, []);
  const handlePageClick = (event) => {
    let clickedPage = event.selected + 1;
    console.log(clickedPage);
  };
  return (
    <div className="px-28 md:px-4">
      <div className="container mx-auto">
        {/* subject */}
        <div className="my-8 flex gap-4 md:gap-2 justify-start ">
          <span className="bg-color-four px-4 md:px-2 py-4 inline-block ">
            Subject:physics
          </span>
          <span className="bg-color-five px-4 py-4 inline-block">
            Course:physics 1
          </span>
        </div>

        {/* missed exam table */}
        <div className="overflow-x-auto">
          <table className="overflow-x-scroll table-fixed w-full customTable">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th className="py-5 w-[80px]">Sl No.</th>
                <th className="w-[180px]">Date</th>
                <th className="w-[180px]">Name</th>
                <th className="w-[180px]">Type</th>
                <th className="w-[180px]">Start Time</th>
                <th className="w-[180px]">End Time</th>
                <th className="w-[220px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData &&
                tableData.map((data, index) => (
                  <tr
                    key={index}
                    className="even:bg-table-row-even odd:bg-table-row-odd text-center "
                  >
                    <th className="py-5">{data.sl}</th>
                    <td>{data.date}</td>
                    <td>{data.name}</td>

                    <td>{data.type}</td>
                    <td>{data.startTime}</td>
                    <td>{data.endTime}</td>
                    <td>
                      <div className="space-x-2">
                        <Link
                          to="/"
                          className="bg-color-one  rounded-md text-center text-white px-3 py-2"
                        >
                          Start Exan
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* pagination */}
        <div className="my-6">
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
      </div>
    </div>
  );
};

export default MissedExams;
