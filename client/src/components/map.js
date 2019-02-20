import React, { PureComponent } from "react";
// import Player from "./Player";
// import OtherPlayer from "./OtherPlayer";
import sand_template from './sand_template.jpg'
import { Group, Rect } from "react-konva";


export const WIDTH = 800;
export const HEIGHT = 600;
export default class Field extends PureComponent {
  render() {
    return (
      <Group>
        <Rect
          x={0}
          y={0}
          width={WIDTH}
          height={HEIGHT}
          fill="rgb(0,0,0)"
          shadowBlur={2}
          // border: "4px solid black",
          fillPatternImage= {sand_template}
        />
        
      </Group>
    );
  }
}
// function Map(props) {
//   return (
//     <div
//       style={{
//         height: "600px",
//         width: "800px",
//         border: "4px solid black",
//         backgroundImage: `url(${sand_template})`
//       }}
//     >
//       <Player />
//       <OtherPlayer />
//     </div>
//   );
// }

// export default Map;
