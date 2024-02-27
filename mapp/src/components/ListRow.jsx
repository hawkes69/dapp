import { Link } from "react-router-dom";

import {
  Checkbox,
  FormControlLabel,
  TableCell,
  TableRow,
} from "@mui/material";

import { Edit } from "@mui/icons-material";

import PropTypes from 'prop-types';

import { useUpdateAttractionMutation, useUpdateRestaurantMutation, useUpdateShowMutation } from "../store/apis/dappApi";

function ListRow({ row, type, handleRowUpdate }) {
  const [updateAttraction] = useUpdateAttractionMutation();
  const [updateRestaurant] = useUpdateRestaurantMutation();
  const [updateShow] = useUpdateShowMutation();

  const handleCheck = (event) => {
    handleRowUpdate(row.park);
    if (type === "Attractions") {
      updateAttraction({ ...row, completed: event.target.checked });
    } else if (type === "Restaurants") {
      updateRestaurant({ ...row, completed: event.target.checked });
    } else if (type === "Shows") {
      updateShow({ ...row, completed: event.target.checked });
    }
  }

  return (
    <TableRow
      key={row.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell>
      <FormControlLabel
        control={
          <Checkbox
            checked={row.completed}
            onChange={handleCheck}
          />
        }
      />
      </TableCell>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell>
        <Link to={`/${type.toLowerCase()}/${row.id}/edit`}>
          <Edit sx={{ fontSize: 18 }} />
        </Link>
      </TableCell>
    </TableRow>
  );
}

export default ListRow;

ListRow.propTypes = {
  row: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  handleRowUpdate: PropTypes.func.isRequired,
};