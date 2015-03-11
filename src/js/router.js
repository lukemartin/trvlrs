import Backbone from 'backbone';

import * as Views from './views';

export default class Router extends Backbone.Router {
    constructor(options) {
        this.container = options.container;

        this.routes = {
            '': 'index',
            'another': 'another'
        }

        super();
    }

    index() {
        this.container.show(new Views.IndexView());
    }

    another() {
        this.container.show(new Views.AnotherView());
    }
}
