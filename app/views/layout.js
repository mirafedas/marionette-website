import Marionette from 'backbone.marionette'

import LayoutTemplate from '../templates/layout.hbs'
import BannerListView from './bannerlist'
import MenuView from './menu'
import ProductListView from './productlist'
import AdvertView from './advert'
import AccessoriesListView from './accessories'
import BlogView from './blog'
import SponsorshipView from './sponsorship';
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
     sponsorship: '#sponsorship',
     header: '#header',
     footer: '#footer'
   };
   
   super(options)
 }

 onRender()
  {
    const bannerListView = new BannerListView({model: this.model});
    const menuView = new MenuView({model: this.model});
    const productListView = new ProductListView({model: this.model});
    const advertView = new AdvertView({model: this.model});
    const accessoriesListView = new AccessoriesListView({model: this.model});
    const blogView = new BlogView({model: this.model});
    const sponsorshipView = new SponsorshipView({model: this.model});
    const headerView = new HeaderView({model: this.model});
    const footerView = new FooterView({model: this.model});


    this.showChildView('bannerlist', bannerListView);
    this.showChildView('menu', menuView);
    this.showChildView('productlist', productListView);
    this.showChildView('advert', advertView);
    this.showChildView('accessories', accessoriesListView);
    this.showChildView('blog', blogView);
    this.showChildView('sponsorship', sponsorshipView);
    this.showChildView('header', headerView);
    this.showChildView('footer', footerView)
  }
}