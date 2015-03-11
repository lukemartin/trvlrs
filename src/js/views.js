import _ from 'underscore';
import Marionette from 'backbone.marionette';

export class IndexView extends Marionette.ItemView {
    constructor() {
        this.template = '#index-template';
        this.events = {
            'click *': () => {
                this.clicky();
            }
        }
        super();
    }

    clicky(str='default!') {
        console.log(str);
        alert(str);
    }
}

export class AnotherView extends Marionette.ItemView {
    constructor() {
        this.template = _.template('<h1>Beeeeeeeep!</h1>');
        super();
    }
}
