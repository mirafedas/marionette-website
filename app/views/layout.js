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
     bannerlist: '#bannerlist',
     menu: '#menu',
     productlist: '#productlist',
     advert: '#advert',
     accessories: '#accessories',
     blog: '#blog',
     header: '#header',
     footer: '#footer'
   };
   
   super(options)
 }

  onRender() {
    const sectionsEnum = {
      bannerlist: BannerListView,
      menu: MenuView,
      productlist: ProductListView,
      advert: AdvertView,
      accessories: AccessoriesListView,
      blog: BlogView,
    };
    const headerView = new HeaderView({ model: this.model });
    const footerView = new FooterView({ model: this.model });
    this.showChildView('header', headerView);
    this.showChildView('footer', footerView);

    const sortedDataByPosition = this.collection.models.sort((prevObj, nextObj) => (prevObj.attributes.position > nextObj.attributes.position) ? 1 : -1);
    // console.log("sortedDataByPosition>> ", sortedDataByPosition)

    sortedDataByPosition.forEach(item => {
      const el = sectionsEnum[item.id];
      this.model.set(`${item.attributes.id}`, item.attributes.content);
      // console.log("item ", item)
      console.log(this.model)
      const section = new el({ model: this.model });

      this.showChildView(item.id, section);
    })
    

  }
}