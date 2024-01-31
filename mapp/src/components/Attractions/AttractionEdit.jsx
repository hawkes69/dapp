import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

import { useFetchAttractionQuery, useUpdateAttractionMutation, useRemoveAttractionMutation } from "../../store/apis/dappApi";

function AttractionDetails() {
  const { id } = useParams();
  const { data: attraction, isLoading } = useFetchAttractionQuery(id);
  const parks = [
    "Magic Kingdom",
    "Epcot",
    "Hollywood Studios",
    "Animal Kingdom",
    "Universal Studio",
    "Islands of Adventure",
  ];

  const [park, setPark] = useState(parks[0]);
  const [inputValue, setInputValue] = useState("");
  const [completed, setCompleted] = useState(false);
  const [updateAttraction] = useUpdateAttractionMutation();
  const [removeAttraction] = useRemoveAttractionMutation();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleDelete = () => {
    removeAttraction(id);
    navigate('/attractions');
  }

  const handleUpdate = () => {
    const attractionData = {
      id,
      name,
      park,
      location: "this a location",
      completed,
    };

    updateAttraction(attractionData);
    navigate('/attractions');
  }

  

  useEffect(() => {
    if (!isLoading) {
      setPark(attraction.park);
      setCompleted(attraction.completed);
      setName(attraction.name);
    }
  }, [isLoading]);

  return isLoading ? (
    <div className="flex items-center justify-center">Loading...</div>
  ) : (
    <div>
      <FormGroup className="flex flex-col m-6 gap-4">
      <TextField label="Name" 
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />        <Autocomplete
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
              checked={completed}
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
        <div className="flex justify-center gap-4">
          <Button variant="contained" onClick={handleUpdate}>Save</Button>
          <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
        </div>
      </FormGroup>
    </div>
  );
}

export default AttractionDetails;
