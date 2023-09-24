import React from 'react';
import { useFormik } from 'formik';
import { errorMessageStyle, Button, addButtonStyles, addPhoneButtonStyles, deletePhoneButtonStyles } from '@/shared/styles';
import * as Yup from 'yup';
import { ContactData } from '@/types';

interface AddContactProps {
    onAddContact: (contact: ContactData) => void;
}

const initialValues: ContactData = {
    first_name: '',
    last_name: '',
    phones: [''],
};

const validationSchema = Yup.object({
    first_name: Yup.string()
        .matches(/^[a-zA-Z ]+$/, 'Specials characters are not allowed')
        .required('First Name is required'),
    last_name: Yup.string()
        .matches(/^[a-zA-Z ]+$/, 'Specials characters are not allowed')
        .required('Last Name is required'),
});

const AddContact: React.FC<AddContactProps> = ({ onAddContact }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            onAddContact(values);
            formik.resetForm();
        },
    });

    const handleAddPhoneNumber = () => {
        formik.values.phones?.push('');
        formik.setValues({ ...formik.values });
    };

    const handleDeletePhoneNumber = (index: number) => {
        formik.values.phones?.splice(index, 1);
        formik.setValues({ ...formik.values });
    };

    return (

        <form onSubmit={formik.handleSubmit} >
            <div>
                <label htmlFor="first_name">First Name*<br></br></label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values?.first_name}
                />
                {formik.touched.first_name && formik.errors.first_name ? (
                    <div css={errorMessageStyle}>{formik.errors.first_name}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="last_name">Last Name*<br></br></label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                />
                {formik.touched.last_name && formik.errors.last_name ? (
                    <div css={errorMessageStyle}>{formik.errors.last_name}</div>
                ) : null}
            </div>
            <div>
                <label>Phone Numbers</label>
                {formik.values.phones?.map((phones, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name={`phones[${index}]`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={phones}
                        />
                        {index > 0 && (
                            <Button
                                css={deletePhoneButtonStyles}
                                type="button"
                                onClick={() => handleDeletePhoneNumber(index)}
                            >
                                Delete
                            </Button>
                        )}
                    </div>
                ))}
                <Button css={addPhoneButtonStyles} type="button" onClick={handleAddPhoneNumber}>
                    Add Phone Number
                </Button>
            </div>
            <div>
                <Button css={addButtonStyles} style={{ marginTop: 25 }}>
                    Add New Contact
                </Button>
            </div>
        </form>
    );
};

export default AddContact;
