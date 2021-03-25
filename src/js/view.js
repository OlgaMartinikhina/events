// eslint-disable-next-line import/extensions
import random from './randomaiser.js';

export default class View {
  constructor() {
    [this.container] = document.getElementsByClassName('container');
    [this.resultArea] = document.getElementsByClassName('result');
    [this.img] = document.images;
    this.setActive = this.setActive.bind(this);
    this.index = null;
  }

  init() {
    this.img.parentElement.removeChild(this.img);
    this.createCells();
  }

  createCells() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      this.container.appendChild(cell);
    }
  }

  setActive() {
    if (document.images[0]) { this.deleteImg(); }

    const cells = this.container.children;
    const i = random(this.index);
    this.index = i;
    cells[i].appendChild(this.img);
  }

  deleteImg() {
    const activeCell = document.images[0].parentElement;
    activeCell.removeChild(this.img);
  }

  result(score, status) {
    this.resultArea.innerHTML = `
    <h2>${status}</h2>
    <h3>Попадания: <strong>${score.win}</strong> </br> Промахи: <strong>${score.loose}</strong></h3>
    `;
  }
}
