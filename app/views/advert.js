import Marionette from 'backbone.marionette';
import AdvertTemplate from '../templates/advert.hbs';
import data from '../../data/data.json';

export default class AdvertView extends Marionette.LayoutView 
{
  constructor(options) 
  {
    options.template = AdvertTemplate;
    
    super(options)
  }
  
  ui() {
    return {
      'image': data.sale.image,
      'title': data.sale.title,
      'subtitle': data.sale.subtitle,
      'price': data.sale.price
    }
  }
}