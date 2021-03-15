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
    <div className="relative group w-2/12 mx-2 border-2 border-solid border-red-400 ">
      {!toggle && dateFormatShort(task.date)}
      {toggle && (
        <DayPickerInput
          onDayChange={(day) => {
            storeEdit(null, day, "date", task.id);
            setToggle(!toggle);
          }}
          value={dateFormatShort(task.date)}
          dayPickerProps={{
            todayButton: "Today",
          }}
        />
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
