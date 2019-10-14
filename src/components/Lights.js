import React from 'react';

function Light({ setRef, type, color, intensity }) {
  return <ambientLight color={color} />;
}

export default Light;
