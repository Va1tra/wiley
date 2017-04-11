import ko from 'knockout';
import TodoList from 'viewModel/TodoList';
import TodoListItem from 'viewModel/TodoListItem';

ko.components.register('todoList', {
    viewModel: TodoList,
    template: require('view/TodoList.html')
});

ko.components.register('todoListItem', {
    viewModel: TodoListItem,
    template: require('view/TodoListItem.html')
});
