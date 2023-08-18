import React, { Component } from "react";
import moment from "moment";
import PropTypes from "prop-types";

const defaultStyles = {
  clockStyle: {
    height: "8rem",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    fontSize: "61px",
    fontFamily: "sans-serif",
    letterSpacing: "5px",
    textShadow: "0 0 10px #fff",
    textTransform: "uppercase",
  },
  clockHeaderStyle: {
    margin: "13px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  clockSubHeader: {
    marginBottom: "10px",
    fontSize: "13px",
    letterSpacing: "initial",
  },
};

class ReactClock extends Component {
  static propTypes = {
    endDate: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
    clockShadow: PropTypes.string,
    day: PropTypes.bool,
    clockDigitStyle: PropTypes.string,
    clockSeparator: PropTypes.string,
  };

  state = {
    timeRemaining: moment(this.props.endDate).diff(Date.now()),
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({
      timeRemaining: moment(this.props.endDate).diff(Date.now()),
    });
  };

  render() {
    const { day, style, clockSeparator } = this.props;
    const duration = moment.duration(this.state.timeRemaining);
    const daysLeft = String(duration.days()).padStart(2, "0");
    const isDayEnabled = day === undefined ? false : day;
    return (
      <div
        style={{
          ...defaultStyles.clockStyle,
          ...style,
        }}
      >
        {isDayEnabled && (
          <div style={{ ...defaultStyles.clockHeaderStyle }}>
            <div style={{ ...defaultStyles.clockSubHeader }}>DAYS</div>
            <div>{daysLeft}</div>
          </div>
        )}
        {isDayEnabled && (
          <ReactClock.Seperator clockSeparator={clockSeparator} />
        )}
        <div style={{ ...defaultStyles.clockHeaderStyle }}>
          <div style={{ ...defaultStyles.clockSubHeader }}>HOURS</div>
          <div>{String(duration.hours()).padStart(2, "0")}</div>
        </div>
        <ReactClock.Seperator clockSeparator={clockSeparator} />
        <div style={{ ...defaultStyles.clockHeaderStyle }}>
          <div style={{ ...defaultStyles.clockSubHeader }}>MINUTES</div>
          <div>{String(duration.minutes()).padStart(2, "0")}</div>
        </div>
        <ReactClock.Seperator clockSeparator={clockSeparator} />
        <div style={{ ...defaultStyles.clockHeaderStyle }}>
          <div style={{ ...defaultStyles.clockSubHeader }}>SECONDS</div>
          <div>{String(duration.seconds()).padStart(2, "0")}</div>
        </div>
      </div>
    );
  }

  static Seperator = ({ clockSeparator, shouldShow = true }) => {
    return (
      <span>{shouldShow ? (clockSeparator ? clockSeparator : ".") : ""}</span>
    );
  };
}

export default ReactClock;
