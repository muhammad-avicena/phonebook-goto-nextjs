'use client'
import React from 'react';
import { useFormik } from 'formik';
import { errorMessageStyle, Button, addButtonStyles, addPhoneButtonStyles, deletePhoneButtonStyles } from '@/shared/styles';
import * as Yup from 'yup';
import { ContactData } from '@/types';

interface AddContactProps {
    onEditContact: (contact: ContactData) => void;
    initialValuesData?: ContactData;
}

const validationSchema = Yup.object({
    first_name: Yup.string()
        .matches(/^[a-zA-Z ]+$/, 'Specials characters are not allowed')
        .required('First Name is required'),
    last_name: Yup.string()
        .matches(/^[a-zA-Z ]+$/, 'Specials characters are not allowed')
        .required('Last Name is required'),
});

const AddContact: React.FC<AddContactProps> = ({ onEditContact, initialValuesData }) => {

    const initialValues: ContactData = initialValuesData || {
        first_name: '',
        last_name: '',
        phones: [''],
    };

    const formik = useFormik({
        initialValues: initialValuesData || initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values, "isi values form")
            onEditContact(values);
            formik.resetForm();
        },
    });

    const handleAddPhoneNumber = () => {
        const updatedPhones = [...formik.values.phones, ''];
        formik.setValues({ ...formik.values, phones: updatedPhones });
    };

    const handleDeletePhoneNumber = (index: number) => {
        const updatedPhones = [...formik.values.phones];
        updatedPhones.splice(index, 1);
        formik.setValues({ ...formik.values, phones: updatedPhones });
    };


    return (

        <form onSubmit={formik.handleSubmit}>
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
                {formik.values.phones?.map((phones: any, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name={`phones[${index}]`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={phones.number}
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
                    Save
                </Button>
            </div>
        </form>
    );
};

export default AddContact;
