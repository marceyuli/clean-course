(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        public id: string;
        public type: HtmlType;
        constructor(
            { id, type }: { id: string, type: HtmlType }
        ) {
            this.id = id;
            this.type = type;
        }
    }

    class InputAttributes {
        public value: string;
        public placeholder: string;
        constructor(
            { value, placeholder }: { value: string, placeholder: string }
        ) {
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    class InputEvents {
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }
    // Idea para la nueva clase InputElement

    class InputElement{
        public htmlELement : HtmlElement;
        public inputAttributes : InputAttributes;
        public inputEvents : InputEvents;

        constructor({ id, value, placeholder } : { id: string, value: string, placeholder: string }) {
            this.htmlELement = new HtmlElement({ id, type: 'input'});
            this.inputAttributes = new InputAttributes({ value, placeholder });
            this.inputEvents = new InputEvents();
        }
    }

    const nameField = new InputElement(
        {
            id: 'txtName',
            value: 'Fernando',
            placeholder: 'Enter first name'
        }
    );
    console.log(nameField);

})()