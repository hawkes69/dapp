import { useState } from "react";
import PropTypes from "prop-types";

import { Autocomplete, TextField } from "@mui/material";

function Dropdown({ options, value, label, setValue }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <Autocomplete
      options={options}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
}

export default Dropdown;

Dropdown.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};