import { Checkbox } from "@/components/ui/checkbox";
import { useDispatch } from "react-redux";
import { toggle } from "@/store";

export function TaskDiv({
  taskId,
  taskDescription,
  taskCompleted,
}: {
  taskId: Number;
  taskDescription: string;
  taskCompleted: boolean;
}) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row gap-5 items-center">
      <Checkbox
        checked={taskCompleted}
        id="terms"
        onClick={() => {
          dispatch(
            toggle({
              id: taskId,
              completed: !taskCompleted,
              description: taskDescription,
            })
          );
        }}
      />
      <div
        className={`font-GN tracking-tight font-medium text-[14px] ${
          taskCompleted ? "line-through" : "no-underline"
        }`}
      >
        {taskDescription}
      </div>
    </div>
  );
}
