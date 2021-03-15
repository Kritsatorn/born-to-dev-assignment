import React, { useContext, useState } from "react";
import { EditTaskContext } from "../context/EditTaskContext";
import { TodoContext } from "../context/TodoContext";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
export default function DateCanEdit() {
  const { storeEdit, task } = useContext(EditTaskContext);
  const { dateFormatShort } = useContext(TodoContext);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative group w-2/12 mx-2 text-left text-base font-light leading-relaxed">
      {!toggle && (
        <span className="px-3 py-3  inline-block    text-pink-800">
          {dateFormatShort(task.date)}
        </span>
      )}
      {toggle && (
        <DayPickerInput
          onDayChange={(day) => {
            storeEdit(null, day, "date", task.id);
            setToggle(!toggle);
          }}
          inputProps={{
            className:
              "focus:outline-none w-full rounded-2xl bg-gray-100 px-3 py-3 ",
          }}
          value={dateFormatShort(task.date)}
          dayPickerProps={{
            todayButton: "Today",
          }}
        />
      )}
      {!toggle && (
        <button
          className=" absolute right-0 mr-2 mt-3 text-2xl  z-10 opacity-10 group-hover:opacity-75"
          onClick={() => setToggle(!toggle)}
        >
          <i class="fas fa-times"></i>
        </button>
      )}
    </div>
  );
}
