import { TodosInterface } from "types/types";
import { useGetTodosQuery } from "../../../store/slices/ApiSlice";

const RtkQuery = () => {
  const { data: todos, error, isLoading } = useGetTodosQuery();

  return (
    <div className="p-4">
      {isLoading && <div className="text-center text-blue-500">Loading...</div>}
      {error && (
        <div className="text-center text-red-500">
          Error occurred while fetching data
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {!isLoading &&
          todos?.map((ele: TodosInterface, index: number) => {
            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
              >
                <p className="text-sm text-gray-600">
                  <span className="font-medium">ID:</span> {ele.id}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Completed:</span>{" "}
                  {ele.completed ? "Yes" : "No"}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">User ID:</span> {ele.userId}
                </p>
                <h2 className="text-lg font-bold text-gray-800">{ele.title}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RtkQuery;
