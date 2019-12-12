import React from 'react';
import PropTypes from 'prop-types';
import { useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';

function Earth({ setRef, position, scale, textureURL }) {
  const texture = useLoader(TextureLoader, textureURL);
  const ref = React.useRef();

  // React.useEffect(() => console.log(ref.current));

  return (
    <mesh ref={ref} position={position}>
      <sphereBufferGeometry attach='geometry' args={[scale, 360, 360]} />
      <meshLambertMaterial attach='material' map={texture} />
    </mesh>
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
