import React, { useState, useEffect } from "react";
const EditTaskContext = React.createContext();
const EditTaskContextProvider = ({ children, task }) => {
  // const [task, setTask] = useState(task);
  return (
    <EditTaskContext.Provider value={{ task }}>
      {children}
    </EditTaskContext.Provider>
  );
};
export { EditTaskContextProvider, EditTaskContext };
