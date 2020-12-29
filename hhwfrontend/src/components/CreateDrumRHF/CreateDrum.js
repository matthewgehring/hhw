import React from "react";
import { Formik, Field, Form, useField } from "formik";
import {TextField, Button, Radio, RadioGroup, FormControlLabel} from "@material-ui/core";
import FreeSolo from "../FreeSolo/FreeSolo";
import Datepicker from "../Datepicker/Datepicker";
import { useForm, Controller, useController } from "react-hook-form";
// for creating custom components with useController
// const MyRadio = ({name, control, label}) => {
//     const {
//         field: { ref, ...inputProps },
//         meta: { invalid, isTouched, isDirty },
//       } = useController({
//         name,
//         control,
//         rules: { required: true },
//         defaultValue: "",
//       });
    
//     return <FormControlLabel {...inputProps} control={<Radio />} label={label} />;
// }

const CreateDrum = (props) => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const {register, handleSubmit, handleChange, watch, errors, control, reset} = useForm();

    const onSubmit = (data) => {
            setIsSubmitting(true);
            fetch('http://localhost:3000/createdrum',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data, null, 2)
            })
            console.log(data);
            //props.history.push('/labpack');
            setIsSubmitting(false);
    }

    
    return (
        <div className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <div className="pa4 black-80">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input name="drumNumber" placeholder="Drum Number" ref={register} />
                </div>
                <div>
                    <input name="drumType" placeholder="Drum Type" ref={register} />
                </div>
                <div>
                    <Datepicker name="date" ref={register} />
                </div>
                <div>Drum Size:</div>
                <div>
                <div>
                <RadioGroup row aria-label="Drum Size:" name="drumSize" onChange={handleChange}>
                        <FormControlLabel name="size" type="radio" value="5" label="5" control={<Radio />} />
                        <FormControlLabel name="size" type="radio" value="15" label="5" control={<Radio />} />
                        <FormControlLabel name="size" type="radio" value="51" label="5" control={<Radio />} />
                        <FormControlLabel name="size" type="radio" value="52" label="5" control={<Radio />} />
                </RadioGroup>
                </div>
                <div>
                    

                </div>
                </div>
                <div> <div>Drum Type:</div>
                    <Radio name="type" type="radio" value="DF" label="DF" ref={register}/>
                    <Radio name="type" type="radio" value="DM " label="DM" ref={register}/>
                </div>
                <div>
                    <Button disabled={!!isSubmitting} type="submit">submit</Button>
                </div>
                {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
            </form>
        </div>
        </div>
    )
};

export default CreateDrum;