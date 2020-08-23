(this["webpackJsonppodomoro-clock"]=this["webpackJsonppodomoro-clock"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(2),r=n.n(i),o=n(3),c=n(4),l=n(6),m=n(5);n(12),n(13);function h(e){return s.a.createElement("div",{class:"break-section"},s.a.createElement("h4",{id:"break-label"},"Break Length"),s.a.createElement("div",{className:"btn-break-section"},s.a.createElement("button",{disabled:!0===e.isPlay?"disabled":"",id:"break-increment",onClick:function(){60!==e.breakInterval&&e.increaseBreak()}},s.a.createElement("i",{className:"fas fa-arrow-circle-up"})),s.a.createElement("p",{id:"break-length"},e.breakInterval),s.a.createElement("button",{disabled:!0===e.isPlay?"disabled":"",id:"break-decrement",onClick:function(){1!==e.breakInterval&&e.decreaseBreak()}},s.a.createElement("i",{className:"fas fa-arrow-alt-circle-down"}))))}n(14);function d(e){return s.a.createElement("div",{className:"session-section"},s.a.createElement("h4",{id:"session-label"},"Session Length"),s.a.createElement("div",{className:"btn-session-section"},s.a.createElement("button",{disabled:!0===e.isPlay?"disabled":"",id:"session-increment",onClick:function(){60!==e.sessionLenth&&e.increaseSession()}},s.a.createElement("i",{class:"fas fa-arrow-circle-up"})),s.a.createElement("p",{id:"session-length"},e.sessionLength),s.a.createElement("button",{disabled:!0===e.isPlay?"disabled":"",id:"session-decrement",onClick:function(){1!==e.sessionLength&&e.decreaseSession()}},s.a.createElement("i",{className:"fas fa-arrow-alt-circle-down"}))))}var u=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleIncreaseBreak=function(){e.setState((function(e){return{breakLength:e.breakLength+1}}))},e.handleDecreaseBreak=function(){e.setState((function(e){return{breakLength:e.breakLength-1}}))},e.handleIncreaseSession=function(){e.setState((function(e){return{sessionLength:e.sessionLength+1,timerCount:60*(e.sessionLength+1)}}))},e.handleDecreaseSession=function(){e.setState((function(e){return{sessionLength:e.sessionLength-1,timerCount:60*(e.sessionLength-1)}}))},e.handleSwitch=function(t){t?e.setState({timerCount:60*e.state.sessionLength}):e.setState({timerCount:60*e.state.breakLength})},e.onResetTimer=function(){e.setState({timerCount:e.state.sessionLength})},e.onPlayStopTimer=function(t){e.setState({isPlay:e.state.isPlay})},e.handleUpdateTimerMinSec=function(e){var t=Math.floor(e/60),n=e%60;return n=n<10?"0"+n:n,"".concat(t,":").concat(n)},e.onPlay=function(){e.state.isPlaying?(clearInterval(e.state.intervalId),e.setState({isPlaying:!1})):(e.setState({isPlaying:!0}),e.state.intervalId=setInterval((function(){0===e.state.timerCount?e.state.isSession?(e.setState({isSession:!1}),e.handleSwitch(e.state.isSession)):(e.setState({isSession:!0}),e.handleSwitch(e.state.isSession)):e.setState({timerCount:e.state.timerCount-1})}),1e3))},e.onReset=function(){clearInterval(e.state.intervalId),e.setState({timerCount:1500,isSession:!0})},e.state={isSession:!0,breakLength:5,sessionLength:25,timerCount:1500,currentTime:"Session",intervalId:0,isPlaying:!1,isPlay:!1},e}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"main"},s.a.createElement("h2",null,"~Pomodoro Clock~"),s.a.createElement("div",{className:"break-session-container"},s.a.createElement(h,{isPlay:this.state.isPlaying,breakInterval:this.state.breakLength,increaseBreak:this.handleIncreaseBreak,decreaseBreak:this.handleDecreaseBreak}),s.a.createElement(d,{isPlay:this.state.isPlaying,sessionLength:this.state.sessionLength,increaseSession:this.handleIncreaseSession,decreaseSession:this.handleDecreaseSession})),s.a.createElement("div",{className:"timer-container"},s.a.createElement("h3",{id:"timer-label"},!0===this.state.isSession?this.state.currentTime:"Break"),s.a.createElement("span",{id:"time-left"},this.handleUpdateTimerMinSec(this.state.timerCount),this.handleSwitch,this.onResetTimer,this.onPlayStopTimer)),s.a.createElement("div",{className:"timer-actions"},s.a.createElement("button",{id:"start_stop",onClick:this.onPlay},s.a.createElement("i",{className:"fas fa-".concat(this.state.isPlaying?"pause":"play")})),s.a.createElement("button",{id:"reset",onClick:this.onReset},s.a.createElement("i",{className:"fas fa-sync-alt"}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.cd502c22.chunk.js.map