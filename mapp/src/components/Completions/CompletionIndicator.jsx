import PropTypes from "prop-types";
import IMAGES from "~/images/Images";

function CompletionIndicator({ name, attractionsCompletion, showsCompletion, restaurantsCompletion}) {
  const color = name + "Color";
  const grayscale = name + "Grayscale";
  const bronze = name + "Bronze";
  const gold = name + "Gold";
  console.log(name)
  console.log("r: ", restaurantsCompletion);
  console.log("s:", showsCompletion);
  console.log("a:", attractionsCompletion);

  return (
    // This block is very confusing. That's due to the color being revealed top down so the order of images must be backward. 

    <div className="w-32 h-32 relative">
      {attractionsCompletion != 0 && 
        <div className="overflow-hidden absolute z-30" style={{ maxHeight: `${attractionsCompletion}%` }}>
          <img src={IMAGES[grayscale]} />
        </div>
      }

      {(attractionsCompletion != 0 || showsCompletion != 0) &&
        <div className="overflow-hidden absolute z-20" style={{ maxHeight: `${attractionsCompletion != 0 ? 100 : showsCompletion}%` }}>
          <img src={IMAGES[color]} />
        </div>
      }

      {attractionsCompletion == 0 &&
        <div className="overflow-hidden absolute z-10" style={{ maxHeight: `${showsCompletion != 0 ? 100 : restaurantsCompletion}%` }}>
          <img src={IMAGES[bronze]} />
        </div>
      }

      {(attractionsCompletion == 0 && showsCompletion == 0) && 
        <img className="absolute z-0" src={IMAGES[gold]} />
      }
    </div>
  );
}

CompletionIndicator.propTypes = {
  name: PropTypes.string.isRequired,
  attractionsCompletion: PropTypes.number.isRequired,
  showsCompletion: PropTypes.number.isRequired,
  restaurantsCompletion: PropTypes.number.isRequired,
};

export default CompletionIndicator;
