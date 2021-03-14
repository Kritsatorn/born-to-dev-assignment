import React from "react";
import HomePage from "./pages/Homepage";
import { Switch, Route } from "react-router-dom";
import { TodoContextProvider } from "./context/TodoContext";

function App() {
  return (
    <Switch>
      <Route path="/">
        <TodoContextProvider>
          <HomePage />
        </TodoContextProvider>
      </Route>
    </Switch>
  );
}
export default App;
