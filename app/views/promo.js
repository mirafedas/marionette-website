import Marionette from 'backbone.marionette';
import PromoTemplate from '../templates/promo.hbs';

export default class PromoView extends Marionette.LayoutView 
{
  constructor(options) 
  {
    options.template = PromoTemplate;
    
    super(options)
  }
}