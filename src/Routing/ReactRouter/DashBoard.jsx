import Search from "./Search";
import Login from "./Login";
import NavComponent from "./NavComponent";
import { Outlet } from "react-router";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <NavComponent />
      {/* <Search />
      <Login /> */}
      <Outlet />
    </div>
  );
}

export default Dashboard;