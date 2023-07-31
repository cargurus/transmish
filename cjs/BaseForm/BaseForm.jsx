"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseForm = exports.TypedFormData = void 0;
const react_1 = __importStar(require("react"));
/**
 * This wraps around a FormData object to allow you specify which keys will be used.
 * TypedFormData.fromForm<'foo' | 'bar'>(someHTMLElement);
 */
class TypedFormData {
    constructor(formData) {
        this.data = formData;
    }
    toJS() {
        return Object.fromEntries([
            ...this.data.entries(),
        ]);
    }
    static fromFormData(data) {
        return new TypedFormData(data);
    }
    static fromForm(target) {
        return TypedFormData.fromFormData(new FormData(target));
    }
}
exports.TypedFormData = TypedFormData;
/**
 * This component presents a (relatively) typesafe way of working with HTML forms.
 * No external state management is required.
 */
const getFormValueString = (form) => {
    const elements = [...form.elements];
    return elements
        .map((e) => {
        if (e.type === 'checkbox') {
            return e.checked ? `${e.name}true` : `${e.name}`;
        }
        if ('value' in e) {
            return e.name + e.value === '0' ? '' : e.value;
        }
        return '';
    })
        .join('');
};
const BaseForm = ({ title, className, children, onSubmit, button, formId, submitDisabled, }) => {
    const formRef = (0, react_1.useRef)(null);
    const [initialValue, setInitialValue] = (0, react_1.useState)('');
    const [computedValue, setComputedValue] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        if (formRef.current) {
            setInitialValue(getFormValueString(formRef.current));
        }
    }, [formRef]);
    const handleChange = (e) => {
        const target = e.target;
        if (target.form)
            setComputedValue(getFormValueString(target.form));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        return onSubmit(TypedFormData.fromForm(e.target).toJS());
    };
    const disabled = submitDisabled !== undefined
        ? submitDisabled
        : computedValue === '' || computedValue === initialValue;
    return (react_1.default.createElement("form", { id: formId, ref: formRef, "aria-label": title, onSubmit: handleSubmit, onChange: handleChange, className: className },
        children,
        button && react_1.default.cloneElement(button, { disabled })));
};
exports.BaseForm = BaseForm;
