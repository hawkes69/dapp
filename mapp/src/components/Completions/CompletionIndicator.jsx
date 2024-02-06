import PropTypes from "prop-types";
import IMAGES from "~/images/Images";

function CompletionIndicator({ name }) {
  const color = name + "Color";
  const grayscale = name + "Grayscale";

  return (
    <div className="w-32 h-32 relative">
      <div className="overflow-hidden absolute z-10" style={{ maxHeight: `${Math.floor(Math.random() * 100) + 1}%` }}>
        <img src={IMAGES[grayscale]} />
      </div>
      <img className="absolute" src={IMAGES[color]} />
    </div>
  );
}

CompletionIndicator.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CompletionIndicator;
