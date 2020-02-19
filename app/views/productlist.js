import Marionette from 'backbone.marionette';
import ProductListTemplate from '../templates/productlist.hbs'

export default class ProductListView extends Marionette.LayoutView 
{
  constructor(options) 
  {
    options.template = ProductListTemplate;

    super(options)
  }
}