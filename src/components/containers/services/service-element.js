import React from 'react'
import PropTypes from 'prop-types'

const ServiceElement = ({ textField, image }) => (
	<div className="ServiceElement">
		<div className="ServiceElement__container">
			<img className="ServiceElement__icon" src={image} alt={textField} />
			<p className="ServiceElement__text">{textField}</p>
		</div>
	</div>
)

ServiceElement.propTypes = {
  textField: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default ServiceElement;