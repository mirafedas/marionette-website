import Marionette from 'backbone.marionette';
import HeaderTemplate from '../templates/header.hbs'

export default class HeaderView extends Marionette.LayoutView 
{
  constructor(options) 
  {
    options.template = HeaderTemplate;
    options.tagName = 'header';

    super(options)
  }
}