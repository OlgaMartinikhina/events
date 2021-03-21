// TODO: write code here
// eslint-disable-next-line import/extensions
import View from './view.js';

// eslint-disable-next-line import/extensions
import Logic from './logic.js';

const view = new View();
view.init();
const logic = new Logic(view);
logic.init();
