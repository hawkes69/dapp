import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Modal, Box, Button } from '@mui/material';

import IMAGES from "~/images/Images";

import { useFetchParkCompletionQuery } from "../../store/apis/dappApi";

function humanReadable(camelCase) {
  console.log(camelCase)
  return camelCase.replace(/([A-Z])/g, ' $1')
              .replace(/^./, function(str){ return str.toUpperCase(); });
}

function CompletionIndicator({ park }) {
  const { data, isLoading } = useFetchParkCompletionQuery(humanReadable(park));

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const color = park + "Color";
  const grayscale = park + "Grayscale";
  const bronze = park + "Bronze";
  const gold = park + "Gold";

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    width: "max-content",
  };

  return (
    isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <div className="w-32 h-32 relative" onClick={handleOpen}>
          {data.attraction_completion != 100 && 
            <div className="overflow-hidden absolute z-30" style={{ maxHeight: `${100 - data.attraction_completion}%` }}>
              <img src={IMAGES[grayscale]} />
            </div>
          }

          {(data.attraction_completion != 0) &&
            <div className="overflow-hidden z-20 absolute" style={{ maxHeight: `${data.attraction_completion != 100 ? 100 : 100 - data.show_completion}%` }}>
              <img src={IMAGES[color]} />
            </div>
          }

          {(data.show_completion != 0 && data.restaurant_completion_completion != 100 && data.attraction_completion == 100) &&
            <div className="overflow-hidden z-10 absolute" style={{ maxHeight: `${data.show_completion != 100 ? 100 : 100 - data.restaurant_completion}%` }}>
              <img src={IMAGES[bronze]} />
            </div>
          }

          {(data.attraction_completion == 100 && data.show_completion == 100 && data.restaurant_completion != 0) && 
            <img className="absolute z-0" src={IMAGES[gold]} />
          }
        </div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style} className="flex flex-col gap-4 min-w-72">
            <h2 className="font-bold text-xl text-center">{humanReadable(park)}</h2>
            <hr className="border-black"/>
            <ul>
              <li>Attractions: {Math.round(data.attraction_completion)}%</li>
              <li>Shows: {Math.round(data.show_completion)}%</li>
              <li>Restaurants: {Math.round(data.restaurant_completion)}%</li>
            </ul>
            <hr className="border-black"/>
            <Button variant="contained">
              <Link to={`/map/${park}`}>{humanReadable(park)}</Link>
            </Button>
          </Box>
        </Modal>
      </div>
    )
  );
}

CompletionIndicator.propTypes = {
  park: PropTypes.string.isRequired,
};

export default CompletionIndicator;
