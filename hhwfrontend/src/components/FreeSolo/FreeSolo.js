//TODO: fix freesolo bug where input disappears if not part of drumTypes
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Formik, Field, Form, useField } from "formik";
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import {
    Autocomplete,
    AutocompleteRenderInputParams,
  } from 'formik-material-ui-lab';


export default function FreeSolo({label, ...props}) {
    const [field, meta] = useField(props);

    return (
            <Field
                name= {field.name}
                component={Autocomplete}
                id="combo-box-demo"
                freeSolo
                autoSelect
                options={drumTypes}
                getOptionLabel={(option: any) => option || option}
                style={{width: 200}}
                renderInput={(params: AutocompleteRenderInputParams) => (
                    <TextField
                    {...params}
                    error={meta.touched['autocomplete'] && !!meta.errors['autocomplete']}
                    helperText={meta.touched['autocomplete'] && meta.errors['autocomplete']}
                    label={label}
                    margin="normal"
                    variant="outlined"
                    />
                )}
            />
  );
}

const drumTypes = [
    "Organic Poison",
    "Dioxin Precusor",
    "Organic Acid",
    "Organic Base",
    "Inorganic Acid",
    "Inorganic Base",
    "Hypochlorites",
    "Neutral Oxidizer"
]