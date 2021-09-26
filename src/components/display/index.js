import PropTypes from 'prop-types';
import './style.css';

const Display = ({ value }) => (
  <div className="component-display">
    {value}
  </div>
);

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
};

export default Display;
