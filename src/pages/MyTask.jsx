import React, { useEffect, useState } from "react";
import editIcon from "../assets/icons/edit-icon.png";
import deleteIcon from "../assets/icons/delete_icon.png";
import { Link } from "react-router-dom";

const MyTask = ({baseURL}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${baseURL}/tasks`);
      const data = await response.json();
      setData(data.tasks);
      console.log(data.tasks);
    };

    getData();
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center py-4">
        <p className="fs-3 m-0 fw=semibold">MyTask</p>
        <Link
          to="/new-task"
          className="m-0 text-main-color fw-semibold text-decoration-none"
        >
          +Add New Task
        </Link>
      </div>

      <div className="d-flex flex-column gap-4 mb-5">
        {data && data.map((eachTask) => {
          const { _id, title, description, tag } = eachTask;
          let textColor =
            tag.toLowerCase().trim() === "urgent"
              ? "text-danger"
              : "text-success";

          return (
            <div
              key={_id}
              className="border border-2 border-light p-3 rounded-3"
            >
              <div className="d-flex justify-content-between pb-3 align-items-end">
                <p className={`m-0 ${textColor}`}>{tag}</p>
                <div className="d-flex align-items-center gap-3">
                  <Link
                    to={`/edit-task/${_id}`}
                    className="btn text-white bg-main-color d-flex align-items-center gap-1"
                  >
                    {" "}
                    <img src={editIcon} alt="edit-icon" /> Edit
                  </Link>
                  <button className="btn text-main-color border-main-color border-1 d-flex align-items-center gap-1">
                    {" "}
                    <img src={deleteIcon} alt="" />
                    Delete
                  </button>
                </div>
              </div>

              <div className="text-md-start py-3 border-top border-light border-2">
                <p className="fs-3 fw-semibold">{title}</p>
                <p className="text-secondary">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="py-5 text-main-color fw-semibold fs-5 text-decoration-underline">
        Back To Top
      </p>
    </div>
  );
};

export default MyTask;
