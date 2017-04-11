import ko from 'knockout';
import 'knockout-mapping';

export default function TodoList() {

    this.newTaskName = ko.observable('');
    this.tasks = ko.observableArray([]);

    this.addTask = () => {
        if (this.newTaskName()) {
            this.tasks.push(ko.mapping.fromJS({name: this.newTaskName(), completed: false}));
            this.newTaskName('');
            this._save();
            this._sort();
        }
    };

    this.removeTask = (task) => {
        this.tasks.remove(task);
        this._save();
    };

    this.completeTask = (task) => {
        task.completed(true);
        this._save();
    };

    this.renameTask = (task, name) => {
        task.name(name);
        this._save();
        this._sort();
    };

    this._init = () => {
        this.tasks(JSON.parse(localStorage.getItem('tasks') || '[]').map(obj => ko.mapping.fromJS(obj)));
        this._sort();
    };

    this._save = () => {
        localStorage.setItem('tasks', JSON.stringify(this.tasks().map(task => ko.mapping.toJS(task))));
    };

    this._sort = () => {
        this.tasks.sort((left, right) => {
            if (left.name() < right.name()) {
                return 1;
            } else if (left.name() === right.name()) {
                return 0;
            } else {
                return -1;
            }
        });
    };

    this._init();
};