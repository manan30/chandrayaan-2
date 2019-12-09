import React from 'react';
import { Canvas } from './GlobalStyles';
// import MainScene from './views/MainScene';
import EarthScene from './views/EarthScene';
import Controls from './components/Controls';

function App() {
  return (
    <Canvas>
      {/* <MainScene /> */}
      <EarthScene />
      <Controls />
    </Canvas>
  );
}

export default App;
