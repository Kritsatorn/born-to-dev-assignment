import { useContext } from "react";
import { EditTaskContext } from "../context/EditTaskContext";
import NameCanEdit from "../components/NameCanEdit";
import DateCanEdit from "../components/DateCanEdit";
import DoneBtn from "../components/DoneBtn";
import DesCanEdit from "../components/DesCanEdit";
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
      {!task.done && <DesCanEdit />}
    </div>
  );
}
