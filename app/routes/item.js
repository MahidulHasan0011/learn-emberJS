import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
 async model(params) {
    const { item_id } = params;
    const response = await fetch('/api/items.json');
    const { products } = await response.json();
    const product = products.find(({ id }) => id === item_id);
    console.log('product', product);
    return product;
  }

  // set color in every time in controller
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.colors[0].color;
  }
}
