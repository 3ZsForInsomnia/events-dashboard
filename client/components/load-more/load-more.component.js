import React from 'react'
import './load-more.styles.css';

export const LoadMore = (props) => {
    return(
        <div className='load-more'>
            <button
                className='load-more__button'
                onClick={() => props.loadMore()}
            >
                Load More
            </button>
        </div>
    )
}

export default LoadMore;