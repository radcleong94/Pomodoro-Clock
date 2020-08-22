import React, { Component } from "react";
import "./App.css";
import BreakInterval from "./BreakInterval";
import SessionLength from "./SessionLength";
import Timer from "./Timer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
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
        timerMinute: prevState.sessionLength + 1,
      };
    });
  };

  handleDecreaseSession = () => {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1,
      };
    });
  };

  handleUpdateTimerMin = () => {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1,
      };
    });
  };

  handleSwitch = (isSession) => {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLenth,
      });
    } else {
      this.setState({
        timerMinute: this.state.breakLength,
      });
    }
  };

  onResetTimer = () => {
    this.setState({
      timerMinute: this.state.sessionLength,
    });
  };

  onPlayStopTimer = (isPlay) => {
    this.setState({
      isPlay: isPlay,
    });
  };

  render() {
    return (
      <div className="main">
        <h2>~Pomodoro Clock~</h2>
        <div className="break-session-container">
          <BreakInterval
            isPlay={this.state.isPlay}
            breakInterval={this.state.breakLength}
            increaseBreak={this.handleIncreaseBreak}
            decreaseBreak={this.handleDecreaseBreak}
          />
          <SessionLength
            isPlay={this.state.isPlay}
            sessionLength={this.state.sessionLength}
            increaseSession={this.handleIncreaseSession}
            decreaseSession={this.handleDecreaseSession}
          />
        </div>
        <Timer
          timerMinute={this.state.timerMinute}
          breakLength={this.state.breakLength}
          updateTimerMin={this.handleUpdateTimerMin}
          sessionSwitch={this.handleSwitch}
          resetTimer={this.onResetTimer}
          playStopTimer={this.onPlayStopTimer}
        />
      </div>
    );
  }
}
export default App;
