import React from "react";
import {TextField, Button, Radio, RadioGroup, FormControlLabel} from "@material-ui/core";
import FreeSolo from "../FreeSolo/FreeSolo";
import Datepicker from "../Datepicker/Datepicker";
import { useForm, Controller, useController } from "react-hook-form";

const CreateDrum = (props) => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const {register, handleSubmit, control, setValue} = useForm();

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

    const handleChange = (ev) => {
        setValue(ev.target.name, ev.target.value);
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
                <Controller as = {
                    <RadioGroup row aria-label="Drum Size:" name="drumSize" onChange={handleChange} ref={register}>
                            <FormControlLabel name="size" type="radio" value="5" label="5" control={<Radio />} />
                            <FormControlLabel name="size" type="radio" value="16" label="16" control={<Radio />} />
                            <FormControlLabel name="size" type="radio" value="30" label="30" control={<Radio />} />
                            <FormControlLabel name="size" type="radio" value="55" label="55" control={<Radio />} />
                    </RadioGroup>
                }
                name="drumSize"
                defaultValue = {'55'}
                control={control}
              />
                </div>
                <div> <div>Drum Material:</div>
                <Controller as = {
                    <RadioGroup row aria-label="Drum Size:" name="drumMaterial" onChange={handleChange} ref={register}>
                            <FormControlLabel name="type" type="radio" value="DF" label="DF" control={<Radio />} />
                            <FormControlLabel name="type" type="radio" value="DM " label="DM" control={<Radio />} />
                    </RadioGroup>
                }
                name={"drumMaterial"}
                defaultValue = {"DF"}
                control={control}
              />
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