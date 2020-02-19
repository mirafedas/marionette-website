import Marionette from 'backbone.marionette';
import BlogTemplate from '../templates/blog.hbs'

export default class BlogView extends Marionette.LayoutView 
{
  constructor(options) 
  {
    options.template = BlogTemplate;

    super(options)
  }
}