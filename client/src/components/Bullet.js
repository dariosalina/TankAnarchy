import React, { PureComponent } from "react";
import Konva from "konva";
import { Circle } from "react-konva";
// import { WIDTH, HEIGHT } from "./map";
import { connect } from "react-redux";

const SPEED = 30;

class Bullet extends PureComponent {
  state = {
    // bulletimage
    // color: Konva.Util.getRandomColor(),
    // add origin from player state(mapstate to props)
    x: 50,
    y: 50,

    direction: { x: 0, y: 0 }
  };

  componentDidMount() {
    const x = Math.floor(Math.random() * SPEED);
    const y = SPEED - x;
    this.setState({ direction: { x, y } });
    this.animate();
    console.log("been shoot!");
  }

  newCoord = (val, delta, max, min) => {
    let newVal = val + delta;
    let newDelta = delta;

    if (newVal > max || newVal < min) {
      newDelta = -delta;
    }

    if (newVal < min) {
      newVal = min - newVal;
    }
    if (newVal > max) {
      newVal = newVal - (newVal - max);
    }

    return { val: newVal, delta: newDelta };
  };

  animate = () => {
    const { direction, x, y } = this.state;

    if (direction.x !== 0 || direction.y !== 0) {
      const newX = this.newCoord(x, direction.x, 600, 600);
      const newY = this.newCoord(y, direction.y, 600, 600);

      this.setState({
        x: newX.val,
        y: newY.val,
        direction: {
          x: newX.delta,
          y: newY.delta
        }
      });
    }

    this.animationTimeout = setTimeout(this.animate, 50);
  };

  render() {
    const { x, y } = this.state;

    return (
      <Circle
        ref={comp => {
          this.ball = comp;
        }}
        x={x}
        y={y}
        radius={10}
        // fill={color}
        shadowBlur={1}
      />
    );
  }

  componentWillUnmount() {
    clearTimeout(this.animationTimeout);
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    ...state.player
  };
}

export default connect(mapStateToProps)(Bullet);
