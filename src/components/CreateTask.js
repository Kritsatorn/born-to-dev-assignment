import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
export default function CreateTask() {
  const { addTask, updateField, task, setTask, dateFormatShort } = useContext(
    TodoContext
  );
  return (
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
  );
}
