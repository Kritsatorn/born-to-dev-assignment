import { useContext } from "react";
import DoneBtn from "../components/DoneBtn";
import DesCanEdit from "../components/DesCanEdit";
import NameCanEdit from "../components/NameCanEdit";
import DateCanEdit from "../components/DateCanEdit";
import { EditTaskContext } from "../context/EditTaskContext";

export default function TaskCard() {
  const { task } = useContext(EditTaskContext);
  return (
    <div className=" bg-gray-200 w-8/12 mx-auto rounded-3xl">
      <div
        className={`py-4 mx-8 mt-4 flex text-red-500 
      ${task.done ? "line-through" : ""} `}
      >
        <DoneBtn />
        <NameCanEdit />
        <DateCanEdit />
      </div>
      {!task.done && <DesCanEdit />}
    </div>
  );
}
