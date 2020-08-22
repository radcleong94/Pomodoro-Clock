import React, { Component } from "react";
import "./Timer.css";
import BreakInterval from "./BreakInterval";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: 0,
    };
  }

  onPlay = () => {
    let intervalId = setInterval(this.decreaseTimer, 1000);
    this.props.playStopTimer(true);
    this.setState({
      intervalId: intervalId,
    });
  };

  decreaseTimer = () => {
    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false,
            });

            this.props.sessionSwitch(this.state.isSession);
          } else {
            this.setState({
              isSession: true,
            });

            this.props.sessionSwitch(this.state.isSession);
          }
        } else {
          this.props.updateTimerMin();
          this.setState({
            timerSecond: 59,
          });
        }
        break;
      default:
        this.setState((prevState) => {
          return {
            timerSecond: prevState.timerSecond - 1,
          };
        });
    }
  };

  onStop = () => {
    clearInterval(this.state.intervalId);
    this.props.playStopTimer(false);
  };

  onReset = () => {
    this.onStop();
    this.props.resetTimer();
    this.props.playStopTimer(false);
    this.setState({
      timerSecond: 0,
      isSession: true,
    });
  };

  render() {
    return (
      <div>
        <div className="timer-container">
          <h3 id="timer-label">
            {this.state.isSession === true ? "Session" : "Break"}
          </h3>
          <span id="time-left">{this.props.timerMinute}</span>
          <span>:</span>
          <span>
            {this.state.timerSecond === 0
              ? "00"
              : this.state.timerSecond < 10
              ? "0" + this.state.timerSecond
              : this.state.timerSecond}
          </span>
        </div>
        <div className="timer-actions">
          <button id="start_stop" onClick={this.onPlay}>
            Play
          </button>
          <button onClick={this.onStop}>Stop</button>
          <button id="reset" onClick={this.onReset}>
            Refresh
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
