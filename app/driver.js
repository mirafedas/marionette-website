import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import LayoutView from './views/layout';

export class App extends Marionette.Application
{
  onStart()
  {
    const todoView = new LayoutView({
      collection: new Backbone.Collection(),
    });
    todoView.render();
  }
}

window.app = new App;
window.app.start();