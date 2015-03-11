import $ from 'jquery';
import Backbone from 'backbone';
Backbone.$ = $;
import Marionette from 'backbone.marionette';

import Router from './router';

export default class Application extends Marionette.Application {
    constructor() {
        super();
    }

    initialize() {
        this.addRegions({
            main: '#app'
        });

        this.router = new Router({
            container: this.main
        });

        Backbone.history.start();
    }
}
