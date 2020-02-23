import React from 'react';

export const CheckBox = props => {
    return (
        <div className="flex-container align-center">
            <input key={props.name} onClick={props.handleChange} type="checkbox" checked={props.isChecked} value={props.name} /> {props.name}
        </div>
    )
}

export default CheckBox;