import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
const EditTaskContext = React.createContext();
const EditTaskContextProvider = ({ children, task }) => {
  const { arrTask, setArrTask } = useContext(TodoContext);
  const delTask = () => {
    setArrTask(arrTask.filter((item) => item.id !== task.id));
  };
  const getItemIndex = (arr, item) => {
    return arr.findIndex((e) => e.id === item);
  };
  const storeEdit = (event, newVal, field, id) => {
    event && event.preventDefault();
    const itemIndex = getItemIndex(arrTask, id);
    const obj = {
      ...task,
      [field]: newVal,
    };
    if (itemIndex === -1) {
      return;
    }
    const newArr = [...arrTask];
    newArr[itemIndex] = obj;
    setArrTask(newArr);
  };
  return (
    <EditTaskContext.Provider value={{ task, storeEdit, delTask }}>
      {children}
    </EditTaskContext.Provider>
  );
};
export { EditTaskContextProvider, EditTaskContext };
