import Backbone from 'backbone';

export default class advertModel extends Backbone.Model {
  defaults() {
    return {
      image: '',
      title: '',
      subtitle: '',
      price: ''
    }
  }
}