import React from 'react'
import PropTypes from 'prop-types'

const ServiceElement = ({ textField, image }) => (
	<div className="service">
		<div className="service__container">
			<img src={image} alt={textField} />
			<p style={{ color: 'white' }}>{textField}</p>
		</div>
	</div>
)

ServiceElement.propTypes = {
	textField: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
}

export default ServiceElement;