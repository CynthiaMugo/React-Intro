import Search from "./Search";
import Login from "./Login";
import NavComponent from "./NavComponent";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <NavComponent />
      <Search />
      <Login />
    </div>
  );
}

export default Dashboard;