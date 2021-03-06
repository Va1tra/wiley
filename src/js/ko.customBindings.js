import ko from 'knockout';

ko.bindingHandlers.contentEditableInput = {
    init: function(element, valueAccessor) {
        let value = valueAccessor();
        let onInput = () => {
            value(element.innerText);
        };

        element.addEventListener('input', onInput);
        element.addEventListener('paste', onInput);

        ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
            element.removeEventListener('input', onInput);
            element.removeEventListener('paste', onInput);
        });
    },
    update: function(element, valueAccessor) {
        let value = valueAccessor();

        if (element.innerText !== value()) {
            element.innerText = value();
        }
    }
};