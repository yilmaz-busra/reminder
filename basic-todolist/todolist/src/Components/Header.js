import React from "react";
import { useState } from "react";

function Header({ tasks, setTasks }) {
  const [duty, setDuty] = useState({ task: "", completed: false });

  const onChangee = (e) => {
    setDuty({ ...duty, [e.target.name]: e.target.value });
  };

  const clicked = () => {
    if (duty.task === "") {
      return false;
    }

    setTasks([...tasks, duty]);
  };

  return (
    <div>
      <input
        name="task"
        placeholder="To DO"
        onChange={onChangee}
        value={duty.task}
      />
      <button onClick={clicked}>ADD</button>
    </div>
  );
}

export default Header;
