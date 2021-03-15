import { useContext } from "react";
import "react-day-picker/lib/style.css";
import TaskCard from "../components/TaskCard";
import CreateTask from "../components/CreateTask";
import { TodoContext } from "../context/TodoContext";
import { EditTaskContextProvider } from "../context/EditTaskContext";

export default function HomePage() {
  const { arrTask, dateFormatShort } = useContext(TodoContext);

  return (
    <div className="w-full bg-gray-100 text-gray-300 text-center">
      <div className="w-full pt-8 pl-8 text-left ">
        <h1 class="text-6xl font-normal leading-normal mt-0 mb-2 text-pink-800">
          TO-DO LIST
        </h1>
      </div>
      <div className="w-full font-sans mt-8 bg-white">
        <CreateTask />
      </div>
      <div className="w-full font-sans mt-8 ">
        <h2 class=" text-left text-5xl font-normal leading-normal pl-8 mt-0 mb-2 text-pink-800">
          Today
        </h2>
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
      <div className="w-full font-sans mt-8 ">
        <h2 class=" text-left text-5xl font-normal leading-normal pl-8 mt-0 mb-2 text-pink-800">
          Others Day
        </h2>
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
