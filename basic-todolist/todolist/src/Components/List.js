import React from "react";

function List({ tasks, setTasks, filtered }) {
  return (
    <div>
      <ul className="style-ul">
        {tasks.map((item, i) => {
          if (filtered === "All") {
            if (item.completed === true) {
              return (
                <li key={i}>
                  <input
                    type="checkbox"
                    checked={true}
                    onChange={() => {
                      const tempArray = [...tasks];
                      tempArray[i].completed = false;
                      setTasks(tempArray);
                    }}
                  />

                  <span>{item.task}</span>
                </li>
              );
            } else {
              return (
                <li key={i}>
                  <input
                    type="checkbox"
                    checked={false}
                    onChange={() => {
                      const tempArray = [...tasks];
                      tempArray[i].completed = true;
                      setTasks(tempArray);
                    }}
                  />

                  <span>{item.task}</span>
                </li>
              );
            }
          }
          if (filtered === "active") {
            if (item.completed === false) {
              return (
                <li key={i}>
                  <input
                    type="checkbox"
                    checked={false}
                    onChange={() => {
                      const tempArray = [...tasks];
                      tempArray[i].completed = true;
                      setTasks(tempArray);
                    }}
                  />

                  <span>{item.task}</span>
                </li>
              );
            }
          } else {
            if (item.completed === true) {
              return (
                <li key={i}>
                  <input
                    type="checkbox"
                    checked={true}
                    onChange={() => {
                      const tempArray = [...tasks];
                      tempArray[i].completed = false;
                      setTasks(tempArray);
                    }}
                  />

                  <span>{item.task}</span>
                </li>
              );
            }
          }
        })}
      </ul>
    </div>
  );
}

export default List;
