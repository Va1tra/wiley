import ko from 'knockout';
import 'ko.components';
import 'ko.customBindings';

export default class App {
    run() {
        ko.applyBindings();
    }
}