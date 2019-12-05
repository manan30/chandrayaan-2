import React from 'react';
import PropTypes from 'prop-types';
import { useFrame, useThree } from 'react-three-fiber';

import { Vector3, CameraHelper, PerspectiveCamera } from 'three';
import Spaceship from './Spaceship';
import RocketThrust from './RocketThrust';

import CameraAnimationController from '../Controllers/CameraAnimationController';

function Rocket({ objectRef, thrustRef, position }) {
  const { scene, camera } = useThree();
  const spaceshipRef = React.useRef();

  // camera.lookAt(scene.position);
  // camera.up = new Vector3(0, 0, -1);

  const cameraAnimationController = new CameraAnimationController(camera);

  setTimeout(() => {
    if (spaceshipRef.current)
      cameraAnimationController.animation(spaceshipRef.current);
  }, 1000);

  // function moveCamera(group) {
  //   const relativeCameraOffset = new Vector3(0, 110, 1000);
  //   const cameraOffset = relativeCameraOffset.applyMatrix4(group.matrixWorld);
  //   camera.position.x = cameraOffset.x;
  //   camera.position.y = cameraOffset.y;
  //   camera.position.z = cameraOffset.z;
  //   camera.lookAt(group.position);
  // }

  useFrame(({ clock }, delta) => {
    if (clock.elapsedTime > 5) return;
    if (spaceshipRef.current) {
      spaceshipRef.current.position.y += delta * 50;
      // // camera.position.y = spaceshipRef.current.position.y;
      // // camera.position.z += 0.1;
      // // camera.lookAt(spaceshipRef.current.position);
      // // console.log(spaceshipRef.current.position, camera.position);
      // camera.position.y = spaceshipRef.current.position.y;
      // camera.lookAt(spaceshipRef.current.position);

      // // camera.updateProjectionMatrix();
      // cameraAnimationController.update(delta);
      // moveCamera(spaceshipRef.current);
      // console.log(camera.position, spaceshipRef.current.position);
    }
  });

  return (
    <group ref={spaceshipRef} position={position}>
      <Spaceship scale={[0.05, 0.05, 0.05]} />
      <RocketThrust />
    </group>
  );
}

Rocket.propTypes = {
  objectRef: PropTypes.objectOf(PropTypes.any),
  thrustRef: PropTypes.objectOf(PropTypes.any)
};

Rocket.defaultProps = {
  objectRef: {},
  thrustRef: {}
};

export default Rocket;
