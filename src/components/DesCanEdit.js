import { useContext } from "react";
import { EditTaskContext } from "../context/EditTaskContext";

export default function DesCanEdit() {
  const { task } = useContext(EditTaskContext);
  return (
    <div
      className=" mx-8 pl-8 text-left flex justify-items-start
       bg-gray-200   "
    >
      <small className="font-normal  leading-normal mt-0 mb-4 text-pink-800">
        <span className=" font-extrabold">DESCRIPTION : </span>
        {task.description}
      </small>
    </div>
  );
}
