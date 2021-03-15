import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
export default function CreateTask() {
  const { addTask, updateField, task, setTask, dateFormatShort } = useContext(
    TodoContext
  );
  return (
    <form onSubmit={addTask} className="text-black py-4  ">
      <label>
        <span className=" mr-2 text-xl font-semibold inline-block py-1 px-2 rounded text-gray-600 bg-gray-200 uppercase ">
          Title
        </span>

        <input
          className=" px-3 py-3 m-2 w-5/12 placeholder-gray-400 text-gray-700 relative 
          rounded-xl  bg-white  text-sm shadow
          outline-none focus:outline-none focus:shadow-outline
            "
          value={task.name}
          name="name"
          type="text"
          onChange={updateField}
          required
          placeholder=""
        />
      </label>
      <label className="">
        <span className="text-xl ml-6 mr-4 font-semibold inline-block py-1 px-2 rounded text-gray-600 bg-gray-200 uppercase">
          Due Date
        </span>
        <DayPickerInput
          inputProps={{
            className:
              "px-3 py-3 placeholder-gray-400 text-gray-700 relative rounded-xl  bg-white text-sm shadow outline-none focus:border-yellow-700  focus:outline-none focus:shadow-outline ",
          }}
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
      <label className="flex justify-items-center items-start  ">
        <span className="text-xl mr-4 mt-2 ml-auto block font-semibold py-1 px-2 uppercase rounded text-gray-600 bg-gray-200 ">
          Description
        </span>

        <textarea
          className="px-3 py-3 m-2 mr-auto w-9/12 placeholder-gray-400 text-gray-700 
          relative rounded-xl  bg-white  text-sm shadow outline-none
           focus:outline-none focus:shadow-outline focus:border-yellow-700 "
          value={task.description}
          name="description"
          //type="textarea"
          onChange={updateField}
          placeholder=""
          rows={5}
        />
      </label>

      <br />
      <button
        className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        style={{ transition: "all .15s ease" }}
      >
        Add Task
      </button>
    </form>
  );
}
