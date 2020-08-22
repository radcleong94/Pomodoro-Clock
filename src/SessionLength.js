import React from "react";
import "./SessionLength.css";

export default function SessionLength(props) {
  function increaseSession() {
    if (props.sessionLenth === 60) {
      return;
    }
    props.increaseSession();
  }

  function decreaseSession() {
    if (props.sessionLength === 1) {
      return;
    }
    props.decreaseSession();
  }

  return (
    <div className="session-section">
      <h4 id="session-label">Session Length</h4>
      <div className="btn-session-section">
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          id="session-increment"
          onClick={increaseSession}
        >
          <i class="fas fa-arrow-circle-up"></i>
        </button>
        <p id="session-length">{props.sessionLength}</p>
        <button
          disabled={props.isPlay === true ? "disabled" : ""}
          id="session-decrement"
          onClick={decreaseSession}
        >
          <i className="fas fa-arrow-alt-circle-down"></i>
        </button>
      </div>
    </div>
  );
}
