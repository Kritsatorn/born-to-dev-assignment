import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import "react-day-picker/lib/style.css";
import TaskCard from "../components/TaskCard";
import CreateTask from "../components/CreateTask";
import { EditTaskContextProvider } from "../context/EditTaskContext";
export default function HomePage() {
  const { arrTask, dateFormatShort } = useContext(TodoContext);

  return (
    <div className="w-full h-screen bg-gray-100 text-gray-300 text-center">
      <div className="w-full pt-8 pl-8 text-4xl font-extrabold text-left text-green-400 ">
        TO-DO LIST
      </div>
      <div className="w-full font-sans mt-8 bg-gray-200">
        <CreateTask />
      </div>
      <div className="w-full font-sans mt-8 bg-blue-200">
        To day
        {arrTask &&
          arrTask
            .filter(
              (item) =>
                dateFormatShort(item.date) === dateFormatShort(new Date())
            )
            .map((task) => (
              <EditTaskContextProvider key={task.id} task={task}>
                <TaskCard />
              </EditTaskContextProvider>
            ))}
      </div>
      <div className="w-full font-sans mt-8 bg-red-100">
        Others Day
        {arrTask &&
          arrTask
            .filter(
              (item) =>
                dateFormatShort(item.date) !== dateFormatShort(new Date())
            )
            .map((task) => (
              <EditTaskContextProvider key={task.id} task={task}>
                <TaskCard />
              </EditTaskContextProvider>
            ))}
      </div>
    </div>
  );
}
