import React from 'react';
import Proptypes from 'prop-types';
import { useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';
import Camera from './Camera';

function Earth({ setRef, position, scale, textureURL }) {
  const texture = useLoader(TextureLoader, textureURL);

  return (
    <group>
      <Camera />
      <mesh ref={setRef} position={position}>
        <sphereBufferGeometry attach='geometry' args={[scale, 32, 32]} />
        <meshLambertMaterial attach='material' map={texture} />
      </mesh>
    </group>
  );
}

Earth.propTypes = {
  setRef: Proptypes.objectOf(Proptypes.any),
  position: Proptypes.arrayOf(Proptypes.number),
  scale: Proptypes.number,
  textureURL: Proptypes.string
};

Earth.defaultProps = {
  setRef: {},
  position: [],
  scale: 3,
  textureURL: ''
};

export default Earth;
