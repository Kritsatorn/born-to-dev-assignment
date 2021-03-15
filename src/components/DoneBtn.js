import React, { useContext, useState } from "react";
import { EditTaskContext } from "../context/EditTaskContext";
export default function DoneBtn() {
  const { storeEdit, task, delTask } = useContext(EditTaskContext);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mx-2 flex ">
      <button
        className=" bg-gray-300 text-white text-xl active:bg-gray-600 font-bold uppercase
         px-3 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        style={{ transition: "all .15s ease" }}
        onClick={(event) => {
          storeEdit(event, toggle, "done", task.id);
          setToggle(!toggle);
        }}
      >
        {task.done ? (
          <i className="fa fa-undo"></i>
        ) : (
          <i className="fa fa-check"></i>
        )}
      </button>

      {task.done && (
        <button
          className=" bg-gray-300 text-white text-xl ml-1 active:bg-gray-600 font-bold uppercase
        px-3 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          onClick={() => {
            delTask();
          }}
        >
          <i className="fa fa-trash-alt"></i>
        </button>
      )}
    </div>
  );
}
