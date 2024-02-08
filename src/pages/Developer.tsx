import { NavBar } from "@/mainParts/NavBar";
import { Card } from "@/mainParts/popper";

function Dev() {
  return (
    <div className="flex flex-col justify-between items-center min-h-[103vh] sm:min-h-[100vh] bg-black text-white font-CD">
      <NavBar />
      <div className="sm:w-[70%] flex flex-col justify-center items-center">
        <h1 className="text-[20px] sm:text-[40px] mb-[-1rem] sm:mb-[-2rem] ">
          Marouane Boufarouj & Ismail Assou
        </h1>
        <div className="text-[12px] sm:text-[14px] text-gray-300 font-GN">
          Students from ENSA Khouribga, Morocco!
        </div>
      </div>
      <Card />
    </div>
  );
}

export default Dev;
