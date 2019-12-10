import React from 'react';
import PropTypes from 'prop-types';
import { useFrame } from 'react-three-fiber';

import { PlaneBufferGeometry } from 'three';
import Spaceship from './Spaceship';
import RocketThrust from './RocketThrust';

function Rocket({ spaceshipRef, thrustRef, position, name }) {
  // const spaceshipRef = React.useRef();

  useFrame(({ clock }, delta) => {
    // if (clock.elapsedTime > 5) return;
    // if (spaceshipRef.current) {
    //   spaceshipRef.current.position.y += delta * 50;
    //   if (thrustRef.current) {
    //     const { width, height } = thrustRef.current.geometry.parameters;
    //     thrustRef.current.geometry.dispose();
    //     thrustRef.current.geometry = new PlaneBufferGeometry(
    //       width,
    //       height + delta * 50
    //     );
    //     thrustRef.current.position.y += delta * 12 + 3 / 60;
    //   }
    // }
  });

  return (
    <group ref={spaceshipRef} position={position} name={name}>
      <Spaceship scale={[0.05, 0.05, 0.05]} />
      <RocketThrust setRef={thrustRef} />
    </group>
  );
}

Rocket.propTypes = {
  thrustRef: PropTypes.objectOf(PropTypes.any),
  position: PropTypes.arrayOf(PropTypes.number),
  name: PropTypes.string
};

Rocket.defaultProps = {
  thrustRef: {},
  position: [],
  name: 'rocket'
};

export default Rocket;
