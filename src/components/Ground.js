import React from 'react';
import { useLoader } from 'react-three-fiber';
import { TextureLoader, RepeatWrapping } from 'three';

import GroundTextureURL from '../assets/ground.jpg';

function Ground() {
  const texture = useLoader(TextureLoader, GroundTextureURL);

  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(300, 300);
  texture.anisotropy = 16;

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeBufferGeometry attach='geometry' args={[20000, 20000]} />
      <meshLambertMaterial attach='material' map={texture} />
    </mesh>
  );
}

export default Ground;
