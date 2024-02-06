import React from 'react';
import FormModel from '../Model/FormModel';
import FormView from '../View/FormView';
import { VALID_EMAIL } from '../../constants.js'; // Import constant for valid email
import { VALID_PASSWORD } from '../../constants.js'; // Import constant for valid password

// Define the FormController component
const FormController = () => {
    // Destructure formData and updateFormData from the FormModel
    const { formData, updateFormData } = FormModel();

    // Define a function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Check if the entered email and password match the valid ones
        if (formData.email === VALID_EMAIL && formData.password === VALID_PASSWORD) {
            console.log('Login successful'); // Log success message to the console
            alert('Login successful'); // Show alert for successful login
        } else {
            console.log('Invalid credentials'); // Log failure message to the console
            alert('Invalid credentials'); // Show alert for invalid credentials
        }
    };

    // Render the FormView component with props
    return <FormView formData={formData} updateFormData={updateFormData} handleSubmit={handleSubmit} />;
};

export default FormController; // Export the FormController component
