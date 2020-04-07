import React, { useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import { TextField } from '@material-ui/core';

export default function Input({ name, label, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <TextField
            name={fieldName}
            error={!!error}
            helperText={error || null}
            inputRef={inputRef}
            defaultValue={defaultValue}
            label={label}
            fullWidth
            variant="outlined"
            {...rest}
        />
    );
}
