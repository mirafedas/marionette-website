import Backbone from 'backbone';
import data from '../../data/data.json';

export default class HomePageModel extends Backbone.Model {
  defaults() {
    return {
      data
    }
  }
}
