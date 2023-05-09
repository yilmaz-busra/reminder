import React from "react";

function Footer({ filtered, setFiltered }) {
  return (
    <div>
      <button
        name="All"
        onClick={() => {
          setFiltered("All");
        }}
      >
        ALL
      </button>
      <button
        name="active"
        onClick={() => {
          setFiltered("active");
        }}
      >
        Active
      </button>
      <button
        name="Completed"
        onClick={() => {
          setFiltered("completed");
        }}
      >
        Completed
      </button>
    </div>
  );
}

export default Footer;
