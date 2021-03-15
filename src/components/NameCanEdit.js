import React, { useContext, useState } from "react";
import { EditTaskContext } from "../context/EditTaskContext";
export default function NameCanEdit() {
  const { storeEdit, task } = useContext(EditTaskContext);
  const [toggle, setToggle] = useState(false);
  const [nameInput, setNameInput] = useState("");
  return (
    <div className=" relative group z-1 w-9/12 mx-2 border-2 border-solid border-red-400 ">
      {!toggle && task.name}
      {toggle && (
        <form
          onSubmit={(event) => {
            storeEdit(event, nameInput, "name", task.id);
            setToggle(!toggle);
          }}
          className=" text-black focus:outline-none  bg-gray-800"
        >
          <label>
            <input
              className="focus:outline-none w-full"
              value={nameInput}
              name="name"
              onChange={(event) => setNameInput(event.target.value)}
              placeholder="Hi"
            />
          </label>
        </form>
      )}
      {!toggle && (
        <button
          className=" absolute right-0 mr-2 z-10 opacity-10 group-hover:opacity-75  "
          onClick={() => setToggle(!toggle)}
        >
          x
        </button>
      )}
    </div>
  );
}
