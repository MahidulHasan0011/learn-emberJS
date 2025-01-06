import EmberRouter from '@ember/routing/router';
import config from 'cart-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // dynamic route
  this.route('item', { path: '/item/:item_id' });
  // not found route
  this.route('not-found', { path: '/*path' });

  // re-write the route path to shopping-cart
  this.route('cart', {path: 'shopping-cart'});
});
