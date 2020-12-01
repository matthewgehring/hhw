import React from "react";
import { Formik, Field, Form, useField } from "formik";
import {TextField, Button, Radio, FormControlLabel} from "@material-ui/core";
import FreeSolo from "../FreeSolo/FreeSolo";


const MyRadio = ({label, ...props }) => {
    const [field] = useField(props);
    return (
        <FormControlLabel {...field} control={<Radio />} label={label} />
    )
}

const CreateDrum = () => {
    return (
        <div>
            <Formik 
            initialValues={{ drumNumber: "", drumType:""}}
            onSubmit = {(data, {setSubmitting}) => {
                //send req to server here
                setSubmitting(true);
                console.log(data);
                setSubmitting(false);
            }}
            >
            {({values, isSubmitting, touched, errors}) => (
                <Form>
                    <Field 
                        placeholder="Drum Number" 
                        name="drumNumber" 
                        type="input" 
                        as={TextField}
                        />
                    <div>
                        <FreeSolo 
                            placeholder="Drum Type" 
                            name="drumType" 
                            type="input"
                            label="Drum Type"
                            touched = {touched}
                            errors
                            />
                    </div>
                    <div> <div>Drum Size:</div>
                        <MyRadio name="size" type="radio" value="5" label="5" />
                        <MyRadio name="size" type="radio" value="16" label="16" />
                        <MyRadio name="size" type="radio" value="30" label="30" />
                        <MyRadio name="size" type="radio" value="55" label="55" />
                        {//add an "other" option radio+textfield
                        }
                    </div>
                    <div> <div>Drum Type:</div>
                        <MyRadio name="type" type="radio" value="DF" label="DF" />
                        <MyRadio name="type" type="radio" value="DM " label="DM" />
                    </div>
                    <div>
                        <Button disabled={!!isSubmitting} type="submit">submit</Button>
                    </div>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}
            </Formik>
        </div>
    )
};

export default CreateDrum;