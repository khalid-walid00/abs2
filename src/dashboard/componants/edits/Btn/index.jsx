import { Button } from '@mui/material';
import React from 'react';

function SaveButton({ onClick }) {
    return (
        <Button
            sx={{ backgroundColor: "#4880FF" }}
            variant="contained"
            size="medium"
            type="button" // Change this from "submit" to "button"
            onClick={onClick} // Use onClick instead of onSubmit
        >
            Save
        </Button>
    );
}

export default SaveButton;
