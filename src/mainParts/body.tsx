import { useState, useEffect } from "react";
import { Settings } from "./Settings";
import { useSelector } from "react-redux";
import { AlertNotif } from "./Alert";

export function Body() {
  const Time = useSelector((state: any) => state.page.value.time);
  const initialTime = Time ? Time * 60 : 25 * 60;
  const [time, setTime] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    setTime(initialTime);
  }, [Time, initialTime]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setShowAlert(true);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, time]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const start = (): void => {
    setIsRunning(true);
    setTime((prevTime) => prevTime - 1);
  };

  const reset = (): void => {
    setIsRunning(false);
    setTime(initialTime);
  };

  return (
    <div className="font-CD font flex flex-col md:w-[45rem] h-[25rem]  text-white items-center justify-center m-4 overflow-hidden rounded-lg">
      {showAlert && <AlertNotif />}
      <div className="flex sm:flex-row flex-col justify-between items-center w-full md:mt-2 sm:h-1/3">
        <h1 className="text-[40px] sm:text-[30px] mx-[3rem] md:text-[40px] font-bold max-w-[70%]">
          Shūchū
        </h1>
        <div className="md:ml-4 sm:mx-[3rem] text-[10px] sm:text-[15px] font-medium text-[#e0e0e0]">
          Get things done quickly with the help of Shūchū!
        </div>
      </div>
      <div className="text-[100px] sm:text-[120px] font-bold sm:h-5/6 items-center flex justify-start">
        {formatTime(time)}
      </div>

      <div className="flex flex-row flex-wrap w-[80%] justify-center gap-4 sm:flex-col sm:h-1/5 mb-10">
        <button className="rounded-lg border p-5" onClick={start}>
          START
        </button>
        <button
          className="rounded-lg border p-5"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "PAUSE" : "RESUME"}
        </button>
        <button className="rounded-lg border p-5" onClick={reset}>
          RESET
        </button>
        <Settings />
      </div>
    </div>
  );
}
