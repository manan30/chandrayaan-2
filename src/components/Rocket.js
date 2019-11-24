import React from 'react';
import PropTypes from 'prop-types';
import Spaceship from './Spaceship';
import RocketThrust from './RocketThrust';

function Rocket({ objectRef, spaceshipRef, thrustRef }) {
  console.log({ objectRef, spaceshipRef, thrustRef });
  return (
    <group ref={objectRef}>
      <Spaceship setRef={spaceshipRef} scale={[0.1, 0.1, 0.1]} />
      <RocketThrust setRef={thrustRef} />
    </group>
  );
}

Rocket.propTypes = {
  objectRef: PropTypes.objectOf(PropTypes.any),
  spaceshipRef: PropTypes.objectOf(PropTypes.any),
  thrustRef: PropTypes.objectOf(PropTypes.any)
};

Rocket.defaultProps = {
  objectRef: {},
  spaceshipRef: {},
  thrustRef: {}
};

export default Rocket;
