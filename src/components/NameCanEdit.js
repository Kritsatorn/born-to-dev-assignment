import React, { useContext, useState } from "react";
import { EditTaskContext } from "../context/EditTaskContext";

export default function NameCanEdit() {
  const [toggle, setToggle] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const { storeEdit, task } = useContext(EditTaskContext);
  return (
    <div className=" relative group z-1 w-9/12 mx-2 text-left text-base font-light leading-relaxed">
      {!toggle && (
        <span
          className={`px-3 py-3 inline-block  text-pink-800 ${
            task.done ? "line-through" : ""
          }`}
        >
          {task.name}
        </span>
      )}

      {toggle && (
        <form
          onSubmit={(event) => {
            storeEdit(event, nameInput, "name", task.id);
            setToggle(!toggle);
          }}
          className=" text-black focus:outline-none"
        >
          <label>
            <input
              className="px-3 py-3 focus:outline-none w-full rounded-2xl bg-gray-100"
              value={nameInput}
              name="name"
              onChange={(event) => setNameInput(event.target.value)}
              placeholder=""
            />
          </label>
        </form>
      )}
      {!toggle && (
        <button
          className=" absolute right-0 mr-2 mt-3 text-2xl z-10 opacity-10 group-hover:opacity-75"
          onClick={() => setToggle(!toggle)}
        >
          <i class="fas fa-times"></i>
        </button>
      )}
    </div>
  );
}
