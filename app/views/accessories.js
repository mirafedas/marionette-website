import Marionette from 'backbone.marionette';
import AccessoriesTemplate from '../templates/accessories.hbs'

export default class AccessoriesView extends Marionette.LayoutView 
{
  constructor(options) 
  {
    options.template = AccessoriesTemplate;

    super(options)
  }
}