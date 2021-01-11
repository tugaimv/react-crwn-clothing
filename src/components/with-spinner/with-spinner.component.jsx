import React from 'react';

import './with-spinner.styles.scss';


const WithSpinner = WrappedElement => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <div className='spinner-overlay'>
            <div className="spinner-container"></div>
        </div>
    )   : (<WrappedElement {...otherProps}/>)    
} 

export default WithSpinner;