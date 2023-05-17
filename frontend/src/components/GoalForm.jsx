import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  const [text, setText] = useState("");

  const distpach = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  //Create new goal
  const onSubmit = (e) => {
    e.preventDefault();
    distpach(createGoal({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            name="text"
            value={text}
            onChange={onChange}
            id="text"
            type="text"
          />
        </div>
        <button type="submit" className="btn btn-block">
          Add Goal
        </button>
      </form>
    </section>
  );
}

export default GoalForm;
