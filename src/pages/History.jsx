import React, { useEffect, useState } from "react";
import axios from "../utils/axios"
import v1 from "../assets/img/icons/tasksquare.svg";
import v2 from "../assets/img/icons/eye.svg";
import v3 from "../assets/img/icons/rulerpen.svg";
import ReactPaginate from "react-paginate";
import Pagination from "../components/common/Pagination";
import Modal from "react-modal";
import filterLogo from "../assets/img/filter.png";
import crossImage from "../assets/img/cross.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const History = () => {
  const [TOKEN, setTOKEN] = useState(null);
  const [pageCount, setPageCount] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  // modal
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    setTOKEN(localStorage.getItem("STDNTTKN"));
  });
  useEffect(() => {
    if (TOKEN) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`
      axios.get('/api/student/history')
        .then(({ data }) => {
          setTableData(data);
        }).catch(err=>{
          console.log(err)
        });
    }
  }, [TOKEN]);

  const handlePageClick = (event) => {
    let clickedPage = event.selected + 1;
    console.log(clickedPage);
  };
  return (
    <div className="px-28 md:px-4">
      <div className="container mx-auto">
        {/* Modal */}
        <div className="text-right mt-6">
          <button
            className="inline-flex gap-2 items-center border rounded-md border-[#FF5722]  px-12 py-2"
            onClick={openModal}
          >
            <img src={filterLogo} />
            <span className="text-[#FF5722]">Filter</span>
          </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="text-right">
              <button onClick={closeModal}>
                <img className="w-6 h-6" src={crossImage} />
              </button>
            </div>
            <div className="px-20 md:px-1">
              <form>
                <div className="mb-3">
                  <label>Date</label>
                  <input
                    className="block w-full border rounded-md border-border-color py-2 px-2 focus:outline-none focus:border-border-color-3"
                    type="date"
                    name="date"
                  />
                </div>
                <div className="form-control w-full mb-3">
                  <label>Title</label>
                  <select className="select select-bordered focus:border-1 focus:outline-none focus:border-border-color-3 outline-none">
                    <option>Chaptar One</option>
                    <option>Chaptar Two</option>
                    <option>Chaptar Three</option>
                  </select>
                </div>
                <div className="form-control w-full mb-3">
                  <label>Type</label>
                  <select className="select select-bordered focus:border-1 focus:outline-none focus:border-border-color-3 outline-none ">
                    <option>Chaptar One</option>
                    <option>Chaptar Two</option>
                    <option>Chaptar Three</option>
                  </select>
                </div>
                <div className="form-control w-full mb-3">
                  <label>Name</label>
                  <select className="select select-bordered focus:border-1 focus:outline-none focus:border-border-color-3 outline-none ">
                    <option>Chaptar One</option>
                    <option>Chaptar Two</option>
                    <option>Chaptar Three</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full block bg-color-one text-white mt-5 mb-5 rounded-md py-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </Modal>
        </div>

        {/* Modal */}
        {/* history table */}
        <div className="overflow-x-auto pt-1 pb-8">
          <table className="overflow-x-scroll table-fixed w-full customTable">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th className="py-5 min-w-full w-[80px]">Sl No.</th>
                <th className="min-w-full w-[160px]">Date</th>
                <th className="min-w-full w-[160px]">Title</th>
                <th className="min-w-full w-[160px]">Subject</th>
                <th className="min-w-full w-[160px]">D/W/M</th>
                <th className="min-w-full w-[160px]">Exam Type</th>
                <th className="min-w-full w-[90px]">Marks</th>
                <th className="min-w-full w-[110px]">Merit Postition</th>
                <th className="min-w-full w-[200px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData &&
                tableData.map((data, index) => (
                  <tr
                    key={index}
                    className="even:bg-table-row-even odd:bg-table-row-odd text-center "
                  >
                    <th className="py-5">{index+1}</th>
                    <td>{data.examStartTime}</td>
                    <td>{data.title}</td>
                    <td>{data.subjectName}</td>
                    <td>{data.variation}</td>
                    <td>{data.type}</td>
                    <td>{data.totalObtainedMarks ?? 0}/{data.totalMarksMcq}</td>
                    <td>{data.meritPosition}</td>
                    <td>
                      <div className="space-x-2">
                        <button className="bg-color-one h-[38px] w-[38px] rounded-full text-center">
                          <img className="inline-block" src={v1} />
                        </button>
                        <button className="bg-color-two h-[38px] w-[38px] rounded-full text-center">
                          <img className="inline-block" src={v2} />
                        </button>
                        <button className="bg-color-three h-[38px] w-[38px] rounded-full text-center">
                          <img className="inline-block" src={v3} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* react paginate */}
        <div className="mb-6">
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
      </div>
    </div>
  );
};

export default History;
