export default function random(index) {
  let newIndex = Math.floor(Math.random() * (16 - 0)) + 0;

  // eslint-disable-next-line no-plusplus
  if (index === newIndex) newIndex++;

  return newIndex;
}
