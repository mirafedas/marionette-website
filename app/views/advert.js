import Marionette from 'backbone.marionette';
import AdvertTemplate from '../templates/advert.hbs';

export default class AdvertView extends Marionette.LayoutView 
{
  constructor(options) 
  {
    options.template = AdvertTemplate;
    
    super(options)
  }
}