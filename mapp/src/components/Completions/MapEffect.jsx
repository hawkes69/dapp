import PropTypes from "prop-types";

function MapEffect({ file }) {
  return (
    <div>
      <h1>{file}</h1>
    </div>
  )
}

export default MapEffect;

MapEffect.propTypes = {
  file: PropTypes.string,
};