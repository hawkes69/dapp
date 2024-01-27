import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

import { useFetchAttractionQuery } from '../../store/apis/dappApi';

function AttractionDetails() {
  const { id } = useParams();
  const { data: attraction, isLoading } = useFetchAttractionQuery(id);
  const parks = ['Magic Kingdom', 'Epcot', 'Hollywood Studios', 'Animal Kingdom', 'Universal Studio', 'Islands of Adventure'];


  const [park, setPark] = useState(parks[0]);
  const [inputValue, setInputValue] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setPark(attraction.park);
      setCompleted(attraction.completed)
    }
  }, [isLoading]);

  return isLoading ? (
    <div className="flex items-center justify-center">Loading...</div>
  ) : (
    <div>
      <FormGroup className='flex flex-col m-6 gap-4'>
        <TextField 
          label="Name"
          defaultValue={attraction.name}
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
        <FormControlLabel control={<Checkbox checked={completed} onChange={(event) => {setCompleted(event.target.checked)}} />} label="Completed" />
        <div className='outline rounded-lg h-80 flex justify-center align-center'>map will go here</div>
        <Button variant="contained">Save</Button>
      </FormGroup>
    </div>
  );
}

export default AttractionDetails;
