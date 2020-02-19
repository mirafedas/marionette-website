import Marionette from 'backbone.marionette';
import SponsorshipTemplate from '../templates/sponsorship.hbs'

export default class SponsorshipView extends Marionette.LayoutView 
{
  constructor(options) 
  {
    options.template = SponsorshipTemplate;

    super(options)
  }
}