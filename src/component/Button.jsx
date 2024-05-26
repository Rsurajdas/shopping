import PropTypes from 'prop-types';

export default function Button({ title, className, type }) {
  return (
    <button type={type} className={className}>
      {title}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
}
