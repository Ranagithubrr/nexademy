import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addTodo } from "../../../store/slices/TodoSlice";
import { TodoInferface } from "../../../store/slices/TodoSlice";

const Rtk = () => {
  const [task, setTask] = useState("");
  const [priorityInput, setPriorityInput] = useState<"low" | "medium" | "high">(
    "low"
  );
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  console.log(todos);

  const addTask = () => {
    if (task.trim()) {
      const newTodo: TodoInferface = {
        text: task,
        completed: false,
        dueDate: "13",
        priority: priorityInput,
      };
      dispatch(addTodo(newTodo));
      setTask("");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          To-Do List
        </h1>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            className="flex-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <select
            name="priority"
            id="1"
            onChange={(e) =>
              setPriorityInput(e.target.value as "low" | "medium" | "high")
            }
          >
            <option value="low">Low</option>
            <option value="Medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos?.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-2 rounded-lg border ${
                task.completed ? "bg-green-100" : "bg-gray-50"
              }`}
            >
              <span
                className={`flex-1 ${
                  task.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                }`}
              >
                {task.text}
              </span>
              <span>{task.priority}</span>
              <div className="flex space-x-2">
                <button
                  className={`px-2 py-1 rounded ${
                    task.completed
                      ? "bg-gray-400 text-white"
                      : "bg-green-500 text-white"
                  }`}
                  // onClick={() => toggleComplete(index)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  // onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        {todos?.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No tasks yet!</p>
        )}
      </div>
    </div>
  );
};

export default Rtk;
