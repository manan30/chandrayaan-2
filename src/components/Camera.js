import React from 'react';
import { useThree, useFrame } from 'react-three-fiber';
import { Vector3 } from 'three';

const earthVector = new Vector3(140, 5, 100);

function Camera({ setRef }) {
  const ref = React.useRef();
  const { setDefaultCamera, size } = useThree();

  React.useEffect(() => setDefaultCamera(ref.current), [setDefaultCamera]);

  useFrame(() => {
    ref.current.updateMatrixWorld();
    ref.current.lookAt(earthVector);

    if (ref.current.position.z > 140) {
      ref.current.position.z -= 0.5;
    } else if (ref.current.position.y > 7) {
      ref.current.position.y -= 0.01;
    } else if (ref.current.position.z > 110) ref.current.position.z -= 0.1;
  });

  return (
    <perspectiveCamera
      ref={ref}
      args={[45, size.width / size.height, 0.1, 20000]}
      position={[140, 10, 500]}
    />
  );
}

export default Camera;
