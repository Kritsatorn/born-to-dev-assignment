import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { EditTaskContext } from "../context/EditTaskContext";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
export default function TaskCard() {
  const { arrTask, setArrTask, dateFormatShort } = useContext(TodoContext);
  const { task, setTask } = useContext(EditTaskContext);
  const [nameInput, setNameInput] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggleD, setToggleD] = useState(false);
  const delTask = () => {
    setArrTask(arrTask.filter((item) => item.id !== task.id));
  };
  const getItemIndex = (arr, item) => {
    return arr.findIndex((e) => e.id === item);
  };

  function storeEdit(event) {
    event.preventDefault();
    const itemIndex = getItemIndex(arrTask, task.id);
    const obj = {
      ...task,
      name: nameInput,
    };
    if (itemIndex === -1) {
      return;
    }
    const newArr = [...arrTask];
    newArr[itemIndex] = obj;
    setArrTask(newArr);
    setToggle(!toggle);
  }
  const editDate = (day) => {
    console.log("day ", day);
    const itemIndex = getItemIndex(arrTask, task.id);
    const obj = {
      ...task,
      date: day,
    };
    if (itemIndex === -1) {
      return;
    }
    const newArr = [...arrTask];
    newArr[itemIndex] = obj;
    setArrTask(newArr);
    setToggleD(!toggleD);
  };
  return (
    <div className="group">
      <div
        className={`py-4 mx-8 my-4 flex group bg-gray-200 text-red-500 border-2 border-solid border-red-400  
      
      ${task.done ? " line-through" : ""} `}
      >
        <div className="mx-2 border-2 border-solid border-red-400 ">
          <button
            className=" text-red-700 bg-gray-300 px-2 py-1 rounded-3xl focus:outline-none"
            onClick={() => setToggleD(!toggleD)}
          >
            del
          </button>
        </div>
        <div className=" w-9/12 mx-2 border-2 border-solid border-red-400 ">
          {/* {task.name} */}
          {!toggle && task.name}
          {toggle && (
            <form
              onSubmit={storeEdit}
              className=" text-black focus:outline-none  bg-gray-800"
            >
              <label>
                <input
                  className="focus:outline-none w-full"
                  value={nameInput}
                  name="name"
                  onChange={(event) => setNameInput(event.target.value)}
                  placeholder="Hi"
                />
              </label>
            </form>
          )}
        </div>

        <div className=" w-2/12  mx-2  border-2 border-solid border-red-400 ">
          {dateFormatShort(task.date)}
          {toggleD ? "ree" : "dsd"}
          {toggleD && (
            <DayPickerInput
              onDayChange={(day) => editDate(day)}
              value={dateFormatShort(task.date)}
              dayPickerProps={{
                todayButton: "Today",
              }}
            />
          )}
        </div>
      </div>
      <div className="py-4 mx-8 my-4 flex z-1 invisible group-hover:visible bg-gray-200 text-red-500 border-2 border-solid border-red-400 ">
        DES
      </div>
    </div>
  );
}
