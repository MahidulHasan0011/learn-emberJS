import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Product extends Component {
  @tracked number = 0;

  @action
  addNUmber() {
    this.number++;
  }
  // @action
}