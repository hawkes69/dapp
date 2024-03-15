import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { TextField, FormGroup, Button } from "@mui/material";

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
import IMAGES from "../images/Images";
import { PARK_AREAS, toCamelCase } from "../constants";

function Edit({ type }) {  
  const { id } = useParams();
  const navigate = useNavigate();
  const parks = Object.keys(PARK_AREAS);

  const [name, setName] = useState("");
  const [park, setPark] = useState(parks[0]);
  const [area, setArea] = useState(PARK_AREAS[park][0]);

  let mutationVariables;
  
  const [addAttractionTrigger] = useAddAttractionMutation();
  const [updateAttractionTrigger] = useUpdateAttractionMutation();
  const [removeAttractionTrigger] = useRemoveAttractionMutation();
  const fetchAttractionResult = useFetchAttractionQuery(
    id,
    { skip: ["restaurants", "shows"].includes(type) } // "attractions"
  );
  
  const [addRestaurantTrigger] = useAddRestaurantMutation();
  const [updateRestaurantTrigger] = useUpdateRestaurantMutation();
  const [removeRestaurantTrigger] = useRemoveRestaurantMutation();
  const fetchRestaurantResult = useFetchRestaurantQuery(
    id,
    { skip: ["attractions", "shows"].includes(type) } // "restaurants"
  );
  
  const [addShowTrigger] = useAddShowMutation();
  const [updateShowTrigger] = useUpdateShowMutation();
  const [removeShowTrigger] = useRemoveShowMutation();
  const fetchShowResult = useFetchShowQuery(
    id,
    { skip: ["attractions", "restaurants"].includes(type) } // "shows"
  );
  
  if (type === "attractions") {
    mutationVariables = {
      addMutation: addAttractionTrigger,
      updateMutation: updateAttractionTrigger,
      removeMutation: removeAttractionTrigger,
      fetchData: fetchAttractionResult,
    };
  } else if (type === "restaurants") {
    mutationVariables = {
      addMutation: addRestaurantTrigger,
      updateMutation: updateRestaurantTrigger,
      removeMutation: removeRestaurantTrigger,
      fetchData: fetchRestaurantResult,
    };
  } else if (type === "shows") {
    mutationVariables = {
      addMutation: addShowTrigger,
      updateMutation: updateShowTrigger,
      removeMutation: removeShowTrigger,
      fetchData: fetchShowResult,
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
    };

    updateMutation(updateData);
    navigate(`/${type}`);
  }

  const handleAdd = () => {
    const attractionData = {
      name,
      park,
      area,
    };

    addMutation(attractionData);
    navigate(`/${type}`);
  }

  useEffect(() => {
    if (!isLoading && id != null) {
      setPark(data.park);
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
