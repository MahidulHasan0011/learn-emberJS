import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductDetails extends Component {
  @service('shopping-cart') cart;

  @action
  addToCart() {
    const { name, color, colors, price } = this.args;
    this.cart.addItem({
      name,
      color,
      image: colors.find((c) => c.color === color).image,
      price: price.current,
    });
  }
}
