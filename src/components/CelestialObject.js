import React from 'react';
import Proptypes from 'prop-types';
import { useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';

function CelestialObject({ setRef, position, scale, textureURL, color }) {
  const texture = useLoader(TextureLoader, textureURL);

  return (
    <mesh ref={setRef} position={position} wireframe>
      <sphereBufferGeometry attach='geometry' args={[scale, 32, 32]} />
      <meshLambertMaterial attach='material' map={texture} />
    </mesh>
  );
}

CelestialObject.propTypes = {
  setRef: Proptypes.objectOf(Proptypes.any),
  position: Proptypes.arrayOf(Proptypes.number),
  scale: Proptypes.number,
  textureURL: Proptypes.string
};

CelestialObject.defaultProps = {
  setRef: {},
  position: [],
  scale: 3,
  textureURL: ''
};

export default CelestialObject;
