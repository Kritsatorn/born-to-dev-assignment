import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import TaskCard from "../components/TaskCard";
import { EditTaskContextProvider } from "../context/EditTaskContext";
export default function HomePage() {
  const {
    arrTask,
    addTask,
    updateField,
    task,
    setTask,
    dateFormatShort,
  } = useContext(TodoContext);
  // const [done, setDone] = useState(false);
  return (
    <div className="w-full h-screen bg-gray-100 text-gray-300 text-center">
      <div className="w-full pt-8 pl-8 text-4xl font-extrabold text-left text-green-400 ">
        TO-DO LIST
      </div>
      <div className="w-full font-sans mt-8 bg-red-100">
        {arrTask &&
          arrTask.map((task) => (
            <EditTaskContextProvider key={task.id} task={task}>
              <TaskCard />
            </EditTaskContextProvider>
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
