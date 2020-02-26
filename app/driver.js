import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
// import './public-path';

import HomePageModel from './models/homepage';
import LayoutView from './views/layout';

import data from '../data/data.json';

export class App extends Marionette.Application
{
  onStart(options)
  {
    const websiteView = new LayoutView({
      collection: new Backbone.Collection(options.data),
      model: new HomePageModel()
    });
    websiteView.render();
  }
}

window.app = new App;
window.app.start({data});