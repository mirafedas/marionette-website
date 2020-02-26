import Marionette from 'backbone.marionette'

import LayoutTemplate from '../templates/layout.hbs'
import HeaderView from './header';
import FooterView from './footer';

export default class AppView extends Marionette.LayoutView 
{
 constructor(options)
 {
   options.template = LayoutTemplate;
   options.el = '#app-hook';
   options.regions = {
     bannerlist: '#bannerlist',
     menu: '#menu',
     productlist: '#productlist',
     promo: '#promo',
     watches: '#watches',
     blog: '#blog',
     header: '#header',
     footer: '#footer'
   };
   
   super(options)
 }

  onRender() {
    const sortedSectionsByPosition = this.model.attributes.sortedSectionsByPosition;
    const headerView = new HeaderView({ model: this.model });
    const footerView = new FooterView({ model: this.model });
    this.showChildView('header', headerView);
    this.showChildView('footer', footerView);

    sortedSectionsByPosition.forEach(async item => {
      const importedView = await import(/* webpackChunkName: "[request]" */ `./${item.id}`);
      const createdView = new importedView.default({ model: this.model });

      this.model.set(`${item.id}`, item.content);
      this.showChildView(item.id, createdView);
      })
    }
  }