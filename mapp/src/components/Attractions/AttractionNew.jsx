import { useState } from "react";
import { useNavigate  } from 'react-router-dom';

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

import { useAddAttractionMutation } from "../../store/apis/dappApi";

function AttractionDetails() {
  const navigate = useNavigate ();

  const parks = [
    "Magic Kingdom",
    "Epcot",
    "Hollywood Studios",
    "Animal Kingdom",
    "Universal Studio",
    "Islands of Adventure",
  ];

  const [addAttraction] = useAddAttractionMutation();
  const [park, setPark] = useState(parks[0]);
  const [inputValue, setInputValue] = useState("");
  const [completed, setCompleted] = useState(false);
  const [name, setName] = useState("");

  const handleAddAttraction = () => {
    const attractionData = {
      name,
      park,
      location: "this a location",
      completed
    };
  
    addAttraction(attractionData);
    navigate('/attractions');
  };
  

  return (
    <div>
      <FormGroup className="flex flex-col m-6 gap-4">
        <TextField label="Name" 
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Autocomplete
          value={park}
          onChange={(event, newValue) => {
            setPark(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={parks}
          renderInput={(params) => <TextField {...params} label="Park" />}
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(event) => {
                setCompleted(event.target.checked);
              }}
            />
          }
          label="Completed"
        />
        <div className="outline rounded-lg h-80 flex justify-center align-center">
          map will go here
        </div>
        <Button variant="contained" onClick={handleAddAttraction}>Create</Button>
      </FormGroup>
    </div>
  );
}

export default AttractionDetails;
