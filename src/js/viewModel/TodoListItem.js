import ko from 'knockout';

export default function TodoListItem(params) {
    this._subscriptions = [];

    this._params = params;
    this.task = params.task;
    this.taskName = ko.observable(this.task.name());

    this.removeTask = () => {
        this._params.removeTask(this.task);
    };

    this.completeTask = () => {
        this._params.completeTask(this.task);
    };

    this.onBlur = () => {
        let newTaskName = this.taskName().trim();
        if (newTaskName) {
            this._params.renameTask(this.task, newTaskName);
        } else {
            this.taskName(this.task.name());
        }
    };

    this.dispose = () => {
        this._subscriptions.forEach(subscription => subscription.dispose());
    };

    this._init = () => {
        this._subscriptions.push(this.task.name.subscribe((newValue) => this.taskName(newValue)));
    };

    this._init();
}
