import React from 'react';
import PropTypes from 'prop-types';
import { Fire } from 'three/examples/jsm/objects/Fire';
import { PlaneBufferGeometry } from 'three';

function RocketThrust({ setRef }) {
  const fire = new Fire(new PlaneBufferGeometry(200, 200), {
    textureWidth: 512,
    textureHeight: 512,
    debug: false
  });

  fire.position.y = -60;
  fire.position.z = 2;

  fire.clearSources();
  fire.addSource(0.45, 0.1, 0.1, 0.5, 0.0, 1.0);
  fire.addSource(0.55, 0.1, 0.1, 0.5, 0.0, 1.0);

  fire.color1.set(0xffffff);
  fire.color2.set(0xffa000);
  fire.color3.set(0x000000);
  fire.windVector.x = 0.0;
  fire.windVector.y = -0.75;
  fire.colorBias = 0.8;
  fire.burnRate = 0.3;
  fire.diffuse = 1.33;
  fire.viscosity = 0.25;
  fire.expansion = 0.25;
  fire.swirl = 50.0;
  fire.drag = 0.35;
  fire.airSpeed = 12.0;
  fire.speed = 500.0;
  fire.massConservation = false;

  return <primitive object={fire} ref={setRef} />;
}

RocketThrust.propTypes = {
  setRef: PropTypes.objectOf(PropTypes.any)
};

RocketThrust.defaultProps = {
  setRef: {}
};

export default RocketThrust;
