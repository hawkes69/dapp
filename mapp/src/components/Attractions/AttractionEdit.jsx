import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { TextField, FormControlLabel, Checkbox, FormGroup, Button } from "@mui/material";

import { useAddAttractionMutation, useFetchAttractionQuery, useUpdateAttractionMutation, useRemoveAttractionMutation } from "../../store/apis/dappApi";
import Dropdown from "../Dropdown";
import { PARK_AREAS } from "../../constants";

function AttractionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const parks = Object.keys(PARK_AREAS);

  const [addAttraction] = useAddAttractionMutation();
  const { data: attraction, isLoading } = useFetchAttractionQuery(id);
  const [updateAttraction] = useUpdateAttractionMutation();
  const [removeAttraction] = useRemoveAttractionMutation();
  
  const [park, setPark] = useState(parks[0]);
  const [area, setArea] = useState(PARK_AREAS[park][0]);
  const [completed, setCompleted] = useState(false);
  const [name, setName] = useState("");

  const handleDelete = () => {
    removeAttraction(id);
    navigate('/attractions');
  }

  const handleUpdate = () => {
    const attractionData = {
      id,
      name,
      park,
      area,
      completed,
    };

    updateAttraction(attractionData);
    navigate('/attractions');
  }

  const handleAddAttraction = () => {
    const attractionData = {
      name,
      park,
      area,
      completed
    };

    addAttraction(attractionData);
    navigate('/attractions');
  }

  useEffect(() => {
    if (!isLoading && id != null) {
      setPark(attraction.park);
      setCompleted(attraction.completed);
      setName(attraction.name);
      setArea(attraction.area);
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
        />       
        <Dropdown
          options={parks}
          value={park}
          label="Park"
          setValue={setPark}
        />
        <Dropdown
          options={PARK_AREAS[park]}
          value={area}
          label="Area"
          setValue={setArea}
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
        {id != null ? (
          <div className="flex justify-center gap-4">            
            <Button variant="contained" onClick={handleUpdate}>Save</Button>
            <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
          </div>
        ) : (
          <div className="flex justify-center">
            <Button variant="contained" onClick={handleAddAttraction}>Create</Button>
          </div>
        )}
      </FormGroup>
    </div>
  );
}

export default AttractionDetails;
