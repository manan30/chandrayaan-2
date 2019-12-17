import React from 'react';
import { Canvas } from './GlobalStyles';
// import MainScene from './views/MainScene';
import EarthScene from './views/EarthScene';
import Controls from './components/Controls';

function App() {
  return (
    <>
      <Canvas>
        {/* <MainScene /> */}
        <EarthScene />
        {/* <Controls /> */}
      </Canvas>

      <div id='note'>Thank You</div>
    </>
  );
}

export default App;
