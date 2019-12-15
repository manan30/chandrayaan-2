import TWEEN from '@tweenjs/tween.js';
import { Vector3, Math as threeMath, PerspectiveCamera } from 'three';

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
    return (
      new TWEEN.Tween(this.camera.position)
        .to({ x: 0, y: 100, z: 100 }, 7000)
        .easing(TWEEN.Easing.Cubic.InOut)
        // .onStart(() => {

        // })
        .onUpdate(() => {
          this.camera.lookAt(object.position);
        })
    );
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
      .to({ z: threeMath.degToRad(-60) }, 4000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onStart(() => {
        new TWEEN.Tween(this.camera.position)
          .to({ z: 100 }, 2000)
          .easing(TWEEN.Easing.Cubic.InOut)
          .start();

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

  fadeOutRocket(object) {
    this.main = this.scene.getObjectByName('NurbsPath').children[0].material;
    this.cylinder1 = this.scene.getObjectByName(
      'Cylinder001'
    ).children[0].material;
    this.cylinder2 = this.scene.getObjectByName(
      'Cylinder003'
    ).children[0].material;
    return new TWEEN.Tween({ opacity: 1 })
      .to({ opacity: 0 }, 1500)
      .onUpdate(data => {
        this.main.opacity = data.opacity;
        this.cylinder1.opacity = data.opacity;
        this.cylinder2.opacity = data.opacity;
      })
      .onStart(() => {
        this.fadeInLander(object);
        this.rocketThrust.visible = false;
      });
  }

  fadeInLander(object) {
    new TWEEN.Tween({ opacity: 0 })
      .to({ opacity: 1 }, 2000)
      .onStart(() => {
        console.log(object.rotation);
      })
      .onUpdate(data => {
        this.lander.children[0].children.forEach(child => {
          if (child.type === 'Mesh') child.material.opacity = data.opacity;
        });
      })
      .start()
      .onComplete(() => {
        new TWEEN.Tween(this.lander.rotation)
          .to({ z: threeMath.degToRad(60) }, 4000)
          .easing(TWEEN.Easing.Cubic.InOut)
          .onStart(() => {
            new TWEEN.Tween(this.lander.rotation)
              .to({ y: threeMath.degToRad(-15) }, 1000)
              .easing(TWEEN.Easing.Cubic.InOut)
              .start();
          });
      });
  }

  fadeLightsOut() {
    return new TWEEN.Tween({ intensity: 0.1 })
      .to({ intensity: 0 }, 1000)
      .onUpdate(data => {
        this.scene.children[0].intensity = data.intensity;
      });
  }

  fadeLightsIn() {
    new TWEEN.Tween({ intensity: 0 })
      .to({ intensity: 0.1 }, 1000)
      .onUpdate(data => {
        this.scene.children[0].intensity = data.intensity;
      })
      .start();
  }

  rotateLander() {
    return new TWEEN.Tween(this.lander.rotation)
      .to({ x: threeMath.degToRad(0) }, 5000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onStart(() => {
        // new TWEEN.Tween(this.camera.position)
        //   .to(
        //     {
        //       x: this.camera.position.x + 200
        //     },
        //     5000
        //   )
        //   .easing(TWEEN.Easing.Cubic.InOut)
        //   .start();
      })
      .onUpdate(() => {
        // this.camera.lookAt(this.lander.position);
      });
  }

  reorientLander(object) {
    this.lander = object;
    return new TWEEN.Tween(this.lander.rotation)
      .to({ z: threeMath.degToRad(-90) }, 2000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onStart(() => {
        new TWEEN.Tween(this.camera.position)
          .to(
            {
              x: this.camera.position.x + 100,
              z: this.camera.position.z + 70
            },
            2000
          )
          .start();

        new TWEEN.Tween(this.lander.rotation)
          .to({ y: threeMath.degToRad(0) }, 2000)
          .easing(TWEEN.Easing.Cubic.InOut)
          .start();
      });
  }

  positionCameraBetweenLM() {
    return new TWEEN.Tween(this.camera.position)
      .to(
        {
          // x: this.camera.position.x + 300,
          z: 500
        },
        3000
      )
      .easing(TWEEN.Easing.Cubic.InOut);
  }

  moveLander() {
    return new TWEEN.Tween(this.lander.position)
      .to({ x: 1000 }, 12000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onStart(() => {
        new TWEEN.Tween(this.camera.position)
          .to({ x: 1000 }, 12000)
          .easing(TWEEN.Easing.Cubic.InOut)
          .start();
      });
  }

  zoomInCamera(object) {
    return new TWEEN.Tween(this.camera.position)
      .to(
        {
          x: this.camera.position.x + 500,
          z: 200
        },
        2000
      )
      .easing(TWEEN.Easing.Cubic.InOut);
    // .onUpdate(() => {
    //   this.camera.lookAt(object.position);
    // });
  }

  climbToTheMoon() {
    return new TWEEN.Tween(this.lander.position)
      .to(
        {
          x: this.lander.position.x + 400,
          y: this.lander.position.y + 200
        },
        7000
      )
      .easing(TWEEN.Easing.Cubic.InOut);
  }

  reorientCameraAndLander() {
    return new TWEEN.Tween(this.camera.position)
      .to(
        {
          x: this.camera.position.x + 700,
          y: this.camera.position.y + 150,
          z: this.camera.position.z - 350
        },
        3000
      )
      .easing(TWEEN.Easing.Cubic.InOut)
      .onStart(() => {
        new TWEEN.Tween(this.camera.rotation)
          .to({ y: threeMath.degToRad(90) }, 3000)
          .easing(TWEEN.Easing.Cubic.InOut)
          .start();

        new TWEEN.Tween(this.lander.rotation)
          .to({ z: threeMath.degToRad(0) }, 6000)
          .easing(TWEEN.Easing.Cubic.InOut)
          .start();
      });
  }

  startDescent() {
    return new TWEEN.Tween(this.lander.position)
      .to(
        { x: this.lander.position.x + 50, y: this.lander.position.y - 175 },
        7000
      )
      .easing(TWEEN.Easing.Cubic.InOut)
      .onStart(() => {
        new TWEEN.Tween(this.camera.position)
          .to({ x: this.camera.position.x - 100 }, 5000)
          .easing(TWEEN.Easing.Cubic.InOut)
          .start();
      });
  }

  setCamera() {
    this.camera.position.set(0, 40, 50);
  }

  // boosterSeparation() {
  //   this.cylinder = this.scene.getObjectByName('Cylinder003');
  //   return new TWEEN.Tween(this.cylinder)
  //     .to({ y: 2500 }, 5000)
  //     .easing(TWEEN.Easing.Cubic.InOut);
  // }

  animate(object) {
    [, this.rocket, this.rocketThrust, this.lander] = object.children;
    this.animateCameraPosition1(object)
      .start()
      .onComplete(() => {
        // this.fadeLightsOut()
        //   .start()
        //   .onComplete(() =>
        this.animateCameraPosition2(object)
          // .delay(1500)
          // .onStart(() => {
          //   // this.fadeLightsIn();
          //   this.setCamera();
          // })
          .start()
          // );
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
                              .onComplete(() => {
                                this.fadeOutRocket(object)
                                  .start()
                                  .onComplete(() => {
                                    this.reorientLander(object)
                                      .start()
                                      .onComplete(() => {
                                        this.positionCameraBetweenLM()
                                          .start()
                                          .onComplete(() => {
                                            this.moveLander()
                                              .start()
                                              .onComplete(() => {
                                                // .onComplete(() => {
                                                this.climbToTheMoon()
                                                  .start()
                                                  .onComplete(() =>
                                                    this.reorientCameraAndLander()
                                                      .start()
                                                      .onComplete(() => {
                                                        this.startDescent().start();
                                                      })
                                                  );
                                                //     .onComplete(() => {
                                                //       this.camera.lookAt(
                                                //         new Vector3(
                                                //           2000,
                                                //           2000,
                                                //           0
                                                //         )
                                                //       );
                                                //     });
                                                // });
                                              });
                                          });
                                      });
                                  });
                              })
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
