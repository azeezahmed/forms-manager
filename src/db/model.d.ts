// General attributes for form elements
type FormElementAttributes = {
    id: number
    name: string;
    tagName: string;
    placeholder?: string;
};

type InputElement = FormElementAttributes & {
    tagName: "input";
    type: "text" | "password" | "checkbox" | "radio" | "email" | "number" | "date" | "file"; // Add more types as needed
};

type SelectElement = FormElementAttributes & {
    tagName: "select";
};


export type FormElement = InputElement | SelectElement;
