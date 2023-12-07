import { RocketIcon } from "@radix-ui/react-icons";

export function AlertNotif() {
  return (
    <div className="flex flex-row justify-center items-center py-2 px-5 bg-slate-50 text-black rounded-lg">
      <RocketIcon className="h-6 w-6 " />
      <div>Session Finished, Congrats!</div>
    </div>
  );
}
