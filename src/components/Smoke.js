// import { TextureLoader, PlaneGeometry, Mesh, MeshLambertMaterial } from 'three';

// import SmokeTextureURL from '../assets/smoke-texture.png';

// async function Smoke({ scene }) {
//   const smokeTexture = new TextureLoader().load(SmokeTextureURL);

//   const smokeMaterial = new MeshLambertMaterial({
//     color: 0xffffff,
//     map: smokeTexture,
//     transparent: true
//   });
//   const smokeGeometry = new PlaneGeometry(50, 50);

//   const smokeParticles = [];
//   for (let i = 0; i < 350; i += 1) {
//     const particle = new Mesh(smokeGeometry, smokeMaterial);
//     particle.position.set(0, -5, Math.random() * 1000 - 100);
//     particle.rotation.z = Math.random() * 360;
//     // particle.visible = false;
//     scene.add(particle);

//     smokeParticles.push(particle);
//   }

//   return smokeParticles;
// }

// function animateSmoke(particles, delta) {
//   let count = particles.length;
//   while (count > 0) {
//     particles[count - 1].rotation.set += delta * 0.02;
//     particles[count - 1].position.set(
//       Math.random() * 150 - 75,
//       Math.random() * 100,
//       Math.random() * 10 - 5
//     );
//     count -= 1;
//   }
// }

// export { Smoke, animateSmoke };
import Proton from 'three.proton.js';
import { Color } from 'three';

function ParticleEngine({ scene }) {
  const proton = new Proton();
  const emitter = new Proton.Emitter();

  // setRate
  emitter.rate = new Proton.Rate(new Proton.Span(4, 16), new Proton.Span(0.01));

  // addInitialize
  emitter.addInitialize(new Proton.Position(new Proton.PointZone(0, 0)));
  emitter.addInitialize(new Proton.Mass(1));
  emitter.addInitialize(new Proton.Radius(6, 12));
  emitter.addInitialize(new Proton.Life(3));
  emitter.addInitialize(new Proton.V(45, new Proton.Vector3D(0, 1, 0), 180));

  // addBehaviour
  emitter.addBehaviour(new Proton.Alpha(1, 0));
  emitter.addBehaviour(new Proton.Scale(0.1, 1.3));

  const color1 = new Color();
  const color2 = new Color();
  const colorBehaviour = new Proton.Color(color1, color2);
  emitter.addBehaviour(colorBehaviour);
  emitter.emit();

  // add emitter
  proton.addEmitter(emitter);

  // add renderer
  proton.addRender(new Proton.SpriteRender(scene));
}

export default ParticleEngine;
