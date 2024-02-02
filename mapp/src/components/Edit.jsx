import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { TextField, FormControlLabel, Checkbox, FormGroup, Button } from "@mui/material";

import { 
  useAddAttractionMutation,
  useFetchAttractionQuery,
  useUpdateAttractionMutation,
  useRemoveAttractionMutation,
  useAddRestaurantMutation,
  useFetchRestaurantQuery,
  useUpdateRestaurantMutation,
  useRemoveRestaurantMutation,
  useAddShowMutation,
  useFetchShowQuery,
  useUpdateShowMutation,
  useRemoveShowMutation,
} from "../store/apis/dappApi";

import Dropdown from "./Dropdown";
import { PARK_AREAS } from "../constants";

function Edit({ type }) {  
  const { id } = useParams();
  const navigate = useNavigate();
  const parks = Object.keys(PARK_AREAS);

  const [name, setName] = useState("");
  const [park, setPark] = useState(parks[0]);
  const [area, setArea] = useState(PARK_AREAS[park][0]);
  const [completed, setCompleted] = useState(false);

  let mutationVariables;
  
  // This is bad practice because hooks shouldn't be called like this. However it does work. SO may help but for now I'm leaving as is. 

  if (type === "attractions") {
    mutationVariables = {
      addMutation: useAddAttractionMutation()[0],
      updateMutation: useUpdateAttractionMutation()[0],
      removeMutation: useRemoveAttractionMutation()[0],
      fetchData: useFetchAttractionQuery(id),
    };
  } else if (type === "restaurants") {
    mutationVariables = {
      addMutation: useAddRestaurantMutation()[0],
      updateMutation: useUpdateRestaurantMutation()[0],
      removeMutation: useRemoveRestaurantMutation()[0],
      fetchData: useFetchRestaurantQuery(id),
    };
  } else if (type === "shows") {
    mutationVariables = {
      addMutation: useAddShowMutation()[0],
      updateMutation: useUpdateShowMutation()[0],
      removeMutation: useRemoveShowMutation()[0],
      fetchData: useFetchShowQuery(id),
    };
  }
  
  const {
    addMutation,
    updateMutation,
    removeMutation,
    fetchData: { data, isLoading },
  } = mutationVariables;
  
  const handleDelete = () => {
    removeMutation(id);
    navigate(`/${type}`);
  }

  const handleUpdate = () => {
    const updateData = {
      id,
      name,
      park,
      area,
      completed,
    };

    updateMutation(updateData);
    navigate(`/${type}`);
  }

  const handleAdd = () => {
    const attractionData = {
      name,
      park,
      area,
      completed
    };

    addMutation(attractionData);
    navigate(`/${type}`);
  }

  useEffect(() => {
    if (!isLoading && id != null) {
      setPark(data.park);
      setCompleted(data.completed);
      setName(data.name);
      setArea(data.area);
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
            <Button variant="contained" onClick={handleAdd}>Create</Button>
          </div>
        )}
      </FormGroup>
    </div>
  );
}

export default Edit;

Edit.propTypes = {
  type: PropTypes.string.isRequired,
};
