import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

class NoPizza extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="blank-wrapper">
                    <FontAwesomeIcon className="blank-pizza" icon={faPizzaSlice} />
                    <p>No pizza is ordered...</p>
                </div>
            </Fragment>
        )
    }
}

export default NoPizza;