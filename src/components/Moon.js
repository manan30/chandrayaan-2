import React from 'react';
import { TextureLoader } from 'three';

import { useLoader, useFrame } from 'react-three-fiber';
import MoonTextureURL from '../assets/moon.jpg';
import MoonNormalTextureURL from '../assets/moonNormal.jpg';

function Moon(props) {
  const moonRef = React.useRef();

  const moonTextureMap = useLoader(TextureLoader, MoonTextureURL);
  const moonNormalMap = useLoader(TextureLoader, MoonNormalTextureURL);

  // React.useEffect(() => {
  //   if (moonRef.current) moonRef.current.geometry.computeTangents();
  // });

  useFrame((_, delta) => {
    if (moonRef.current) moonRef.current.rotation.y += delta / 3;
  });

  return (
    <mesh position={[0, 0, 0]} rotation={[0, 180, 0]} {...props} ref={moonRef}>
      <sphereBufferGeometry attach='geometry' args={[100, 50, 50]} />
      <meshLambertMaterial
        attach='material'
        map={moonTextureMap}
        normalMap={moonNormalMap}
      />
    </mesh>
  );
}

export default Moon;
