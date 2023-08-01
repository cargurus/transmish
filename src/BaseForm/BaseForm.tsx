import React, {
    FormEventHandler,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';

export type FormObject<T extends string> = Record<T, string | Blob>;

/**
 * This wraps around a FormData object to allow you specify which keys will be used.
 * TypedFormData.fromForm<'foo' | 'bar'>(someHTMLElement);
 */
export class TypedFormData<T extends string> {
    data: FormData;
    constructor(formData: FormData) {
        this.data = formData;
    }

    toJS(): FormObject<T> {
        return Object.fromEntries([
            ...this.data.entries(),
        ]) as unknown as FormObject<T>;
    }

    static fromFormData<T extends string>(data: FormData) {
        return new TypedFormData<T>(data);
    }

    static fromForm<T extends string>(target: EventTarget) {
        return TypedFormData.fromFormData<T>(
            new FormData(target as HTMLFormElement)
        );
    }
}

export interface BaseFormProps<T extends string> {
  className?: string;
  title: string;
  /**
   * This is the mechanism for bubbling up the values of the form.
   */
  onSubmit: (data: FormObject<T>) => void;
  children: ReactNode;
  /**
   * Whatever component you pass here will be magically "disabled" if the form hasn't been
   * modified or if you pass a true condition to the "submitDisabled" prop
   */
  button?: JSX.Element;
  formId?: string;
  /**
   * Overrides the internal mechanism that decides whether to allow submission of the form or not.
   */
  submitDisabled?: boolean;
}

/**
 * This component presents a (relatively) typesafe way of working with HTML forms.
 * No external state management is required.
 */
const getFormValueString = (form: HTMLFormElement): string => {
    const elements = [...form.elements] as HTMLInputElement[];
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

export const BaseForm = <T extends string>({
    title,
    className,
    children,
    onSubmit,
    button,
    formId,
    submitDisabled,
}: BaseFormProps<T>) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [initialValue, setInitialValue] = useState('');
    const [computedValue, setComputedValue] = useState('');

    useEffect(() => {
        if (formRef.current) {
            setInitialValue(getFormValueString(formRef.current));
        }
    }, [formRef]);

    const handleChange: FormEventHandler = (e) => {
        const target = e.target as HTMLInputElement;
        if (target.form) setComputedValue(getFormValueString(target.form));
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        return onSubmit(
      TypedFormData.fromForm<T>(e.target).toJS() as FormObject<T>
        );
    };

    const disabled: boolean =
    submitDisabled !== undefined
        ? submitDisabled
        : computedValue === '' || computedValue === initialValue;

    return (
        <form
            id={formId}
            ref={formRef}
            aria-label={title}
            onSubmit={handleSubmit}
            onChange={handleChange}
            className={className}
        >
            {children}
            {button && React.cloneElement(button, { disabled })}
        </form>
    );
};
