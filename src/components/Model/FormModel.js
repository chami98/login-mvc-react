import React, { useState } from 'react';

// Define a functional component called FormModel
const FormModel = () => {
    // Define state using the useState hook
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Function to update form data
    const updateFormData = (field, value) => {
        // Update form data using spread operator to maintain immutability
        setFormData({
            ...formData,
            [field]: value
        });
    };

    // Return an object containing formData state and updateFormData function
    return { formData, updateFormData };
};

// Export the FormModel component as the default export
export default FormModel;
