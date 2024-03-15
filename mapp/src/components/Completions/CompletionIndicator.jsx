import { useState } from "react";
import PropTypes from "prop-types";

import { Modal, Box } from '@mui/material';

import { humanReadable } from "~/constants.js";
import IMAGES from "~/images/Images";

import { useFetchParkCompletionQuery } from "../../store/apis/dappApi";

function CompletionIndicator({ park }) {
  const { data, isLoading } = useFetchParkCompletionQuery(humanReadable(park));
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const color = park + "Color";
  const grayscale = park + "Grayscale";
  const bronze = park + "Bronze";
  const gold = park + "Gold";

  let numImages = 0;

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

  const handleLoad = () => {
    numImages++;
    if (numImages == 1 && (data.attraction_completion == 0 ||
        (data.attraction_completion == 100 && data.show_completion == 0) ||
        (data.attraction_completion == 100 && data.show_completion == 100 && data.restaurant_completion == 0) ||
        data.restaurant_completion == 100)) {
      setImagesLoaded(true);
      numImages = 0;
    } else if (numImages == 2) {
      setImagesLoaded(true);
      numImages = 0;
    }
  }

  return (
    isLoading ? (
      <div className="flex items-center justify-center w-32 h-32 skeleton-box z-40">
        <div className="flex justify-center items-center h-full text-white z-40">Loading...</div>
      </div>
    ) : (
      <div>
        <div className="w-32 h-32 relative" onClick={handleOpen}>
          {!imagesLoaded && (
            <div className="flex items-center justify-center h-full w-full skeleton-box z-40" style={{ position: "absolute" }}>
              <div className="flex justify-center items-center h-full text-white z-40">Loading...</div>
            </div>
          )}
          {data.attraction_completion != 100 && 
            <div className="overflow-hidden absolute z-30" style={{ maxHeight: `${100 - data.attraction_completion}%` }}>
              <img src={IMAGES[grayscale]} onLoad={handleLoad} />
            </div>
          }

          {(data.attraction_completion != 0) &&
            <div className="overflow-hidden z-20 absolute" style={{ maxHeight: `${data.attraction_completion != 100 ? 100 : 100 - data.show_completion}%` }}>
              <img src={IMAGES[color]} onLoad={handleLoad} />
            </div>
          }

          {(data.show_completion != 0 && data.restaurant_completion_completion != 100 && data.attraction_completion == 100) &&
            <div className="overflow-hidden z-10 absolute" style={{ maxHeight: `${data.show_completion != 100 ? 100 : 100 - data.restaurant_completion}%` }}>
              <img src={IMAGES[bronze]} onLoad={handleLoad} />
            </div>
          }

          {(data.attraction_completion == 100 && data.show_completion == 100 && data.restaurant_completion != 0) && 
            <img className="absolute z-0" src={IMAGES[gold]} onLoad={handleLoad} />
          }
        </div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style} className="flex flex-col gap-4 min-w-72">
            <h2 className="font-bold text-xl text-center">{humanReadable(park)}</h2>
            <hr className="border-black"/>
            <ul>
              <li>Rides: {Math.round(data.attraction_completion)}%</li>
              <li>Shows: {Math.round(data.show_completion)}%</li>
              <li>Restaurants: {Math.round(data.restaurant_completion)}%</li>
            </ul>
            <hr className="border-black"/>
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
