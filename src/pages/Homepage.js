import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
export default function HomePage() {
  const {
    arrTask,
    addTask,
    updateField,
    task,
    setTask,
    dateFormatShort,
  } = useContext(TodoContext);

  return (
    <div className="w-full h-screen bg-gray-100 text-gray-300 text-center">
      <div className="w-full pt-8 pl-8 text-4xl font-extrabold text-left text-green-400 ">
        TO-DO LIST
      </div>
      <div className="w-full font-sans mt-8 bg-red-100">
        {arrTask &&
          arrTask.map((task) => (
            <div
              key={task.id}
              className=" w-full bg-gray-200 text-red-500 border-black border-solid "
            >
              id : {task.id} {task.name} {"  "} {task.description}{" "}
              {dateFormatShort(task.date)}
            </div>
          ))}
        <form onSubmit={addTask} className="text-black focus:outline-none ">
          <label>
            Name L
            <input
              className="focus:outline-none"
              value={task.name}
              name="name"
              onChange={updateField}
              placeholder="Hi"
            />
          </label>

          <label>
            Password:
            <input
              className="focus:outline-none"
              value={task.description}
              name="description"
              type="text"
              onChange={updateField}
              placeholder=""
            />
          </label>
          <label className=" focus:border-none">
            Date:
            <DayPickerInput
              onDayChange={(day) => {
                setTask({ ...task, date: day });
              }}
              value={dateFormatShort(task.date)}
              dayPickerProps={{
                todayButton: "Today",
              }}
            />
          </label>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
