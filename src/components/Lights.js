import React from 'react';
import PropTypes from 'prop-types';
import { useThree } from 'react-three-fiber';
// import { SpotLightHelper, PointLightHelper } from 'three';

function Light({ type, color, ...props }) {
  const lightRef = React.useRef();
  const { scene } = useThree();
  const Type = type;

  React.useEffect(() => {
    if (lightRef.current && lightRef.current.type === 'SpotLight') {
      lightRef.current.shadow.mapSize.width = 1024;
      lightRef.current.shadow.mapSize.height = 1024;

      lightRef.current.shadow.camera.near = 500;
      lightRef.current.shadow.camera.far = 4000;
      lightRef.current.shadow.camera.fov = 30;
    }
  });

  return <Type ref={lightRef} {...props} />;
}

Light.propTypes = {
  type: PropTypes.string,
  color: PropTypes.number
};

Light.defaultProps = {
  type: 'ambientLight',
  color: 0xffffff
};

export default Light;
