import { ReactNode } from 'react';
export declare type FormObject<T extends string> = Record<T, string | Blob>;
/**
 * This wraps around a FormData object to allow you specify which keys will be used.
 * TypedFormData.fromForm<'foo' | 'bar'>(someHTMLElement);
 */
export declare class TypedFormData<T extends string> {
    data: FormData;
    constructor(formData: FormData);
    toJS(): FormObject<T>;
    static fromFormData<T extends string>(data: FormData): TypedFormData<T>;
    static fromForm<T extends string>(target: EventTarget): TypedFormData<T>;
}
export interface BaseFormProps<T extends string> {
    className?: string;
    title: string;
    onSubmit: (data: FormObject<T>) => void;
    children: ReactNode;
    button?: JSX.Element;
    formId?: string;
    submitDisabled?: boolean;
}
export declare const BaseForm: <T extends string>({ title, className, children, onSubmit, button, formId, submitDisabled, }: BaseFormProps<T>) => JSX.Element;
