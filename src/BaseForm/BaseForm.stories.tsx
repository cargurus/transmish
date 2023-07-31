import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BaseForm, FormObject } from './BaseForm';

export default {
    title: 'BaseForm',
    component: BaseForm,
} as ComponentMeta<typeof BaseForm>;

type FormFields =
  | 'firstName'
  | 'lastName'
  | 'optInEmail'
  | 'rootCanal'
  | 'eddieDingle';

export const UncontrolledInputs: ComponentStory<typeof BaseForm> = () => {
    const [formData, setFormData] = useState<FormObject<FormFields>>();
    return (
        <BaseForm<FormFields>
            title="Uncontrolled Inputs"
            onSubmit={(data) => setFormData(data)}
        >
            <h3>All inputs are uncontrolled</h3>
            <input name="firstName" placeholder="first name" required />
            <input name="lastName" placeholder="last name" required />
            <br />

            <label>
        I would like to receive emails <br />
                <input type="checkbox" value="true" name="optInEmail" required />
            </label>
            <br />

            <label>
        I would like to get a root canal <br />
                <input type="checkbox" value="true" name="rootCanal" required />
            </label>
            <br />

            <label>
        Are you Eddie Dingle? <br />
        Yes <input type="radio" name="eddieDingle" value="true" />
                <br />
        No <input type="radio" name="eddieDingle" value="false" />
            </label>
            <br />

            <button type="submit">submit</button>
            <h3>Output:</h3>
            <pre>
                <code>{JSON.stringify(formData, null, '\t')}</code>
            </pre>
        </BaseForm>
    );
};

type OtherFields = 'longWord' | 'shortWord';
export const ControlledInput: ComponentStory<typeof BaseForm> = () => {
    const [formData, setFormData] = useState<FormObject<OtherFields>>();
    const [longWord, setLongWord] = useState<string>('');
    const [eddie, setEddie] = useState<boolean>();

    return (
        <BaseForm
            title="Uncontrolled Inputs"
            onSubmit={(data) => setFormData(data)}
            button={<button type="submit">submit</button>}
            submitDisabled={
                eddie === true || eddie === undefined || longWord.length < 5
            }
        >
            <h3>
        Sometimes you will want to use controlled inputs for custom validations
            </h3>
      Enter any word more than 5 letters
            <input
                name="longWord"
                value={longWord}
                onChange={(e) => setLongWord(e.target.value)}
                required
            />
            {longWord.length > 0 && longWord.length < 5 && (
                <div style={{ color: 'red' }}>That word is not long enough</div>
            )}
            <br />
            <label>
        Are you Eddie Dingle <br />
        Yes <br />
                <input
                    type="radio"
                    name="eddieDingle"
                    value="true"
                    checked={eddie === true}
                    onClick={() => setEddie(true)}
                />
                <br />
        No <br />
                <input
                    type="radio"
                    name="eddieDingle"
                    value="false"
                    checked={eddie === false}
                    onClick={() => setEddie(false)}
                />
            </label>
            {eddie === true && (
                <div style={{ color: 'red' }}>
          Sorry Charlie, Eddie Dingle is not allowed
                </div>
            )}
            <br />
            <h3>Output:</h3>
            <pre>
                <code>{JSON.stringify(formData, null, '\t')}</code>
            </pre>
        </BaseForm>
    );
};
