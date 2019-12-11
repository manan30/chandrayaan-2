import React from 'react';
import PropTypes from 'prop-types';
import { Fire } from 'three/examples/jsm/objects/Fire';
import { PlaneBufferGeometry } from 'three';

function RocketThrust({ setRef }) {
  const fireRef = React.useRef();

  const fire = new Fire(new PlaneBufferGeometry(200, 200), {
    textureWidth: 512,
    textureHeight: 512,
    debug: false
  });

  fire.clearSources();
  fire.addSource(0.45, 0.1, 0.1, 0.5, 0.0, 1.0);
  fire.addSource(0.55, 0.1, 0.1, 0.5, 0.0, 1.0);

  fire.color1.set(0xffffff);
  fire.color2.set(0xffa000);
  fire.color3.set(0x000000);
  fire.windVector.x = 0.0;
  fire.windVector.y = -0.75;
  fire.colorBias = 0.8;
  fire.burnRate = 1;
  fire.diffuse = 2;
  fire.viscosity = 0.7;
  fire.expansion = 0.7;
  fire.swirl = 25.0;
  fire.drag = 0.35;
  fire.airSpeed = 12.0;
  fire.speed = 500.0;
  fire.massConservation = false;

  fire.position.set(0, 2, 0);
  fire.visible = false;

  return <primitive object={fire} ref={setRef} />;
}

RocketThrust.propTypes = {
  setRef: PropTypes.objectOf(PropTypes.any)
};

RocketThrust.defaultProps = {
  setRef: {}
};

export default RocketThrust;
