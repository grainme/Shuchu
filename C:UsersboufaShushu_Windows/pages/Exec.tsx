import { NavBar } from "@/mainParts/NavBar";
import DownloadPart from "@/mainParts/downloadPart";

function Exec() {
  return (
    <div className="flex flex-col justify-between items-center min-h-[103vh] sm:min-h-[100vh] bg-black text-white">
      <NavBar />
      <DownloadPart />
      <div className="mb-5"></div>
    </div>
  );
}

export default Exec;
