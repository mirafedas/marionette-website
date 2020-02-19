import Marionette from 'backbone.marionette';
import FooterTemplate from '../templates/footer.hbs'

export default class FooterView extends Marionette.LayoutView 
{
  constructor(options) 
  {
    options.template = FooterTemplate;
    options.tagName = 'footer'
    super(options)
  }
}