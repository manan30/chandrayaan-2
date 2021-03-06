import React from 'react';
import PropTypes from 'prop-types';
import { useLoader, useFrame } from 'react-three-fiber';
import { TextureLoader } from 'three';

function Earth({ setRef, position, scale, textureURL }) {
  const texture = useLoader(TextureLoader, textureURL);
  const ref = React.useRef();

  // React.useEffect(() => console.log(ref.current));

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta / 0.99;
  });

  return (
    <object3D name='earth'>
      <mesh ref={ref} position={position}>
        <sphereBufferGeometry attach='geometry' args={[scale, 360, 360]} />
        <meshLambertMaterial attach='material' map={texture} />
      </mesh>
    </object3D>
  );
}

Earth.propTypes = {
  setRef: PropTypes.objectOf(PropTypes.any),
  position: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.number,
  textureURL: PropTypes.string
};

Earth.defaultProps = {
  setRef: {},
  position: [],
  scale: 3,
  textureURL: ''
};

export default Earth;
