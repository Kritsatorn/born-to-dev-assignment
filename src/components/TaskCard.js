import { useContext } from "react";
import { EditTaskContext } from "../context/EditTaskContext";
import NameCanEdit from "../components/NameCanEdit";
import DateCanEdit from "../components/DateCanEdit";
import DoneBtn from "../components/DoneBtn";
export default function TaskCard() {
  const { task } = useContext(EditTaskContext);

  return (
    <div className=" bg-green-300 ">
      <div
        className={`py-4 mx-8 my-4 flex  bg-gray-200 text-red-500 border-2 border-solid border-red-400  
      ${task.done ? " line-through" : ""} `}
      >
        <DoneBtn />
        <NameCanEdit />
        <DateCanEdit />
      </div>
      {/* z-1  opacity-0
        delay-500 transition duration-1000 ease-in-out transform group-hover:opacity-100 */}
      {!task.done && (
        <div
          className="py-4 mx-8 my-4 
       bg-gray-200 text-red-500 border-2 border-solid border-red-400 "
        >
          {task.description}
        </div>
      )}
    </div>
  );
}
