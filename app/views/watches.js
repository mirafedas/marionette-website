import Marionette from 'backbone.marionette';
import WatchesTemplate from '../templates/watches.hbs'

export default class WatchesView extends Marionette.LayoutView 
{
  constructor(options) 
  {
    options.template = WatchesTemplate;

    super(options)
  }
}