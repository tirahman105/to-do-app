import React from "react";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-slate-300 w-full h-full rounded-xl p-10 space-y-4">
        {/* <div className="bg-white text-3xl font-bold flex items-center justify-center rounded-lg p-5">
          <p>There is no task pending </p>
        </div> */}

        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
