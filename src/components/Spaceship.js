import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import spaceship from '../assets/scene.gltf';

function Spaceship() {
  const gltf = useLoader(GLTFLoader, spaceship);
  return <primitive object={gltf.scene} />;
}

export default Spaceship;
