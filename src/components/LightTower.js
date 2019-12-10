import React from 'react';
import PropTypes from 'prop-types';

import LightPole from './LightPole';
import Light from './Lights';

function LightTower({
  position,
  scale,
  pointLightPositions,
  spotLightPosition
}) {
  return (
    <group>
      <Light
        type='pointLight'
        args={[0xffffff, 1, 100]}
        position={pointLightPositions[0]}
        castShadow
      />
      <Light
        type='pointLight'
        args={[0xffffff, 1, 100]}
        position={pointLightPositions[1]}
        castShadow
      />
      <Light
        type='spotLight'
        args={[0xffffff]}
        position={spotLightPosition}
        castShadow
      />
      <LightPole position={position} scale={scale} />
    </group>
  );
}

LightTower.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.arrayOf(PropTypes.number),
  pointLightPositions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  spotLightPosition: PropTypes.arrayOf(PropTypes.number)
};

LightTower.defaultProps = {
  position: [],
  scale: [],
  pointLightPositions: [],
  spotLightPosition: []
};

export default LightTower;
