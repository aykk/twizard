import React, { useState } from 'react';
import Slider from 'react-input-slider';

export default function GfgInput() {
    const [state, setState] = useState({ x: 15});
    return (
      <div>
        <div>
          ({state.x}, {state.y})
          <Slider
            axis="x"
            x={state.x}
            onChange={({ x }) => setState(state => ({ ...state, x }))}
          />
        </div>
      </div>
    );
  }