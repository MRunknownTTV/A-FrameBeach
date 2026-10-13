let isNight = false;

function nightTime() {
  const sky = document.querySelector('a-sky');
  const sun = document.querySelector('#sun');
  const moon = document.querySelector('#moon');
  const scene = document.querySelector('a-scene');
  const button3D = document.querySelector('#nightButton3D');

  isNight = !isNight;

  if (isNight) {
    sky.setAttribute('color', '#07132E');

    if (sun) sun.setAttribute('visible', false);
    if (moon) moon.setAttribute('visible', true);

    scene.setAttribute(
      'light',
      'type: ambient; color: #526080; intensity: 0.3'
    );

    if (button3D) button3D.setAttribute('color', '#2244AA');

    console.log('Nacht geactiveerd');
  } else {
    sky.setAttribute('color', '#6BD0FF');

    if (sun) sun.setAttribute('visible', true);
    if (moon) moon.setAttribute('visible', false);

    scene.setAttribute(
      'light',
      'type: ambient; color: #FFFFFF; intensity: 1'
    );

    if (button3D) button3D.setAttribute('color', '#222222');

    console.log('Dag geactiveerd');
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const button3D = document.querySelector('#nightButton3D');

  if (button3D) {
    button3D.addEventListener('click', nightTime);
  }
});