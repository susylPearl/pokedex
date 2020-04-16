import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const SearchFilter = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
         flexDirection: 'row',
         marginBottom: 20
        },
        radioGroup: {
            flexDirection: 'row',
        }
      }));
    
    const [value, setValue] = useState('name');
    const classes = useStyles();
    
    const handleChange = (event) => {
        setValue(event.target.value);
        props.setValue(event.target.value);
    };

    return(
        <FormControl component="fieldset" className={classes.root}>
        <RadioGroup aria-label="filter" name="filter1" value={value} onChange={handleChange} className={classes.radioGroup}>
          <FormControlLabel value="name" control={<Radio />} label="Name" />
          <FormControlLabel value="gender" control={<Radio />} label="Gender" />
          <FormControlLabel value="pokemon-habitat" control={<Radio />} label="Habitat" />
          <FormControlLabel value="pokemon-color" control={<Radio />} label="Color" />
        </RadioGroup>
      </FormControl>
    );
};

export default SearchFilter;