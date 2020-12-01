//TODO: fix freesolo bug where input disappears if not part of drumTypes
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Formik, Field, Form, useField } from "formik";
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import {
    Autocomplete,
    AutocompleteRenderInputParams,
  } from 'formik-material-ui-lab';

const filter = createFilterOptions();

export default function FreeSolo({label, ...props}) {
    console.log("props", props);
    const [value, setValue] = React.useState(null);
    const [field, meta] = useField(props);
    console.log("field", field);
    console.log("meta", meta);
    return (
        <Field
            name= {field.name}
            component={Autocomplete}
            freeSolo
            autoSelect
            options={drumTypes}
            getOptionLabel={(option: any) => option.title || option}
            style={{width: 300,
                    paddingTop: "4px"}}
            freeSolo
            autoSelect
            // onChange={(event, newValue) => {
            //     console.log(newValue);
            //     if (typeof newValue === 'string') {
            //     setValue({
            //         title: newValue,
            //     });
            //     } else if (newValue && newValue.inputValue) {
            //     // Create a new value from the user input
            //     setValue({
            //         title: newValue.inputValue,
            //     });
            //     } else {
            //     setValue(newValue);
            //     }
            // }}
        // filterOptions={(options, params) => {
        //     const filtered = filter(options, params);

        //     // Suggest the creation of a new value
        //     if (params.inputValue !== '') {
        //     filtered.push({
        //         inputValue : params.inputValue,
        //         title: `Add "${params.inputValue}"`,
        //     });
        //     }
        //     return filtered;
        // }}
            renderInput={(params: AutocompleteRenderInputParams) => (
                <TextField
                {...params}
                error={meta.touched['autocomplete'] && !!meta.errors['autocomplete']}
                helperText={meta.touched['autocomplete'] && meta.errors['autocomplete']}
                label={label}
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