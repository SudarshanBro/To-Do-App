import React from "react";

function Todoconatiner({ todotitle, tododate, onDeleteClick }) {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <h2>{todotitle}</h2>
        </div>
        <div className="col-4">
          <h2>{tododate}</h2>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger btns"
            onClick={() => onDeleteClick(todotitle)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Todoconatiner;
