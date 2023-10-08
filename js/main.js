/* constants */
const numLights = 7;

/* DOM setup */
const body = document.querySelector('body');

const header = document.createElement('header');
header.innerHTML = '<h1>a l l &nbsp; o f &nbsp; t h e &nbsp; l i g h t s</h1>';

const main = document.createElement('main');
const orbContainer = document.createElement('div');
orbContainer.setAttribute('class', 'orb-container');
main.append(orbContainer);

for (let i = 0; i < numLights; i++) {
  makeOrb(i);
}

body.append(header, main);

/* functions */
function makeOrb(idx) {
  const orb = document.createElement('div');
  orb.setAttribute('class', 'orb');
  orb.setAttribute('rank', '' +  (idx + 1));
  orb.addEventListener('click', handleOrbClick)
  orbContainer.append(orb);
}

function handleOrbClick(e) {
  const orb = e.target;
  orb.style.backgroundColor = getRandomHex();
}

function getRandomHex() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
}