import TWEEN from '@tweenjs/tween.js';
import { Vector3, Math as threeMath } from 'three';

class EarthSceneController {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
  }

  animateCameraPosition1(object) {
    return new TWEEN.Tween(this.camera.position)
      .to({ x: -300, y: 120, z: 300 }, 7000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(object.position);
      });
  }

  animateCameraPosition2(object) {
    this.camera.position.set(0, 40, 50);
    return new TWEEN.Tween(this.camera.position)
      .to({ x: 0, y: 100, z: 100 }, 7000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(object.position);
      });
  }

  animateCameraPosition3(object) {
    this.camera.position.set(100, 20, 350);
    return new TWEEN.Tween(this.camera.position)
      .to({ x: 70, y: 100, z: 100 }, 7000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(object.position);
      });
  }

  animateCameraPosition4(object) {
    return new TWEEN.Tween(this.camera.position)
      .to({ x: 0, y: 250, z: 170 }, 5000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(object.position);
      });
  }

  animateCameraPosition5(object) {
    return new TWEEN.Tween(object.position)
      .to({ x: 0, y: 2000 }, 7000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(object.position);
      });
  }

  animateCameraPosition6(object) {
    return new TWEEN.Tween(this.camera.position)
      .to({ y: 2000 }, 7000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(
          new Vector3(
            object.position.x,
            object.position.y + 50,
            object.position.z
          )
        );
      });
  }

  startThrust() {
    return new TWEEN.Tween({})
      .to({}, 1000)
      .delay(2000)
      .onStart(() => (this.rocketThrust.visible = true));
  }

  rotateRocket(object) {
    this.spaceshipObject = object;
    return new TWEEN.Tween(this.spaceshipObject.rotation)
      .to({ z: threeMath.degToRad(-60) }, 2000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onStart(() => {
        new TWEEN.Tween(object.rotation)
          .to({ y: threeMath.degToRad(15) }, 1000)
          .easing(TWEEN.Easing.Cubic.InOut)
          .start();
      });
  }

  moveRocketForward(object) {
    this.spaceshipObject = object;
    return new TWEEN.Tween(this.spaceshipObject.position)
      .to({ x: 900 }, 5000)
      .easing(TWEEN.Easing.Cubic.InOut);
  }

  moveCameraForward(object) {
    new TWEEN.Tween(this.camera.position)
      .to({ x: 900 }, 5000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(() => {
        this.camera.lookAt(
          new Vector3(
            object.position.x,
            object.position.y + 50,
            object.position.z
          )
        );
      })
      .start();
  }

  fadeRocket(object) {
    return new TWEEN.Tween({ opacity: 1 })
      .to({ opacity: 0 }, 1000)
      .onUpdate(data => console.log(data));
  }

  // boosterSeparation() {
  //   this.cylinder = this.scene.getObjectByName('Cylinder003');
  //   return new TWEEN.Tween(this.cylinder)
  //     .to({ y: 2500 }, 5000)
  //     .easing(TWEEN.Easing.Cubic.InOut);
  // }

  animate(object) {
    [, this.rocket, this.rocketThrust] = object.children;
    this.animateCameraPosition1(object)
      .start()
      .onComplete(() => {
        this.animateCameraPosition2(object)
          .start()
          .onComplete(() => {
            this.animateCameraPosition3(object)
              .start()
              .onComplete(() =>
                this.animateCameraPosition4(object)
                  .start()
                  .onComplete(() => {
                    this.startThrust()
                      .start()
                      .onComplete(() => {
                        this.animateCameraPosition5(object)
                          .delay(2000)
                          .onStart(() => {
                            this.animateCameraPosition6(object).start();
                          })
                          .start()
                          .onComplete(() =>
                            this.rotateRocket(object)
                              .start()
                              .onComplete(() =>
                                this.moveRocketForward(object)
                                  .onStart(() => {
                                    this.moveCameraForward(object);
                                  })
                                  .start()
                                  .onComplete(() => {
                                    this.fadeRocket(object)
                                      .onStart(
                                        () =>
                                          (this.rocketThrust.visible = false)
                                      )
                                      .start();
                                  })
                              )
                          );
                      });
                  })
              );
          });
      });
  }

  update(delta) {
    requestAnimationFrame(() => this.update());
    TWEEN.update(delta);
  }
}

export default EarthSceneController;
