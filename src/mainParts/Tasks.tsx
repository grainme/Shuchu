import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TaskDiv } from "./TaskDiv";
import { Button } from "@/components/ui/button";
import { addTask } from "@/store";
import { RootState } from "@/store";

export function Tasks() {
  const dispatch = useDispatch();
  const tasksList = useSelector(
    (state: RootState) => state.addTask.listOfTasks.tasks
  );

  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      dispatch(
        addTask({
          description: newTask,
          completed: false,
          id: Math.random() * 100,
        })
      );
      console.log(newTask);
      setNewTask("");
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className=" cursor-pointer text-slate-200">Tasks</div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-CD tracking-wide">
            Track Tasks Here!
          </SheetTitle>
          <SheetDescription className="font-GN">
            You can add tasks here. Click done when one of them is finished.
          </SheetDescription>
        </SheetHeader>
        <div className="font-GN grid gap-4 py-4">
          {tasksList.map((task, index: React.Key | null | undefined) => (
            <TaskDiv
              key={index}
              taskId={task.id}
              taskDescription={task.description}
              taskCompleted={task.completed}
            />
          ))}
        </div>
        <SheetFooter>
          <div className="font-GN">
            <div className="flex items-center mb-4">
              <input
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none"
                name="newTask"
                placeholder="Add new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && handleAddTask()}
              />
              <Button
                className="ml-3 px-4 py-2  text-white focus:outline-none"
                onClick={handleAddTask}
              >
                Add Task
              </Button>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
