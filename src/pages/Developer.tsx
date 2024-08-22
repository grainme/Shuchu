import { NavBar } from "@/mainParts/NavBar";
import { Card } from "@/mainParts/popper";

function Dev() {
  return (
    <div className="flex flex-col justify-between items-center min-h-[103vh] sm:min-h-[100vh] bg-black text-white font-CD">
      <NavBar />
      <div className="sm:w-[70%] flex flex-col justify-center items-center">
        <h1 className="text-[10px] sm:text-[40px] mb-[-1rem] sm:mb-[-2rem] ">
          dev by Marouane Boufarouj
        </h1>
      </div>
      <Card />
    </div>
  );
}

export default Dev;
