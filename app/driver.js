import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import homepageModel from './models/homepage';
import LayoutView from './views/layout';

export class App extends Marionette.Application
{
  onStart()
  {
    const websiteView = new LayoutView({
      model: new homepageModel()
    });
    websiteView.render();
  }
}

window.app = new App;
window.app.start();