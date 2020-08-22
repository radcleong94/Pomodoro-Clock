import React from "react";
import "./BreakInterval.css";

export default function BreakInterval(props) {
  function increaseCounter() {
    if (props.breakInterval === 60) {
      return;
    }
    props.increaseBreak();
  }

  function decreaseCounter() {
    if (props.breakInterval === 1) {
      return;
    }
    props.decreaseBreak();
  }

  return (
    <div class="break-section">
      <h4 id="break-label">Break Length</h4>
      <div className="btn-break-section">
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          id="break-increment"
          onClick={increaseCounter}
        >
          <i className="fas fa-arrow-circle-up"></i>
        </button>
        <p id="break-length">{props.breakInterval}</p>
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          id="break-decrement"
          onClick={decreaseCounter}
        >
          <i className="fas fa-arrow-alt-circle-down"></i>
        </button>
      </div>
    </div>
  );
}
