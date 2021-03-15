import React, { useContext, useState } from "react";
import { EditTaskContext } from "../context/EditTaskContext";
export default function DoneBtn() {
  const { storeEdit, task, delTask } = useContext(EditTaskContext);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mx-2 flex border-2 border-solid border-red-400 ">
      <button
        className=" text-red-700 bg-gray-300 px-2 py-1 rounded-3xl focus:outline-none"
        onClick={(event) => {
          storeEdit(event, toggle, "done", task.id);
          setToggle(!toggle);
        }}
      >
        {task.done ? "Undo" : "Done"}
      </button>

      {task.done && (
        <button
          className=" text-red-700 bg-gray-300 px-2 py-1 rounded-3xl focus:outline-none"
          onClick={() => {
            delTask();
          }}
        >
          Del
        </button>
      )}
    </div>
  );
}
