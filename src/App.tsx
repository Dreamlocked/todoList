import React from "react";

import { Route, Switch } from "wouter";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import { UserIdContextProvider } from "./components/contexts/UserIdContext";

function App() {
  return (
    <div className="bg-gray-100 h-[100vh] dark:bg-gray-900">
      <UserIdContextProvider>
        <Switch>
          <Route component={Dashboard} path="/dashboard"></Route>
          <Route component={Login} path="/"></Route>
        </Switch>
      </UserIdContextProvider>
    </div>
  );
}

export default App;
