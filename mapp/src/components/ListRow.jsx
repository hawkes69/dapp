import { Link } from "react-router-dom";

import {
  Checkbox,
  FormControlLabel,
  TableCell,
  TableRow,
} from "@mui/material";

import { Edit } from "@mui/icons-material";

import PropTypes from 'prop-types';

import { useUpdateAttractionMutation } from "../store/apis/dappApi";
import { useUpdateRestaurantMutation } from "../store/apis/dappApi";
import { useUpdateShowMutation } from "../store/apis/dappApi";

function ListRow({ row, type }) {
  const [updateAttraction] = useUpdateAttractionMutation();
  const [updateRestaurant] = useUpdateRestaurantMutation();
  const [updateShow] = useUpdateShowMutation();

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
            onChange={(event) => {
              if (type === "Attractions") {
                updateAttraction({ ...row, completed: event.target.checked });
              } else if (type === "Restaurants") {
                updateRestaurant({ ...row, completed: event.target.checked });
              } else if (type === "Shows") {
                updateShow({ ...row, completed: event.target.checked });
              }
            }}
          />
        }
      />
      </TableCell>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell>{row.park}</TableCell>
      <TableCell>{row.area}</TableCell>
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
  type: PropTypes.string.isRequired
};