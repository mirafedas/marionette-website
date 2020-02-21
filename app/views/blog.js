import Marionette from 'backbone.marionette';
import BlogTemplate from '../templates/blog.hbs'

export default class BlogView extends Marionette.LayoutView 
{
  constructor(options) 
  {
    options.template = BlogTemplate;

    super(options)
  }

  templateHelpers(){
    return {
      formatDay: function() {
        return new Date().getDate();
      },
      formatMonth: () => {
        return new Date().toLocaleString('en-us', { month: 'short' });
      },
      formatYear: () => {
        return new Date().getFullYear();
      }
    }
  } 
}