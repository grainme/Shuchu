import logo from "../assets/Shushu Logo.png";
import laptop from "../assets/Laptop_sh.png";

const shuchuInstaller = "/public/shuchu-win32-x64.rar";

function DownloadPart() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = shuchuInstaller;
    link.download = "Shuchu.rar";
    link.click();
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mx-[5rem]">
      <div className="sm:w-[40%] mt-10">
        <img src={laptop} alt="Laptop" />
      </div>
      <div className="sm:w-[50%] flex flex-col justify-center items-center gap-7 mt-10">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="Product Logo" height="140px" width="140px" />
          <div className="text-[20px] font-CD mt-[-1rem]">shūchū</div>
        </div>
        <div>
          <h1 className="text-[30px] sm:text-[40px] font-GN text-center tracking-tighter">
            Download the latest version of Shūchū!
          </h1>
          <div className="text-[10px] sm:text-[14px] text-gray-300 font-GN text-center mt-4">
            The latest organizing app now comes installed with the most recent
            version. Upgrade today to efficiently manage your tasks,
            repetitions, assignments, and projects. Join Shuchu by downloading
            the app and enjoy its offline functionality — ad-free!
          </div>
        </div>

        <button
          className="rounded-lg bg-slate-50 text-gray-950 hover:bg-slate-200 p-3"
          onClick={handleDownload}
        >
          Download for Windows
        </button>
      </div>
    </div>
  );
}

export default DownloadPart;
