import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  addTodo,
  removeTodo,
  toggleTodo,
} from "../../../store/slices/TodoSlice";
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
  const deleteTask = (index: number) => {
    dispatch(removeTodo(index));
  };
  const toggleComplete = (index: number) => {
    dispatch(toggleTodo(index));
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full p-6 bg-white shadow-md rounded-xl border border-gray-200">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          📝 To-Do List
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            className="flex-1 px-4 py-3 border rounded-lg shadow-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <select
            className="w-36 px-3 py-3 border rounded-lg shadow-sm text-gray-800 outline-none focus:ring-2 focus:ring-gray-600"
            onChange={(e) =>
              setPriorityInput(e.target.value as "low" | "medium" | "high")
            }
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <button
            className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition-colors"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <ul className="space-y-4">
          {todos?.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg border shadow-sm ${
                task.completed
                  ? "border-gray-300"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <div className="flex-1 flex items-center">
                {task.completed && <span className="mr-2">✅</span>}
                <p
                  className={`text-lg font-medium ${
                    task.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {task.text}
                </p>
              </div>
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  task.priority === "high"
                    ? "text-red-600 bg-red-100"
                    : task.priority === "medium"
                    ? "text-yellow-600 bg-yellow-100"
                    : "text-green-600 bg-green-100"
                }`}
              >
                {task.priority}
              </span>
              <div className="flex items-center gap-2 ml-4">
                <button
                  className={`px-4 py-2 text-sm rounded-lg shadow ${
                    task.completed
                      ? "bg-gray-400 text-white hover:bg-gray-500"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                  onClick={() => toggleComplete(index)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg shadow hover:bg-red-600"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        {todos?.length === 0 && (
          <p className="text-gray-500 text-center mt-6">
            Start by adding your first task!
          </p>
        )}
      </div>
    </div>
  );
};

export default Rtk;
