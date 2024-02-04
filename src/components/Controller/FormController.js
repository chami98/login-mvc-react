import React from 'react';
import FormModel from '../Model/FormModel';
import FormView from '../View/FormView';
import { VALID_EMAIL } from '../../constants.js';
import { VALID_PASSWORD } from '../../constants.js';


const FormController = () => {
    const { formData, updateFormData } = FormModel();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the email and password match the allowed credentials
        if (formData.email === VALID_EMAIL && formData.password === VALID_PASSWORD) {
            // If the credentials match, log in
            console.log('Login successful');
            alert('Login successful');
        } else {
            // If the credentials do not match, display an error message
            console.log('Invalid credentials');
            alert('Invalid credentials');
        }
    };

    return <FormView formData={formData} updateFormData={updateFormData} handleSubmit={handleSubmit} />;
};

export default FormController;
