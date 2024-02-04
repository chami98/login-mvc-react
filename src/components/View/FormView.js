import React from 'react';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';

const FormView = ({ formData, updateFormData, handleSubmit }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh', // Optional: adjust height based on your design
                gap: '16px', // Optional: Adjust spacing between elements
            }}
        >
            <Typography variant="h4" align="center">
                KDU Clearance Management System
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            value={formData.email}
                            onChange={(e) => updateFormData('email', e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            type="password"
                            value={formData.password}
                            onChange={(e) => updateFormData('password', e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Sign in
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default FormView;
