import React from "react";
import { Formik, Field, Form, useField } from "formik";
import {TextField, Button, Radio, FormControlLabel} from "@material-ui/core";
import FreeSolo from "../FreeSolo/FreeSolo";
import Datepicker from "../Datepicker/Datepicker";

const MyRadio = ({label, ...props }) => {
    const [field] = useField(props);
    return (
        <FormControlLabel {...field} control={<Radio />} label={label} />
    )
}

const CreateDrum = (props) => {
    
    return (
        <div className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <div className="pa4 black-80">

            <Formik 
            initialValues={{ drumNumber: "", drumType:"", date: new Date()}}
            onSubmit = {(data, {setSubmitting}) => {
                //send req to server here
                setSubmitting(true);
                fetch('http://localhost:3000/createdrum',{
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data, null, 2)
                })
                console.log(props);
                props.history.push('/labpack');
                setSubmitting(false);

            }}
            >
            {({values, isSubmitting, touched, errors, setFieldValue}) => (
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
                            />
                    </div>
                    <div>
                        <Field 
                            name="date" 
                            type="input"
                            as={Datepicker}
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
                    {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                </Form>
            )}
            </Formik>
        </div>
        </div>
    )
};

export default CreateDrum;