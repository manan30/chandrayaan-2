import React from 'react';
import { useLoader } from 'react-three-fiber';
import { TextureLoader, RepeatWrapping } from 'three';

import RoadTextureURL from '../assets/road.jpg';

function Road() {
  const texture = useLoader(TextureLoader, RoadTextureURL);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.anisotropy = 16;

  return (
    <mesh
      position={[0, 0, -20]}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      receiveShadow>
      <planeBufferGeometry attach='geometry' args={[200, 200]} />
      <meshLambertMaterial attach='material' color={0x000000} />
    </mesh>
  );
}

export default Road;
