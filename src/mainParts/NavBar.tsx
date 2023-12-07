import { Link } from "react-router-dom";
import { Tasks } from "./Tasks";

export function NavBar() {
  return (
    <div className="font-CD flex flex-row w-screen justify-center items-center gap-6 text-slate-200 mx-10 mt-9">
      <Link to="/"> Home </Link>
      <Tasks />
      <Link to="/WhoAmI"> Developer </Link>
      <Link to="/Download"> Download </Link>
    </div>
  );
}
