import React from "react";
import TodoCard from "./TodoCard";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-5 ">
        {/* <div className="bg-white text-3xl font-bold flex items-center justify-center rounded-lg p-5">
          <p>There is no task pending </p>
        </div> */}

        <div className="bg-white p-5 w-full h-full rounded-xl space-y-4">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
