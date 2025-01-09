import Route from '@ember/routing/route';
export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('/api/items.json');
    console.log('response', response);
    const { products } = await response.json();
    console.log('data', products);

    return products;
  }
}
