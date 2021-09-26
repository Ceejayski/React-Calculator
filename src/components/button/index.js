import PropTypes from 'prop-types';
import "./style.scss";

const Button = ({ name }) => (
  <div>
    <button type="button">
      {name}
    </button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;