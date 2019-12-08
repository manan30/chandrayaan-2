import React from 'react';
import Proptypes from 'prop-types';
import { useLoader } from 'react-three-fiber';
import { TextureLoader, DoubleSide } from 'three';

function CelestialObject({
  setRef,
  position,
  scale,
  textureURL,
  color,
  orbitRequired
}) {
  const texture = useLoader(TextureLoader, textureURL);

  return (
    <group>
      <mesh ref={setRef} position={position}>
        <sphereBufferGeometry attach='geometry' args={[scale, 32, 32]} />
        <meshLambertMaterial
          attach='material'
          map={texture}
          opacity={1}
          transparent
        />
      </mesh>
      {orbitRequired && (
        <mesh position={position} rotation={[Math.PI / 2, 0, 0]}>
          <ringBufferGeometry
            attach='geometry'
            args={[scale + 500, scale + 500 - 1, 360]}
          />
          <meshBasicMaterial
            attach='material'
            color={0xffffff}
            side={DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
}

CelestialObject.propTypes = {
  setRef: Proptypes.objectOf(Proptypes.any),
  position: Proptypes.arrayOf(Proptypes.number),
  scale: Proptypes.number,
  textureURL: Proptypes.string,
  color: Proptypes.number,
  orbitRequired: Proptypes.bool
};

CelestialObject.defaultProps = {
  setRef: {},
  position: [],
  scale: 3,
  textureURL: '',
  color: 0,
  orbitRequired: false
};

export default CelestialObject;
