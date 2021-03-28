export default function random(index) {
  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * (16 - 0)) + 0;
  } while (index === newIndex);

  return newIndex;
}
