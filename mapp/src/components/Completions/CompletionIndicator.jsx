import PropTypes from "prop-types";
import IMAGES from "~/images/Images";

function CompletionIndicator({ name }) {
  const color = name + "Color";
  const grayscale = name + "Grayscale";
  return (
    <div className="w-32 h-32">
      <img className="" src={IMAGES[grayscale]} />
      <img className="" src={IMAGES[color]} />
    </div>
  );
}

CompletionIndicator.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CompletionIndicator;
