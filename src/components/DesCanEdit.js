import { useContext } from "react";
import { EditTaskContext } from "../context/EditTaskContext";
export default function DesCanEdit() {
  const { task } = useContext(EditTaskContext);
  return (
    <div
      className="py-4 mx-8 my-4 
       bg-gray-200 text-red-500 border-2 border-solid border-red-400 "
    >
      {/* z-1  opacity-0
        delay-500 transition duration-1000 ease-in-out transform group-hover:opacity-100 */}
      {task.description}
    </div>
  );
}
