import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const initialValues = {
    name: '',
    number: '',
};

const phoneRegExp = /^(\d{3}-\d{2}-\d{2})$/;
const contactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too short!')
        .max(30, 'Too long!')
        .required('Required!'),
    number: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required!'),
});

export default function ContactForm({ onAdd }) {
    const contactNameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        onAdd({
        name: values.name,
        number: values.number,
        id: nanoid(),
        });

        actions.resetForm();
    };
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
        >
        <Form className={css.form}>
            <div className={css.div}>
            <label htmlFor={contactNameFieldId} className={css.label}>
                Name
            </label>
            <Field
                type="text"
                name="name"
                id="contactNameFieldId"
                className={css.input}
            />
            <ErrorMessage className={css.error} name="name" as="span" />
            </div>
            <div className={css.div}>
            <label htmlFor={numberFieldId} className={css.label}>
                Number
            </label>
            <Field
                type="text"
                name="number"
                id="numberFieldId"
                className={css.input}
            />
            <ErrorMessage className={css.error} name="number" as="span" />
            </div>

            <button type="submit" className={css.btn}>
            Add contact
            </button>
        </Form>
        </Formik>
    );
}