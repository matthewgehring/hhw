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
                getOptionLabel={(option: any) => option.title || option}
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
    {title: "Organic Poison"},
    {title: "Dioxin Precusor"},
    {title: "Organic Acid"},
    {title: "Organic Base"},
    {title: "Inorganic Acid"},
    {title: "Inorganic Base"},
    {title: "Hypochlorites"},
    {title: "Neutral Oxidizer"}
]