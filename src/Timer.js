import React, { Component } from "react";
import "./Timer.css";
import BreakInterval from "./BreakInterval";
import SessionLength from "./SessionLength";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      isSession: true,
      breakLength: 5,
      sessionLength: 25,
      timerCount: 25 * 60,
      currentTime: "Session",
      intervalId: 0,
      isPlaying: false,
      isPlay: false,
    };
  }
  //Break Length section================================
  handleIncreaseBreak = () => {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1,
      };
    });
  };

  handleDecreaseBreak = () => {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1,
      };
    });
  };

  //Session Length section================================
  handleIncreaseSession = () => {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerCount: (prevState.sessionLength + 1) * 60,
      };
    });
  };

  handleDecreaseSession = () => {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerCount: (prevState.sessionLength - 1) * 60,
      };
    });
  };

  handleSwitch = (isSession) => {
    if (isSession) {
      this.setState({
        timerCount: this.state.sessionLength * 60,
      });
    } else {
      this.setState({
        timerCount: this.state.breakLength * 60,
      });
    }
  };

  onResetTimer = () => {
    this.setState({
      timerCount: this.state.sessionLength,
    });
  };

  onPlayStopTimer = (isPlay) => {
    this.setState({
      isPlay: this.state.isPlay,
    });
  };

  handleUpdateTimerMinSec = (count) => {
    const minute = Math.floor(count / 60);
    let second = count % 60;

    second = second < 10 ? "0" + second : second;
    return `${minute}:${second}`;
  };

  onPlay = () => {
    if (this.state.isPlaying) {
      clearInterval(this.state.intervalId);
      this.setState({
        isPlaying: false,
      });
    } else {
      this.setState({
        isPlaying: true,
      });

      this.state.intervalId = setInterval(() => {
        if (this.state.timerCount === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false,
            });
            this.handleSwitch(this.state.isSession);
          } else {
            this.setState({
              isSession: true,
            });
            this.handleSwitch(this.state.isSession);
          }
        } else {
          this.setState({
            timerCount: this.state.timerCount - 1,
          });
        }
      }, 1000);
    }
  };

  onReset = () => {
    clearInterval(this.state.intervalId);

    this.setState({
      timerCount: 25 * 60,
      isSession: true,
    });
  };

  render() {
    return (
      <div className="main">
        <h2>~Pomodoro Clock~</h2>
        <div className="break-session-container">
          <BreakInterval
            isPlay={this.state.isPlaying}
            breakInterval={this.state.breakLength}
            increaseBreak={this.handleIncreaseBreak}
            decreaseBreak={this.handleDecreaseBreak}
          />
          <SessionLength
            isPlay={this.state.isPlaying}
            sessionLength={this.state.sessionLength}
            increaseSession={this.handleIncreaseSession}
            decreaseSession={this.handleDecreaseSession}
          />
        </div>
        <div className="timer-container">
          <h3 id="timer-label">
            {this.state.isSession === true ? this.state.currentTime : "Break"}
          </h3>
          <span id="time-left">
            {this.handleUpdateTimerMinSec(this.state.timerCount)}
            {this.handleSwitch}
            {this.onResetTimer}
            {this.onPlayStopTimer}
          </span>
        </div>
        <div className="timer-actions">
          <button id="start_stop" onClick={this.onPlay}>
            <i
              className={`fas fa-${this.state.isPlaying ? "pause" : "play"}`}
            ></i>
          </button>
          <button id="reset" onClick={this.onReset}>
            <i className="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
