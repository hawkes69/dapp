import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function List() {
  const dummy = [
    {
      "name": "Flight of the Hippogriff",
      "park": "Universal Islands of Adventure",
      "location": "The Wizarding World of Harry Potter – Hogsmeade",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Hagrid's Magical Creatures Motorbike Adventure",
      "park": "Universal Islands of Adventure",
      "location": "The Wizarding World of Harry Potter – Hogsmeade",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Harry Potter and the Escape from Gringotts",
      "park": "Universal Studios Florida",
      "location": "The Wizarding World of Harry Potter – Diagon Alley",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Hollywood Rip Ride Rockit",
      "park": "Universal Studios Florida",
      "location": "Production Central",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Revenge of the Mummy: The Ride",
      "park": "Universal Studios Florida",
      "location": "New York",
      "type": "ride",
      "completed": false
    },
    {
      "name": "The Incredible Hulk Coaster",
      "park": "Universal Islands of Adventure",
      "location": "Marvel Super Hero Island",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Troller Coaster",
      "park": "Universal Studios Florida",
      "location": "DreamWorks Land",
      "type": "ride",
      "completed": false
    },
    {
      "name": "VelociCoaster",
      "park": "Universal Islands of Adventure",
      "location": "Jurassic Park",
      "manufacturer": "Intamin",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Despicable Me Minion Mayhem",
      "park": "Universal Studios Florida",
      "location": "Minion Land on Illumination Ave",
      "type": "motion simulator",
      "completed": false
    },
    {
      "name": "Harry Potter and the Forbidden Journey",
      "park": "Universal Islands of Adventure",
      "location": "The Wizarding World of Harry Potter – Hogsmeade",
      "type": "motion simulator",
      "completed": false
    },
    {
      "name": "Race Through New York Starring Jimmy Fallon",
      "park": "Universal Studios Florida",
      "location": "New York",
      "type": "motion simulator",
      "completed": false
    },
    {
      "name": "The Amazing Adventures of Spider-Man",
      "park": "Universal Islands of Adventure",
      "location": "Marvel Super Hero Island",
      "type": "motion simulator",
      "completed": false
    },
    {
      "name": "The Simpsons Ride",
      "park": "Universal Studios Florida",
      "location": "World Expo/Springfield",
      "type": "motion simulator",
      "completed": false
    },
    {
      "name": "Transformers: The Ride 3D",
      "park": "Universal Studios Florida",
      "location": "Production Central",
      "type": "motion simulator",
      "completed": false
    },
    {
      "name": "Caro–Seuss–el",
      "park": "Universal Islands of Adventure",
      "location": "Seuss Landing",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Doctor Doom's Fearfall",
      "park": "Universal Islands of Adventure",
      "location": "Marvel Super Hero Island",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Dudley Do-Right's Ripsaw Falls",
      "park": "Universal Islands of Adventure",
      "location": "Toon Lagoon",
      "type": "ride",
      "completed": false
    },
    {
      "name": "E.T. Adventure",
      "park": "Universal Studios Florida",
      "location": "DreamWorks Land",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Fast & Furious: Supercharged",
      "park": "Universal Studios Florida",
      "location": "San Francisco",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Hogwarts Express",
      "park": "Universal Studios Florida/Universal Islands of Adventure",
      "location": "Hogsmeade and London/Diagon Alley",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Illumination's Villain-Con Minion Blast",
      "park": "Universal Studios Florida",
      "location": "Minion Land on Illumination Ave",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Jurassic Park River Adventure",
      "park": "Universal Islands of Adventure",
      "location": "Jurassic Park",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Kang & Kodos' Twirl 'n' Hurl",
      "park": "Universal Studios Florida",
      "location": "World Expo",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Men in Black: Alien Attack",
      "park": "Universal Studios Florida",
      "location": "World Expo",
      "type": "ride",
      "completed": false
    },
    {
      "name": "One Fish, Two Fish, Red Fish, Blue Fish",
      "park": "Universal Islands of Adventure",
      "location": "Seuss Landing",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Popeye & Bluto's Bilge-Rat Barges",
      "park": "Universal Islands of Adventure",
      "location": "Toon Lagoon",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Skull Island: Reign of Kong",
      "park": "Universal Islands of Adventure",
      "location": "Skull Island",
      "type": "ride",
      "completed": false
    },
    {
      "name": "Storm Force Accelatron",
      "park": "Universal Islands of Adventure",
      "location": "Marvel Super Hero Island",
      "type": "ride",
      "completed": false
    },
    {
      "name": "The Cat In The Hat",
      "park": "Universal Islands of Adventure",
      "location": "Seuss Landing",
      "type": "ride",
      "completed": false
    },
    {
      "name": "The High in the Sky Seuss Trolley Train Ride",
      "park": "Universal Islands of Adventure",
      "location": "up ur butt",
      "type": "ride",
      "completed": false
    },
  ]
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell onClick={handleToggle}>
              Completed
              {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
            </TableCell>
            <TableCell>
              Attraction
              {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
            </TableCell>
            <TableCell>
              Park
              {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummy.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <Checkbox
                  checked={row.completed}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell >{row.park}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List;