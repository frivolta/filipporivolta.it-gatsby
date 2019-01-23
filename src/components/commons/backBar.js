import React from 'react';
import { Link } from 'gatsby'

const BackBar = ({children})=>(
    <div className="BackBar gradient">
        <Link to="/" className="BackBar__link">{children}</Link>
    </div>
)
export default BackBar;