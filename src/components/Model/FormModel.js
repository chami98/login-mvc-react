import React, { useState } from 'react';

const FormModel = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const updateFormData = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    return { formData, updateFormData };
};

export default FormModel;
