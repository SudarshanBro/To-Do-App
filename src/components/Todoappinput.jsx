import React, { useRef } from "react";

function Todoappinput({ handleonNewItem }) {
  const itemNameelement = useRef();
  const itemDueelement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const itemName = itemNameelement.current.value;
    console.log(itemNameelement);
    const itemDuedate = itemDueelement.current.value;
    console.log(itemDueelement);
    handleonNewItem(itemName, itemDuedate);
  };

  return (
    <div className="container todoapp__container ">
      <form onSubmit={handleAddButtonClick} className="row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter the list to be added"
            ref={itemNameelement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={itemDueelement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success btns">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Todoappinput;
