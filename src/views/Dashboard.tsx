import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import ListTask from "../components/ListTask";
import Filters from "../components/Filters";
import Footer from "../components/Footer";
import { DoContextProvider } from "../components/contexts/doContext";
function Dashboard() {
  return (
    <div>
      <Header></Header>
      <DoContextProvider>
        <Search></Search>
        <ListTask></ListTask>
        <Filters></Filters>
      </DoContextProvider>
      <Footer></Footer>
    </div>
  );
}

export default Dashboard;
