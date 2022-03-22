import React from 'react';
import propTypes from 'prop-types';

export default function Ad(props) {

    let id = props['id'];
    let children = props['children'];

    return (
        <div>
            <p>Start</p>
            <p>
                {
                    id + ': ' + children
                }
            </p>
            <p>End</p>
        </div>
    );
};

Ad['defaultProps'] = {
    children : null,
};

Ad['propTypes'] = {
    id : propTypes.number,
    children : propTypes.string,
};