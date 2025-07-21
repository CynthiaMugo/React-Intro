import { useNavigate, useLocation } from "react-router";
function NavComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const getClass = (toCheck) => {
    let path = location.pathname;
    if (path === toCheck) {
      return "btn btn-primary m-1";
    } else {
      return "btn btn-secondary m-1";
    }
  }
    return (
    <div>
      <button onClick={() => {navigate("/dashboard/search")}} className={`btn ${getClass("/dashboard/search")}`}>Search</button>
      <button onClick={() => {navigate("/dashboard")}} className={`btn ${getClass("/dashboard")}`}>ALL</button>
      <button onClick={() => {navigate("/")}} className={`btn btn-secondary m-1`}>Logout</button>
    </div>
    );
}
export default NavComponent;