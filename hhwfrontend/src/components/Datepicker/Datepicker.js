import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { useForm, Controller } from "react-hook-form";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function Datepicker(props) {
  const {register, handleSubmit, setValue} = useForm();
  const onSubmit = data => console.log(data);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  

  const handleDateChange = (date, dateString) => {
    setSelectedDate(date);
    setValue(props.name, date);    
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          name= {props.name}
          disableToolbar
          ref={register}
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date"
          onChange={handleDateChange}
          value={selectedDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
  );
}