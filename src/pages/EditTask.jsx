import React, { useEffect, useState } from "react";
import arrowLeft from '../assets/icons/arrow_left.png'
import Button from '../components/Button'
import { useParams } from "react-router-dom";

const EditTask = ({baseURL}) => {
  const { id } = useParams();
  const [task, setTask] = useState({});

  useEffect(()=>{
    console.log(id);

    const getData = async ()=>{
      const res = await fetch(`${baseURL}/tasks/${id}`);
      const data = await res.json();
      console.log(data);
      setTask(data.task);
    };

    getData();

  }, []);
  
  const updateTask = async () => {
    const res = await fetch(`${baseURL}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center gap-2 py-5">
        <img src={arrowLeft} alt="" />
        <h1 className="m=0">Edit Task</h1>
      </div>

      <form className="w-100 d-flex flex-column gap-5">
        <div className="border rounded-2 py-3 position-relative">
          <label
            className="position-absolute bg-white px-1 text-secondary"
            htmlFor="title"
          >
            Task Title
          </label>
          <input
            className="border-0 w-100 px-3"
            type="text"
            id="title"
            value={task.title}
            placeholder="E.g. Project Defence, Assignment..."
          />
        </div>

        <div className="border rounded-2 py-3 position-relative">
          <label
            className="position-absolute bg-white px-1 text-secondary"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="border-0 w-100 px-3"
            name=""
            id=""
            cols="30"
            rows="5"
            value={task.description}
            placeholder="Briefly describe your text "
          ></textarea>
        </div>

        <div className="border rounded-2 py-1 position-relative">
          <label
            className="position-absolute bg-white px-1 text-secondary"
            htmlFor="tags"
          >
            Tags
          </label>
          <input
            className="border-0 w-100 px-3"
            type="text"
            id="tags"
            value={task.tag}
            placeholder="Urgent"
          />
        </div>
        <Button />
      </form>
      <p className="py-5 text-main-color fw-semibold fs-5 text-decoration-underline">
        Back To Top
      </p>
    </div>
  );
};

export default EditTask;
