import React, { useContext } from "react";
import Todoconatiner from "./Todoconatiner";
import { TodoitemsContext } from "../store/Itemtodolist";

function Deletetodoapp({ onDeleteClick }) {
  const todoitems = useContext(TodoitemsContext);
  return (
    <div className="itemcontainer">
      {todoitems.map((item) => (
        <Todoconatiner
          key={item.name}
          todotitle={item.name}
          tododate={item.date}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}

export default Deletetodoapp;
