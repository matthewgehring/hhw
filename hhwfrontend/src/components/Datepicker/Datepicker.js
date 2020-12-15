import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {useField, FormikComputedProps} from "formik";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function Datepicker({...props}) {
  const [, , helpers] = useField(props);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  

  const handleDateChange = (date, dateString) => {
    setSelectedDate(date);
    helpers.setValue(date);    
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          name="dob"
          disableToolbar
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