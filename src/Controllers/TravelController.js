import { Vector3, Object3D } from 'three';
import { SceneUtils } from 'three/examples/jsm/utils/SceneUtils';
import TWEEN from '@tweenjs/tween.js';

class TravelController {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.travelObjectType = 'planet'; // default
    this.travelStartEvent = new CustomEvent('solarsystem.travel.start');
    this.targetPosition = new Vector3();
    this.threeDiameter = 12756 * 10 ** -3.8;
    this.core = new Object3D();
    this.objectCentroid = new Object3D();
    this.orbitCentroid = new Object3D();

    this.update();
  }

  // calculateDestinationCoordinates(radius, theta, distanceFromParent) {
  //   this.r = radius;
  //   this.x = this.r * Math.cos(theta);
  //   this.y = this.r * Math.sin(theta);

  //   return {
  //     x: this.x,
  //     y: this.y,
  //     z: 0
  //   };
  // }

  calculateDestinationCoordinates() {
    this.x = this.core.position.x;
    this.y = this.core.position.y;
    this.z = this.core.position.z;

    let destinationX = this.x;
    let destinationY = this.y;
    const destinationZ = this.z;

    const quadrant1 = this.x > 0 && this.y > 0;
    const quadrant2 = this.x < 0 && this.y > 0;
    const quadrant3 = this.x < 0 && this.y < 0;
    const quadrant4 = this.x > 0 && this.y < 0;

    const offset =
      this.threeDiameter > 3 ? this.threeDiameter * 6 : this.threeDiameter * 3;

    if (quadrant1) {
      destinationX += offset;
      destinationY += offset;
    }

    if (quadrant2) {
      destinationX -= offset;
      destinationY += offset;
    }

    if (quadrant3) {
      destinationX -= offset;
      destinationY -= offset;
    }

    if (quadrant4) {
      destinationX += offset;
      destinationY -= offset;
    }

    return {
      x: destinationX,
      y: destinationY,
      z: destinationZ + this.threeDiameter * 0.15
    };
  }

  dispatchTravelStartEvent(data) {
    this.event = new CustomEvent('solarsystem.travel.planet.start', {
      detail: data
    });

    document.dispatchEvent(this.event);
  }

  dispatchTravelCompleteEvent(data) {
    this.event = new CustomEvent('solarsystem.travel.planet.complete', {
      detail: data
    });

    document.dispatchEvent(this.event);
  }

  prepareForTravel(takeOffHeight, targetObject) {
    const travelDuration = 3000; // 3000;

    const animation = new TWEEN.Tween(this.camera.position).to(
      {
        // x: this.camera.position.x,
        // y: this.camera.position.y,
        z: this.camera.position.z - (takeOffHeight + 400)
      },
      travelDuration
    );

    animation
      .easing(TWEEN.Easing.Cubic.InOut)
      .onStart(e => console.log('started', e))
      .onUpdate(() => this.camera.lookAt(targetObject.position));

    return animation;
  }

  handleComplete(targetObject, cameraTarget) {
    this.cameraTarget = cameraTarget || this.objectCentroid;

    SceneUtils.detach(this.camera, this.camera.parent, this.scene);
    SceneUtils.attach(this.camera, this.scene, this.cameraTarget);

    this.camera.lookAt(new Vector3());

    this.core.updateMatrixWorld();
    this.orbitCentroid.updateMatrixWorld();

    this.dispatchTravelCompleteEvent(targetObject);

    window.cancelAnimationFrame(() => this.update(0));
  }

  travelToObject(currentPosition, targetObject, takeOffHeight) {
    const travelDuration = 5000;
    this.dispatchTravelStartEvent(targetObject);

    // SceneUtils.detach(this.camera, this.camera.parent, this.scene);
    // SceneUtils.attach(this.camera, this.scene, this.orbitCentroid);

    this.core.updateMatrixWorld();
    this.orbitCentroid.updateMatrixWorld();

    this.camera.lookAt(targetObject.position);

    this.destinationCoordinates = this.calculateDestinationCoordinates(
      targetObject
    );
    this.takeOff = this.prepareForTravel(takeOffHeight, targetObject);

    this.cameraTarget = this.objectCentroid;

    // return this.takeOff.start().onComplete(() => {
    new TWEEN.Tween(this.camera.position)
      .to({ x: 150, y: 5, z: 100 }, travelDuration)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(
        // function update() {
        //   const destinationCoordinates = this.calculateDestinationCoordinates(
        //     targetObject
        //   );
        //   cameraTween.to(destinationCoordinates);
        //   this.camera.lookAt(targetObject.position);
        // }.bind(this)
        () => this.camera.lookAt(targetObject.position)
      )
      .onComplete(() => {
        this.handleComplete.bind(this, targetObject, this.cameraTarget);
        // // console.log(targetObject);
        // new TWEEN.Tween(targetObject.material.opacity)
        //   .to({ percent: 0 }, 1000)
        //   .easing(TWEEN.Easing.Cubic.InOut)
        //   .onUpdate(delta => {
        //     // targetObject.material.opacity -= 0.12;
        //     // console.log(delta);
        //     this.camera.lookAt(new Vector3(140, 5, 100));
        //   })
        //   .start();
      })
      .start();
  }

  update(delta) {
    window.requestAnimationFrame(() => this.update());
    TWEEN.update(delta);
  }
}

export default TravelController;
