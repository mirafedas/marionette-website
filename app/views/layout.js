import Marionette from 'backbone.marionette'

import LayoutTemplate from '../templates/layout.hbs'
import BannerListView from './bannerlist'
import MenuView from './menu'
import ProductListView from './productlist'
import AdvertView from './advert'
import AccessoriesListView from './accessories'
import BlogView from './blog'
import HeaderView from './header';
import FooterView from './footer';

export default class AppView extends Marionette.LayoutView 
{
 constructor(options)
 {
   options.template = LayoutTemplate;
   options.el = '#app-hook';
   options.regions = {
     bannerlist: '#banner-list',
     menu: '#menu',
     productlist: '#product-list',
     advert: '#advert',
     accessories: '#accessories-list',
     blog: '#blog',
     header: '#header',
     footer: '#footer'
   };
   
   super(options)
 }

 onRender()
  {
    const headerView = new HeaderView({model: this.model});
    const footerView = new FooterView({model: this.model});
    this.showChildView('header', headerView);
    this.showChildView('footer', footerView);

    const sortedDataByPosition = this.collection.models.sort((a, b) => (a.attributes.position > b.attributes.position) ? 1 : -1)
    console.log(sortedDataByPosition)

    sortedDataByPosition.map(obj => {
      const newView = new templateNameView({model: this.model});
      this.showChildView('templatename', newView);
    })


    // const bannerListView = new BannerListView({model: this.model});
    // const menuView = new MenuView({model: this.model});
    // const productListView = new ProductListView({model: this.model});
    // const advertView = new AdvertView({model: this.model});
    // const accessoriesListView = new AccessoriesListView({model: this.model});
    // const blogView = new BlogView({model: this.model});
   

    // this.showChildView('bannerlist', bannerListView);
    // this.showChildView('menu', menuView);
    // this.showChildView('productlist', productListView);
    // this.showChildView('advert', advertView);
    // this.showChildView('accessories', accessoriesListView);
    // this.showChildView('blog', blogView);
  }
}