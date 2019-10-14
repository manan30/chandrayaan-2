import React from 'react';
import { Canvas } from './GlobalStyles';
import MainScene from './views/MainScene';
import Controls from './components/Controls';

function App() {
  return (
    <Canvas>
      <MainScene />
      <Controls />
    </Canvas>
  );
}

export default App;
