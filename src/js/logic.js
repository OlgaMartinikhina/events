export default class Logic {
  constructor(view) {
    this.score = { win: 0, loose: 0 };
    this.view = view;
    this.checkTarget = this.checkTarget.bind(this);
  }

  init() {
    this.view.container.addEventListener('click', this.checkTarget);
    this.view.setActive();
    this.interval = setInterval(() => {
      const final = this.checkScore(false);
      if (final) return;
      this.view.result(this.score, '');
      this.view.setActive();
    }, 1000);
  }

  checkScore(click) {
    if (this.score.loose >= 5) {
      clearInterval(this.interval);
      this.view.container.removeEventListener('click', this.checkTarget);
      this.view.result(this.score, 'Игра окончена');
      return true;
      // eslint-disable-next-line no-plusplus
    } if (!click) this.score.loose++;
    // eslint-disable-next-line no-plusplus
    else this.score.loose--;
    return false;
  }

  checkTarget(e) {
    if (e.target === this.view.img) {
      // eslint-disable-next-line no-plusplus
      this.score.win++;
      this.view.deleteImg();
      this.checkScore(true);
    }
  }
}
