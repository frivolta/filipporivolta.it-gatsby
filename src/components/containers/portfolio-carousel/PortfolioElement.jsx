import React from 'react';
import { Link } from "gatsby"

const PortfolioElement = ({ slug, title, image }) => (
	<div className="PortfolioElement">
		<div className="PortfolioElement__container">
			<Link to={slug}>
				<div className="PortfolioElement__text">
					<h3 className="color--gradient">{title}</h3>
				</div>
				<div className="PortfolioElement__image">
					<img
						src={image}
						alt={title}
					/>
				</div>
			</Link>
		</div>
	</div>
);
export default PortfolioElement;
