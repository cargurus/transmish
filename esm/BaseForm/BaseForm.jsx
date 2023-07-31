import React, { useEffect, useRef, useState, } from 'react';
/**
 * This wraps around a FormData object to allow you specify which keys will be used.
 * TypedFormData.fromForm<'foo' | 'bar'>(someHTMLElement);
 */
export class TypedFormData {
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
export const BaseForm = ({ title, className, children, onSubmit, button, formId, submitDisabled, }) => {
    const formRef = useRef(null);
    const [initialValue, setInitialValue] = useState('');
    const [computedValue, setComputedValue] = useState('');
    useEffect(() => {
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
    const disabled = submitDisabled || computedValue === '' || computedValue === initialValue;
    return (React.createElement("form", { id: formId, ref: formRef, "aria-label": title, onSubmit: handleSubmit, onChange: handleChange, className: className },
        children,
        button && React.cloneElement(button, { disabled })));
};
