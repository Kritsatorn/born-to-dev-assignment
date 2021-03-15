import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const TodoContext = React.createContext();
const TodoContextProvider = (props) => {
  const [arrTask, setArrTask] = useLocalStorage("arrTask", []);
  const [countTask, setCountTask] = useState(1);
  const [task, setTask] = useState({
    id: 0,
    name: "",
    description: "",
    date: new Date(),
    done: false,
  });
  const dateFormatShort = (date) => {
    var t = new Date(date);
    return (
      t.getDate() + " " + monthShortNames[t.getMonth()] + ", " + t.getFullYear()
    );
  };
  const addTask = (event) => {
    event.preventDefault();

    setArrTask([...arrTask, task]);
    console.log("date", task.date);
    setCountTask((prev) => prev + 1);
    setTask({
      id: countTask,
      name: "",
      description: "",
      date: new Date(),
      done: false,
    });
  };
  const updateField = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };
  var monthShortNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <TodoContext.Provider
      value={{
        arrTask,
        addTask,
        updateField,
        task,
        setTask,
        dateFormatShort,
        setArrTask,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContextProvider, TodoContext };
