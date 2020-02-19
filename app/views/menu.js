import Marionette from 'backbone.marionette';
import MenuTemplate from '../templates/menu.hbs'

export default class MenuView extends Marionette.LayoutView 
{
  constructor(options) 
  {
    options.template = MenuTemplate;

    super(options)
  }
}