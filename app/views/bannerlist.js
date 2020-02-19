import Marionette from 'backbone.marionette';
import BannerListTemplate from '../templates/bannerlist.hbs'

export default class BannerlistView extends Marionette.LayoutView 
{
  constructor(options) 
  {
    options.template = BannerListTemplate;

    super(options)
  }
}