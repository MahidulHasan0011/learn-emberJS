import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Product extends Component {
  productImage = this.args.product.colors[0].image;
  @tracked number = 0;

  @action
  addNUmber() {
    this.number++;
  }
  // @action
}
