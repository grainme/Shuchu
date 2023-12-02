import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="font-CD flex flex-row w-screen justify-center items-center gap-6 text-slate-200 mx-10 mt-9">
      <Link to="/"> Home </Link>
      <Link to="/login"> About </Link>
      <Link to="/contact"> Developer </Link>
    </div>
  );
}
