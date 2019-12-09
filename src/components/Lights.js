import React from 'react';

function Light({ setRef, type, color, intensity }) {
  return <ambientLight color={color} intensity={intensity} />;
}

export default Light;
